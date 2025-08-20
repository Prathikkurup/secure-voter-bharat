import { Shield, Link2, Zap, Eye } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: Shield,
      title: 'Privacy-first',
      description: 'Zero-knowledge proofs protect your identity while ensuring verification integrity.',
      gradient: 'from-indian-green/20 to-indian-green/5'
    },
    {
      icon: Eye,
      title: 'Fraud Prevention',
      description: 'Advanced algorithms and blockchain technology detect and prevent voter fraud.',
      gradient: 'from-saffron/20 to-saffron/5'
    },
    {
      icon: Link2,
      title: 'Blockchain-backed',
      description: 'Immutable records on the blockchain ensure transparency and trust.',
      gradient: 'from-chakra-blue/20 to-chakra-blue/5'
    },
    {
      icon: Zap,
      title: 'Simple & Fast',
      description: 'Verify your voter registration in seconds with our intuitive interface.',
      gradient: 'from-lotus-gold/20 to-lotus-gold/5'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Why Choose d-identity?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of democratic participation with our cutting-edge blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card group hover:scale-105 transition-all duration-500 ${
                index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold font-poppins text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative accent */}
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;