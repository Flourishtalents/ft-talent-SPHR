import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, TrendingUp, Users, Star, Calendar, Briefcase, Play, Award, Plus, ArrowRight } from 'lucide-react';
import { useAuth, TIER_POINTS } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  const getNextTier = () => {
    if (!user) return null;
    if (user.tier === 'free') return 'premium';
    if (user.tier === 'premium') return 'professional';
    if (user.tier === 'professional') return 'elite';
    return null;
  };

  const nextTier = getNextTier();
  const pointsNeeded = nextTier ? TIER_POINTS[nextTier as keyof typeof TIER_POINTS] - (user?.loyaltyPoints || 0) : 0;

  const quickStats = [
    { label: 'Portfolio Views', value: '2,847', icon: <TrendingUp className="w-5 h-5" />, change: '+12%' },
    { label: 'Followers', value: '1,256', icon: <Users className="w-5 h-5" />, change: '+8%' },
    { label: 'Rating', value: '4.9', icon: <Star className="w-5 h-5" />, change: '+0.2' },
    { label: 'Loyalty Points', value: user?.loyaltyPoints || 0, icon: <Crown className="w-5 h-5" />, change: '+50' }
  ];

  const recentActivity = [
    { action: 'Portfolio updated', time: '2 hours ago', type: 'update' },
    { action: 'New follower: Sarah Johnson', time: '4 hours ago', type: 'follower' },
    { action: 'Media content approved', time: '1 day ago', type: 'approval' },
    { action: 'Masterclass completed', time: '2 days ago', type: 'achievement' }
  ];

  const challenges = [
    { title: 'Complete 5 Masterclasses', progress: 60, reward: '500 points' },
    { title: 'Get 100 new followers', progress: 75, reward: '300 points' },
    { title: 'Upload 10 media files', progress: 30, reward: '200 points' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">
            Welcome back, <span className="text-brand-accent">{user?.name}</span>
          </h1>
          <p className="text-brand-secondary">Here's what's happening with your talent profile today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-brand-mid border border-brand-light p-6 rounded-xl hover-lift">
              <div className="flex items-center justify-between mb-2">
                <div className="text-brand-accent">
                  {stat.icon}
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-brand-text mb-1">{stat.value}</div>
              <div className="text-brand-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-brand-text mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Update Portfolio', icon: <Star className="w-5 h-5" />, to: '/portfolio' },
                  { label: 'Add Content', icon: <Play className="w-5 h-5" />, to: '/content' },
                  { label: 'Join Masterclass', icon: <Award className="w-5 h-5" />, to: '/masterclass' },
                  { label: 'Browse Projects', icon: <Briefcase className="w-5 h-5" />, to: '/projects' }
                ].map((action, index) => (
                  <Link
                    key={index}
                    to={action.to}
                    className="p-4 bg-brand-dark border border-brand-light rounded-lg hover:bg-brand-light/20 transition-all text-center group"
                  >
                    <div className="text-brand-accent mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {action.icon}
                    </div>
                    <div className="text-brand-text text-sm font-medium">{action.label}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-brand-text mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 hover:bg-brand-light/10 rounded-lg transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                    <div className="flex-1">
                      <div className="text-brand-text text-sm">{activity.action}</div>
                      <div className="text-brand-secondary text-xs">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-brand-text">Upcoming Events</h2>
                <Link to="/events" className="text-brand-accent hover:text-brand-accent/80 transition-colors">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Digital Marketing Workshop', date: 'Nov 15, 2025', attendees: 245 },
                  { name: 'Talent Showcase Event', date: 'Nov 20, 2025', attendees: 189 },
                  { name: 'Brand Ambassador Summit', date: 'Nov 25, 2025', attendees: 156 }
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-brand-light/10 rounded-lg transition-colors">
                    <Calendar className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-brand-text font-medium">{event.name}</div>
                      <div className="text-brand-secondary text-sm">{event.date} • {event.attendees} attending</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Status */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-xl">
              <div className="text-center mb-4">
                <Crown className="w-12 h-12 text-brand-accent mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-brand-text capitalize">{user?.tier} Member</h3>
                <p className="text-brand-secondary text-sm">Since {user?.joinedDate.toLocaleDateString()}</p>
              </div>
              
              {user?.tier === 'free' && (
                <div className="mt-4">
                  <div className="text-center text-sm text-brand-secondary mb-2">
                    You are {pointsNeeded > 0 ? pointsNeeded : 0} points away from {nextTier}!
                  </div>
                  <button className="w-full py-2 bg-brand-accent text-brand-text font-medium rounded-lg hover:shadow-lg transition-all">
                    Upgrade to Premium
                  </button>
                </div>
              )}
            </div>

            {/* Challenges */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-brand-text mb-4">Active Challenges</h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-brand-text">{challenge.title}</span>
                      <span className="text-brand-secondary">{challenge.progress}%</span>
                    </div>
                    <div className="w-full bg-brand-light rounded-full h-2">
                      <div 
                        className="bg-brand-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-brand-secondary">Reward: {challenge.reward}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Referral */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-brand-text mb-4">Invite Friends</h3>
              <p className="text-brand-secondary text-sm mb-4">
                Earn 100 loyalty points for each friend who joins!
              </p>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value="REF-TT2025-USER1"
                  readOnly
                  className="flex-1 px-3 py-2 bg-brand-light/10 border border-brand-light rounded-lg text-brand-text text-sm"
                />
                <button className="px-4 py-2 bg-brand-accent text-brand-text rounded-lg hover:bg-brand-accent/80 transition-colors text-sm">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
