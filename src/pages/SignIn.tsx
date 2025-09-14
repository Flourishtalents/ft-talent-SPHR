import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(formData.email, formData.password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 flex items-center">
      <div className="max-w-md mx-auto w-full">
        <div className="bg-brand-mid border border-brand-light rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <Crown className="w-16 h-16 text-brand-accent mx-auto mb-4" />
            <h1 className="text-3xl font-playfair font-bold text-brand-text mb-2">Welcome Back</h1>
            <p className="text-brand-secondary">Sign in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full px-4 py-3 pr-12 bg-brand-dark border border-brand-light rounded-lg text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 text-brand-accent bg-transparent border-brand-secondary rounded focus:ring-brand-accent"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-brand-secondary">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-brand-accent hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-accent text-brand-text font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-brand-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="text-brand-accent hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}