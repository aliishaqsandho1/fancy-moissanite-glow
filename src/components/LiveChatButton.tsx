
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, MinusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LiveChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{from: string, text: string, time: string}[]>([
    {from: 'agent', text: 'Hello! How can I help you today?', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
  ]);
  const { toast } = useToast();

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(false);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    // Add user message
    setChatHistory([...chatHistory, {from: 'user', text: message, time}]);
    setMessage('');
    
    // Simulate agent response after a delay
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        {
          from: 'agent', 
          text: "Thanks for your message! Our customer service team will get back to you shortly. We typically respond within 1-2 hours during business hours.",
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }
      ]);
    }, 1500);

    toast({
      title: "Message Sent",
      description: "Our team will respond shortly!",
    });
  };

  return (
    <>
      {/* Fixed Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={toggleChat}
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* Chat Window */}
        {isOpen && (
          <div 
            className={`absolute bottom-16 right-0 w-80 sm:w-96 bg-background border border-border rounded-lg shadow-lg overflow-hidden transition-all ${
              isMinimized ? 'h-12' : 'h-96'
            }`}
          >
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-3 flex items-center justify-between">
              <h3 className="font-medium">Live Chat Support</h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-primary-foreground hover:text-primary-foreground/80 hover:bg-transparent"
                  onClick={minimizeChat}
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-primary-foreground hover:text-primary-foreground/80 hover:bg-transparent"
                  onClick={closeChat}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div className="h-64 overflow-y-auto p-3 flex flex-col space-y-3">
                  {chatHistory.map((chat, index) => (
                    <div 
                      key={index} 
                      className={`flex ${chat.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          chat.from === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm">{chat.text}</p>
                        <span className="text-xs opacity-70 block text-right mt-1">{chat.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={sendMessage} className="border-t border-border p-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-muted rounded-l-md border-0 focus:ring-0 px-3 py-2 text-sm"
                    />
                    <Button 
                      type="submit" 
                      variant="default"
                      className="rounded-l-none"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
