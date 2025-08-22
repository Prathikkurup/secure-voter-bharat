import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Menu, 
  X, 
  Home, 
  UserCheck, 
  BarChart3, 
  FileText, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/register', label: 'Register', icon: UserCheck },
    { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/audit', label: 'Audit Trail', icon: FileText },
    { href: '/admin', label: 'Admin Panel', icon: Settings },
    { href: '/about', label: 'About', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Indian Flag */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2">
              {/* Indian Flag Symbol */}
              <Shield className="h-8 w-8 text-accent group-hover:text-primary transition-colors duration-300" />
            </div>
            <div className="font-poppins">
              <span className="text-xl font-bold text-foreground">d-identity</span>
              <div className="text-xs text-muted-foreground">Blockchain Govt Id Verification</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActive(item.href)
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-foreground hover:bg-white/10 hover:text-accent'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            
            <Button className="btn-saffron ml-4">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass p-2 rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                    isActive(item.href)
                      ? 'bg-accent/20 text-accent border border-accent/30'
                      : 'text-foreground hover:bg-white/10 hover:text-accent'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <Button className="btn-saffron mt-4 mx-4">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;