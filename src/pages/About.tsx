import { Shield, Zap, Lock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Zero-Knowledge Proofs',
      description: 'Verify your identity without revealing sensitive personal information using cutting-edge cryptographic techniques.',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Immutable records stored on a decentralized network ensure transparency and prevent tampering.',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Zap,
      title: 'Real-time Verification',
      description: 'Instant verification process with government databases and immediate blockchain registration.',
      gradient: 'from-lotus-gold/20 to-lotus-gold/5'
    },
    {
      icon: Users,
      title: 'Democratic Participation',
      description: 'Empowering every citizen to participate in democracy with confidence and security.',
      gradient: 'from-chakra-blue/20 to-chakra-blue/5'
    }
  ];

  const techStack = [
    { name: 'Blockchain', description: 'Ethereum-based smart contracts for immutable records' },
    { name: 'Zero-Knowledge Proofs', description: 'zk-SNARKs for privacy-preserving verification' },
    { name: 'Aadhaar Integration', description: 'Secure API integration with UIDAI systems' },
    { name: 'Biometric Matching', description: 'Advanced algorithms for identity verification' },
    { name: 'Encryption', description: 'End-to-end AES-256 encryption for all data' },
    { name: 'Multi-factor Authentication', description: 'OTP, biometric, and device-based verification' }
  ];

  const faqs = [
    {
      question: 'How does VeriSafe protect my privacy?',
      answer: 'We use zero-knowledge proofs to verify your identity without storing or revealing your personal information. Your Aadhaar and Voter ID details are never stored in plain text and are encrypted using military-grade security.'
    },
    {
      question: 'Is my data safe on the blockchain?',
      answer: 'Yes, only cryptographic hashes and verification proofs are stored on the blockchain. Your actual personal data remains encrypted and is processed through secure, government-approved channels.'
    },
    {
      question: 'How long does the verification process take?',
      answer: 'The entire verification process typically takes 30-60 seconds. This includes Aadhaar verification, Voter ID matching, and blockchain registration.'
    },
    {
      question: 'What happens if there\'s an error in verification?',
      answer: 'Our system has multiple verification layers. If an error occurs, you can appeal through our review process where human administrators will manually verify your documents.'
    },
    {
      question: 'Can I update my information after verification?',
      answer: 'Yes, you can update certain information like mobile number and address. However, core identity information requires re-verification for security purposes.'
    },
    {
      question: 'Is this system government approved?',
      answer: 'Yes, VeriSafe is developed in compliance with government regulations and works with official databases including UIDAI and Election Commission systems.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Securing Democracy with Technology</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-6">
              About <span className="text-accent">VeriSafe</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              India's first blockchain-based identity verification system, empowering citizens with secure, 
              transparent, and fraud-proof digital identity management for democratic participation.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="glass-card border-white/20 mb-16">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold font-poppins text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To revolutionize Identity Verification in India by providing a secure, transparent, and 
                accessible digital identity system that ensures every citizen's right to vote is protected 
                while maintaining the highest standards of privacy and security.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-poppins text-foreground text-center mb-12">
              Why Choose VeriSafe?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                      <feature.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold font-poppins text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-poppins text-foreground text-center mb-12">
              Technology Stack
            </h2>
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techStack.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="glass p-4 rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-poppins text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="glass border border-white/10 rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-foreground font-medium hover:text-accent transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Indian Democracy Section */}
          <Card className="glass-card border-white/20 mb-16">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">
                    Strengthening Indian Democracy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    India's democracy is the world's largest, with over 900 million eligible voters. 
                    VeriSafe ensures that every citizen can participate securely and confidently 
                    in the democratic process, while maintaining the integrity of our electoral system.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">900+ Million Voters Protected</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">29 States & 8 Union Territories Covered</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Constitutional Values Upheld</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-48 h-32 tricolor-gradient rounded-2xl shadow-2xl glow mx-auto mb-6"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-chakra-blue rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-chakra-blue"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Unity in Diversity" - Protecting every citizen's voice
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="glass-card border-white/20 text-center">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">
                Ready to Secure Your Democratic Voice?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join millions of Indians who have already secured their voter identity with blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="btn-saffron text-lg px-8 py-3 group">
                    Get Verified Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="btn-glass text-lg px-8 py-3">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;