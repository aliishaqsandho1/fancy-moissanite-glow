
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Headphones, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supportOptions } from '@/data/siteData';

export default function SupportMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-9">
          <Headphones size={18} />
          <span className="hidden sm:inline">Support</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <div className="p-2">
            <h3 className="font-medium text-sm">How can we help you?</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Choose from the options below
            </p>
          </div>

          <DropdownMenuSeparator />
          
          <div className="grid grid-cols-2 gap-1 p-2">
            <Link to="/contact" className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-muted text-center">
              <Phone size={20} className="mb-1" />
              <span className="text-xs">Call Us</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-muted text-center">
              <Mail size={20} className="mb-1" />
              <span className="text-xs">Email</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-muted text-center">
              <MessageCircle size={20} className="mb-1" />
              <span className="text-xs">Live Chat</span>
            </Link>
            <Link to="/faq" className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-muted text-center">
              <Headphones size={20} className="mb-1" />
              <span className="text-xs">FAQs</span>
            </Link>
          </div>

          <DropdownMenuSeparator />
          
          {supportOptions.map((option) => (
            <DropdownMenuItem key={option.id} asChild>
              <Link to={option.link} className="cursor-pointer">
                {option.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
