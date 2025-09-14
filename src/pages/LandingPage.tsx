import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Star, Users, Award, ArrowRight, Play, Shield, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float mb-8">
            <Crown className="w-20 h-20 text-rose-400 mx-auto mb-6" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-6">
            Your Talent <span className="gradient-text">Deserves</span>
            <br />
            The World's Stage
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the premier platform where talented creatives showcase their skills, build outstanding portfolios,
            learn from masterclasses, and get hired by top clients worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/signup"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-glow"
            >
              Start Your Journey <ArrowRight className="inline w-5 h-5 ml-2" />
            </Link>
            <button className="px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>100% Secure Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Global Audience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From portfolio creation to getting hired, we provide all the tools and opportunities you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Outstanding Portfolios",
                description: "Create outstanding portfolios with our advanced tools and templates. Showcase your work with confidence.",
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Media Streaming",
                description: "Share videos, photos, and audio content. Build your fanbase and monetize your content effectively."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Masterclasses",
                description: "Learn from industry experts. Get certified in digital marketing, acting, modeling, and more."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Get Hired",
                description: "Connect with clients looking for talent. From gigs to full-time opportunities, find your perfect match."
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Membership Tiers",
                description: "Unlock premium features with our tier system. Earn loyalty points and upgrade your experience."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Events & Competitions",
                description: "Participate in exclusive events, competitions, and networking opportunities."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover-lift">
                <div className="text-rose-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Releases Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Featured <span className="gradient-text">Releases</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Check out the latest and greatest from our talented creators.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
                type: 'Music',
                title: 'Midnight Drive',
                creator: 'DJ Alex',
                thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                type: 'Video',
                title: 'City of Dreams',
                creator: 'FilmMaker Jane',
                thumbnail: 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                type: 'Art',
                title: 'Abstract Dimensions',
                creator: 'Artisan Sam',
                thumbnail: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                type: 'Podcast',
                title: 'The Creative Journey',
                creator: 'Host Maria',
                thumbnail: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
            ].map((release, index) => (
            <div key={index} className="glass-effect rounded-2xl overflow-hidden hover-lift group">
                <div className="relative aspect-video bg-gray-800">
                <img src={release.thumbnail} alt={release.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-rose-500/80 text-white text-xs font-bold rounded-full">
                    {release.type}
                </div>
                </div>
                <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{release.title}</h3>
                <p className="text-gray-400 text-sm">by {release.creator}</p>
                </div>
            </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <Link
            to="/media"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
            >
            View More
            </Link>
        </div>
        </div>
    </div>

      {/* Membership Tiers */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Membership</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Start free and upgrade as you grow. Each tier unlocks powerful new features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Free",
                price: "UGX 0",
                features: ["Basic Portfolio", "Public Gallery Access", "Community Support", "Basic Profile"],
                color: "from-gray-500 to-gray-600",
                popular: false
              },
              {
                name: "Premium",
                price: "UGX 110,000",
                features: ["Advanced Portfolio", "Media Streaming", "Career Guidance", "Priority Support", "Public Portfolio"],
                color: "from-yellow-400 to-orange-500",
                popular: true
              },
              {
                name: "Professional",
                price: "UGX 300,000",
                features: ["Everything in Premium", "Masterclass Access", "Team Collaboration", "Analytics Dashboard", "Custom Branding"],
                color: "from-purple-500 to-pink-500",
                popular: false
              },
              {
                name: "Elite",
                price: "UGX 750,000",
                features: ["Everything in Professional", "1-on-1 Mentorship", "Featured Listings", "API Access", "White-label Solutions"],
                color: "from-pink-500 to-rose-500",
                popular: false
              }
            ].map((tier, index) => (
              <div key={index} className={`glass-effect p-8 rounded-2xl hover-lift relative ${tier.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                  <Crown className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-300">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/signup"
                  className={`block w-full py-3 text-center font-semibold rounded-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Showcase Your <span className="gradient-text">Talent?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of talented creatives who are building their careers and achieving their dreams.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Start Your Journey Today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
