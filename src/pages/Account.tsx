
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  User, 
  Package, 
  Heart, 
  CreditCard, 
  Settings, 
  Bell, 
  LogOut,
  ShoppingBag,
  Mail,
  Calendar,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Mock user data
const userData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
  joinDate: "January 2023",
};

// Mock order data
const orders = [
  {
    id: "ORD-8947",
    date: "May 1, 2025",
    total: 459.99,
    status: "Delivered",
    items: 2
  },
  {
    id: "ORD-7651",
    date: "April 12, 2025",
    total: 229.50,
    status: "Processing",
    items: 1
  },
  {
    id: "ORD-6234",
    date: "March 23, 2025",
    total: 879.95,
    status: "Shipped",
    items: 3
  }
];

// Mock wishlist data
const wishlist = [
  {
    id: "PRD-3452",
    name: "Moissanite Halo Ring",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "PRD-2871",
    name: "Diamond Tennis Bracelet",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "PRD-7623",
    name: "Emerald Drop Earrings",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  }
];

// Mock notifications
const notifications = [
  {
    id: 1,
    title: "Order Shipped",
    message: "Your order ORD-8947 has been shipped and will arrive in 2-3 business days.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 2,
    title: "Price Drop Alert",
    message: "An item in your wishlist is now 15% off! Check it out before the sale ends.",
    time: "1 day ago",
    read: true
  },
  {
    id: 3,
    title: "New Collection Launch",
    message: "Our Spring 2025 collection is now available. Be the first to explore our latest designs.",
    time: "3 days ago",
    read: true
  }
];

