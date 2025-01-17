import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { CartDrawer } from '@/components/CartDrawer';
import { User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-primary">
              GUNPLA<span className="text-accent">HAVEN</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/catalog"
              className={({ isActive }) => 
                `nav-link text-foreground/80 hover:text-foreground transition-colors ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Catalog
            </NavLink>
            <NavLink 
              to="/guide"
              className={({ isActive }) => 
                `nav-link text-foreground/80 hover:text-foreground transition-colors ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Guide
            </NavLink>
            <NavLink 
              to="/faq"
              className={({ isActive }) => 
                `nav-link text-foreground/80 hover:text-foreground transition-colors ${
                  isActive ? 'active' : ''
                }`
              }
            >
              FAQ
            </NavLink>
            {user ? (
              <>
                <CartDrawer />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowProfileDialog(true)}
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                variant="default" 
                className="bg-accent hover:bg-accent/90"
                asChild
              >
                <Link to="/auth/sign-in">Join Now</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {user && <CartDrawer />}
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <span className="sr-only">Open menu</span>
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`block w-5 h-0.5 bg-current transform transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current transform transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent/10'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Catalog
            </NavLink>
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent/10'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Guide
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent/10'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
            <div className="flex items-center space-x-2 px-3 py-2">
              {user ? (
                <>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => {
                      setShowProfileDialog(true);
                      setIsOpen(false);
                    }}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/auth/sign-in">Join Now</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Features Coming Soon</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-muted-foreground">
              This section is currently under construction. Future features will include:
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Order history</li>
              <li>Saved preferences</li>
              <li>Delivery addresses</li>
              <li>Account settings</li>
            </ul>
            <div className="text-muted-foreground">
              Please check back soon for these upcoming features. For now, you can use the Sign Out button to log out of your account.
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
            <Button
              variant="default"
              onClick={() => setShowProfileDialog(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}