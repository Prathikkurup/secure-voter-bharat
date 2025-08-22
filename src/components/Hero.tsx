import { ArrowRight, CheckCircle, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-chakra-blue/5 rounded-full blur-3xl float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Powered by Blockchain Technology</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-foreground leading-tight">
              Secure Your
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent"> Social Identity</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Verify your Govt Cards with India's first blockchain-based identity system. 
              Experience transparent, fraud-proof elections powered by cutting-edge technology.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            {[
              'Aadhaar-integrated verification',
              'Zero-knowledge privacy protection',
              'Real-time fraud detection',
              'Immutable audit trails'
            ].map((feature, index) => (
              <div key={feature} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button className="btn-saffron text-lg px-8 py-3 group">
                Check Your Registration
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" className="btn-glass text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Government Certified</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full pulse-saffron"></div>
              <span className="text-sm text-muted-foreground">Live & Secure</span>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="glass-card p-8 space-y-6">
            {/* Mock Verification Card */}
            <div className="text-center">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Quick Demo
              </h3>
              <div className="space-y-4">
                <div className="glass p-4 rounded-xl border-l-4 border-accent">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full pulse-saffron"></div>
                    <span className="text-sm text-foreground">Aadhaar Verified</span>
                  </div>
                </div>
                <div className="glass p-4 rounded-xl border-l-4 border-primary">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full pulse-saffron"></div>
                    <span className="text-sm text-foreground">Voter ID Linked</span>
                  </div>
                </div>
                <div className="glass p-4 rounded-xl border-l-4 border-lotus-gold">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground font-medium">Registration Confirmed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Indian Flag Element */}
           <div className="flex justify-center pt-8">
                <div className="relative">
                  <div
                    className="w-32 h-24 rounded-lg shadow-lg glow"
                    style={{
                      background: "linear-gradient(to bottom, #FF9933 33%, #FFFFFF 33% 66%, #128807 66% 100%)",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-chakra-blue rounded-full bg-white/80 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-chakra-blue"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;