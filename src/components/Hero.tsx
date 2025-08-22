import { ArrowRight, CheckCircle, Shield, Sparkles, IdCard, Lock, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-gray-300">
            <Sparkles className="h-4 w-4 text-[#FF9933]" />
            <span className="text-sm font-medium text-gray-800">
              India’s First Blockchain Identity System
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight">
              Trust Your{" "}
              <span className="bg-gradient-to-r from-[#FF9933] via-[#138808] to-[#000080] bg-clip-text text-transparent">
                Digital Identity
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              A secure and transparent way to verify Aadhaar, PAN, and Voter ID using
              blockchain. Built for <b>fraud-proof governance</b> and <b>citizen trust</b>.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Seamless Aadhaar Integration',
              'Zero-Knowledge Privacy',
              'Real-Time Fraud Detection',
              'Immutable Blockchain Records'
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center space-x-3 bg-white/70 border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-lg hover:bg-white transition-all"
              >
                <CheckCircle className="h-5 w-5 text-[#FF9933] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/register">
              <Button className="bg-[#FF9933] hover:bg-[#e67e22] text-white text-lg px-8 py-3 group shadow-md hover:shadow-lg hover:shadow-orange-400/30 transition-all">
                Verify Your Identity
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link to="/about">
              <Button
                variant="outline"
                className="border border-[#000080] text-[#000080] bg-white/70 hover:bg-[#000080] hover:text-white text-lg px-8 py-3 shadow hover:shadow-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-6 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-3 w-fit shadow-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-[#138808]" />
              <span className="text-sm text-gray-600">Government Certified</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FF9933] rounded-full animate-ping"></div>
              <span className="text-sm text-gray-600">Live & Secure</span>
            </div>
          </div>
        </div>

        {/* Right Side - Digital Identity Card */}
        <div className="relative hidden lg:flex justify-center items-center animate-slide-up">
          <div className="relative w-[320px] h-[420px] bg-white/90 rounded-2xl shadow-2xl border border-gray-200 p-6 flex flex-col items-center text-center backdrop-blur-md hover:scale-105 transition-transform duration-500">
            <IdCard className="h-16 w-16 text-[#000080] mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold text-gray-900">Digital Identity Card</h3>
            <p className="text-sm text-gray-600 mt-2">
              Aadhaar, PAN, and Voter ID securely verified on blockchain — accessible anywhere.
            </p>

            <div className="mt-6 flex flex-col space-y-3 w-full">
              <div className="flex items-center space-x-2 bg-[#FF9933]/10 rounded-lg p-3">
                <Lock className="h-5 w-5 text-[#FF9933]" />
                <span className="text-sm text-gray-700">End-to-End Encryption</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#138808]/10 rounded-lg p-3">
                <Database className="h-5 w-5 text-[#138808]" />
                <span className="text-sm text-gray-700">Blockchain Storage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
