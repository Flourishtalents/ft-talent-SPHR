import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, User, Building, Users, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'creator' as 'creator' | 'member',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    await signUp(formData);
    navigate('/dashboard');
  };

  const accountTypes = [
    {
      type: 'creator',
      icon: <Crown className="w-8 h-8" />,
      title: 'Creator',
      description: 'Showcase your skills and get hired'
    },
    {
      type: 'member',
      icon: <User className="w-8 h-8" />,
      title: 'Member',
      description: 'Find and support talented professionals'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-brand-mid border border-brand-light rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Crown className="w-16 h-16 text-brand-accent mx-auto mb-4" />
            <h1 className="text-3xl font-playfair font-bold text-brand-text mb-2">Join FlourishTalents</h1>
            <p className="text-brand-secondary">Create your account and start your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Type Selection */}
            <div>
              <label className="block text-sm font-medium text-brand-text mb-4">Choose Account Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {accountTypes.map((type) => (
                  <button
                    key={type.type}
                    type="button"
                    onClick={() => setFormData({ ...formData, accountType: type.type as any })}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.accountType === type.type
                        ? 'border-brand-accent bg-brand-accent/10'
                        : 'border-brand-light hover:border-brand-light'
                    }`}
                  >
                    <div className={`${formData.accountType === type.type ? 'text-brand-accent' : 'text-brand-secondary'} mb-2`}>
                      {type.icon}
                    </div>
                    <h3 className="font-semibold text-brand-text text-sm">{type.title}</h3>
                    <p className="text-xs text-brand-secondary mt-1">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full px-4 py-3 pr-12 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-secondary hover:text-brand-text transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    className="w-full px-4 py-3 pr-12 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-secondary hover:text-brand-text transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="w-4 h-4 text-brand-accent bg-transparent border-brand-secondary rounded focus:ring-brand-accent"
              />
              <label htmlFor="agreeTerms" className="ml-2 text-sm text-brand-secondary">
                I agree to the <a href="#" className="text-brand-accent hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-brand-accent hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-accent text-brand-text font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-brand-secondary">
              Already have an account?{' '}
              <Link to="/signin" className="text-brand-accent hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
