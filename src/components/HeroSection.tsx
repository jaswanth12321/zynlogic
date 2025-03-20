import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="py-20 md:py-28 bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-4xl">
            Transforming Ideas into <span className="text-purple-600">Powerful Software</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl font-bold">Our team of experts craft tailored software solutions that perfectly fit your business needs.</p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 rounded-md text-base transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-5 rounded-md text-base transition-all duration-300">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-1 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((_, i) => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                </div>)}
            </div>
            <span className="ml-4 text-sm font-medium">Trusted by <span className="text-purple-600">500+</span> companies</span>
          </div>
        </div>
        <div className="relative">
          <img alt="Software development workspace" className="rounded-lg shadow-xl mx-auto" src="/lovable-uploads/d4fae9d3-e3e5-405c-a427-edf636947cad.png" />
        </div>
      </div>
    </section>;
};
export default HeroSection;