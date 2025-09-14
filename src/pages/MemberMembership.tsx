import React from 'react';
import { Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MemberMembership() {
  const tiers = [
    {
      name: "Free",
      price: "UGX 0",
      features: ["Follow Creators", "Like & Comment", "Access Public Content"],
      color: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      name: "Supporter",
      price: "UGX 55,000",
      features: ["Everything in Free", "Unlock Exclusive Content", "Direct Message Creators", "Support with Tips"],
      color: "from-blue-500 to-teal-500",
      popular: true
    },
    {
      name: "Super Fan",
      price: "UGX 150,000",
      features: ["Everything in Supporter", "Early Access to Content", "Personalized Thank You Notes", "Monthly Q&A with Creators"],
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: ["Branding Services", "Sponsorship Packages", "Marketing Solutions", "Advertising", "Insights"],
      color: "from-pink-500 to-rose-500",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">Member Membership</h1>
        <p className="text-brand-secondary mb-8">Support your favorite creators and get exclusive perks.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div key={index} className={`bg-brand-mid border border-brand-light p-8 rounded-2xl hover-lift relative ${tier.popular ? 'ring-2 ring-brand-accent' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-accent text-brand-text px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg bg-brand-accent flex items-center justify-center mb-4`}>
                <Crown className="w-6 h-6 text-brand-text" />
              </div>

              <h3 className="text-2xl font-bold text-brand-text mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-text">{tier.price}</span>
                {tier.name !== 'Enterprise' && <span className="text-brand-secondary">/month</span>}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-brand-secondary">
                    <Star className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`block w-full py-3 text-center font-semibold rounded-lg transition-all duration-300 ${
                  tier.popular
                    ? 'bg-brand-accent text-brand-text hover:shadow-xl'
                    : 'bg-brand-light/10 text-brand-text hover:bg-brand-light/20'
                }`}
              >
                {tier.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
