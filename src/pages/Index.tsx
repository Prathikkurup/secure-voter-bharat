 import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
  {/* <FeatureGrid /> removed to hide Quick Demo section */}
    </div>
  );
};

export default Index; 