export default function Account() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const location = useLocation();

  // Handle tab navigation
  React.useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path && path !== "account") {
      setActiveTab(path);
    } else {
      setActiveTab("dashboard");
    }
  }, [location]);

  return (
    <div className="fancy-container py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-6">
          {/* User Profile Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                  <img 
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
                <p className="text-xs text-muted-foreground mt-1">Member since {userData.joinDate}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card>
            <CardContent className="p-0">
              <nav>
                <ul className="space-y-1 py-2">
                  <li>
                    <Link 
                      to="/account"
                      className={`flex items-center px-4 py-2 text-sm ${activeTab === "dashboard" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"} rounded-md mx-1`}
                    >
                      <User className="w-4 h-4 mr-3" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/account/orders"
                      className={`flex items-center px-4 py-2 text-sm ${activeTab === "orders" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"} rounded-md mx-1`}
                    >
                      <Package className="w-4 h-4 mr-3" />
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/account/wishlist"
                      className={`flex items-center px-4 py-2 text-sm ${activeTab === "wishlist" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"} rounded-md mx-1`}
                    >
                      <Heart className="w-4 h-4 mr-3" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/account/payment"
                      className={`flex items-center px-4 py-2 text-sm ${activeTab === "payment" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"} rounded-md mx-1`}
                    >
                      <CreditCard className="w-4 h-4 mr-3" />
                      Payment Methods
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/account/notifications"
                      className={`flex items-center justify-between px-4 py-2 text-sm ${activeTab === "notifications" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"} rounded-md mx-1`}
                    >
                      <div className="flex items-center">
                        <Bell className="w-4 h-4 mr-3" />
                        Notifications
                      </div>
                      <Badge variant="secondary" className="h-5 px-1.5 bg-primary/20 text-primary">1</Badge>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/account/settings"
                      className={`flex items-center px-4 py-2 text-sm ${activeTab === "settings" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"} rounded-md mx-1`}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Account Settings
                    </Link>
                  </li>
                  <Separator className="my-2" />
                  <li>
                    <button 
                      className="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-md mx-1"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="mt-0 space-y-6">
              <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
              
              {/* Welcome Card */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Welcome back, {userData.name}!</CardTitle>
                  <CardDescription>Here's a summary of your account activity</CardDescription>
                </CardHeader>
              </Card>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <ShoppingBag className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{orders.length}</h3>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{wishlist.length}</h3>
                    <p className="text-sm text-muted-foreground">Wishlist Items</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{notifications.filter(n => !n.read).length}</h3>
                    <p className="text-sm text-muted-foreground">Unread Notifications</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold">15</h3>
                    <p className="text-sm text-muted-foreground">Days as Member</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Orders */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your most recent purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 2).map(order => (
                      <div key={order.id} className="flex justify-between items-center border-b pb-4">
                        <div>
                          <h4 className="font-medium">{order.id}</h4>
                          <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                          <Badge variant={
                            order.status === "Delivered" ? "outline" : 
                            order.status === "Processing" ? "secondary" : 
                            "default"
                          } className="mt-1">
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link to="/account/orders">View All Orders</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest notifications and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.slice(0, 3).map(notification => (
                      <div key={notification.id} className="flex gap-4 border-b pb-4">
                        <div className="min-w-fit">
                          <div className={`w-10 h-10 rounded-full ${notification.read ? 'bg-muted' : 'bg-primary/20'} flex items-center justify-center`}>
                            {notification.title.includes("Order") ? (
                              <Package className="w-5 h-5" />
                            ) : notification.title.includes("Price") ? (
                              <CreditCard className="w-5 h-5" />
                            ) : (
                              <Bell className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium flex items-center">
                            {notification.title}
                            {!notification.read && <span className="ml-2 w-2 h-2 rounded-full bg-primary inline-block"></span>}
                          </h4>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link to="/account/notifications">View All Notifications</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="mt-0 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">My Orders</h1>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Download History
                </Button>
              </div>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View and track all your purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-4">
                        <div className="mb-2 md:mb-0">
                          <h4 className="font-medium">{order.id}</h4>
                          <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                          <p className="font-medium order-3 md:order-1">${order.total.toFixed(2)}</p>
                          <Badge variant={
                            order.status === "Delivered" ? "outline" : 
                            order.status === "Processing" ? "secondary" : 
                            "default"
                          } className="md:order-2 w-fit">
                            {order.status}
                          </Badge>
                          <Button variant="ghost" size="sm" className="md:order-3">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Wishlist Tab */}
            <TabsContent value="wishlist" className="mt-0 space-y-6">
              <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map(item => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <Button variant="secondary" size="icon" className="absolute top-2 right-2 rounded-full">
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium line-clamp-1">{item.name}</h3>
                      <p className="text-sm font-bold mt-1">${item.price.toFixed(2)}</p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" className="flex-1">Add to Cart</Button>
                        <Button variant="outline" size="sm" className="flex-1">Remove</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Additional Tabs (Payment, Notifications, Settings) can be added following the same pattern */}
            <TabsContent value="payment" className="mt-0 space-y-6">
              <h1 className="text-3xl font-bold mb-6">Payment Methods</h1>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Saved Payment Methods</CardTitle>
                  <CardDescription>Manage your cards and payment options</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">No payment methods added yet.</p>
                  <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-0 space-y-6">
              <h1 className="text-3xl font-bold mb-6">Notifications</h1>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>All Notifications</CardTitle>
                  <CardDescription>Stay updated with your orders and account activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map(notification => (
                      <div key={notification.id} className="flex gap-4 border-b pb-4">
                        <div className="min-w-fit">
                          <div className={`w-10 h-10 rounded-full ${notification.read ? 'bg-muted' : 'bg-primary/20'} flex items-center justify-center`}>
                            {notification.title.includes("Order") ? (
                              <Package className="w-5 h-5" />
                            ) : notification.title.includes("Price") ? (
                              <CreditCard className="w-5 h-5" />
                            ) : (
                              <Bell className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h4 className="font-medium flex items-center">
                              {notification.title}
                              {!notification.read && <span className="ml-2 w-2 h-2 rounded-full bg-primary inline-block"></span>}
                            </h4>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-0 space-y-6">
              <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <input type="text" defaultValue="Sarah" className="fancy-input w-full" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <input type="text" defaultValue="Johnson" className="fancy-input w-full" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input type="email" defaultValue="sarah.johnson@example.com" className="fancy-input w-full" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <input type="tel" defaultValue="+1 (555) 123-4567" className="fancy-input w-full" />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Current Password</label>
                      <input type="password" className="fancy-input w-full" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">New Password</label>
                      <input type="password" className="fancy-input w-full" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Confirm New Password</label>
                      <input type="password" className="fancy-input w-full" />
                    </div>

                    <div className="pt-4">
                      <Button type="submit">Update Password</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
