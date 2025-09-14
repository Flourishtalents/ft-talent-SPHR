import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Ticket, Star, Filter, Search, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Events() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'workshop', 'networking', 'competition', 'masterclass', 'showcase'];

  const events = [
    {
      id: 1,
      title: 'Digital Marketing Summit 2025',
      category: 'workshop',
      date: '2025-11-15',
      time: '10:00 AM - 6:00 PM EAT',
      location: 'Virtual Event',
      organizer: 'FlourishTalents Academy',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Join industry leaders for a full day of digital marketing insights, strategies, and networking.',
      price: 380000,
      capacity: 500,
      registered: 342,
      rating: 4.8,
      features: ['Live Sessions', 'Networking', 'Certificates', 'Recordings'],
      speakers: ['Sarah Johnson', 'Mike Chen', 'Emma Wilson'],
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Talent Showcase Competition',
      category: 'competition',
      date: '2025-11-20',
      time: '7:00 PM - 10:00 PM EAT',
      location: 'Kampala, Uganda',
      organizer: 'Creative Collective',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Showcase your talent and compete for amazing prizes. Open to all creative professionals.',
      price: 95000,
      capacity: 200,
      registered: 156,
      rating: 4.9,
      features: ['Live Judging', 'Prizes', 'Networking', 'Media Coverage'],
      speakers: ['Celebrity Judges Panel'],
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Business Networking',
      category: 'networking',
      date: '2025-11-25',
      time: '6:00 PM - 9:00 PM EAT',
      location: 'Kampala, Uganda',
      organizer: 'Business Professionals Alliance',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Connect with successful entrepreneurs and business leaders in an intimate setting.',
      price: 285000,
      capacity: 100,
      registered: 89,
      rating: 4.7,
      features: ['Networking', 'Panel Discussion', 'Cocktails', 'Business Cards'],
      speakers: ['Dr. Maria Rodriguez', 'Isabella Martinez'],
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Brand Ambassador Masterclass',
      category: 'masterclass',
      date: '2025-10-28',
      time: '2:00 PM - 5:00 PM EAT',
      location: 'Virtual Event',
      organizer: 'FlourishTalents Academy',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn the secrets of successful brand ambassadorship from industry experts.',
      price: 560000,
      capacity: 300,
      registered: 300,
      rating: 4.9,
      features: ['Interactive Sessions', 'Case Studies', 'Q&A', 'Certificate'],
      speakers: ['Sofia Rodriguez', 'Maya Chen'],
      status: 'past'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesTab = activeTab === 'all' || event.status === activeTab;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesCategory && matchesSearch;
  });

  const handleRegister = (eventId: number) => {
    if (!user) {
      alert('Please sign up or sign in to register for events.');
      navigate('/signin');
      return;
    }
    const event = events.find(e => e.id === eventId);
    if (event?.registered >= event?.capacity) {
      alert('Sorry, this event is fully booked!');
      return;
    }
    alert('Registration successful! You will receive a confirmation email shortly.');
  };

  const handleSubmitEvent = () => {
    if (!user) {
      alert('Please sign up or sign in to submit events.');
      navigate('/signin');
      return;
    }
    alert('Event submission feature coming soon! Contact our team for now.');
  };

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Events' },
    { id: 'past', label: 'Past Events' },
    { id: 'all', label: 'All Events' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">Events</h1>
            <p className="text-brand-secondary">Discover and join amazing events in your industry</p>
          </div>
          
          <button
            onClick={handleSubmitEvent}
            className="px-6 py-3 bg-brand-accent text-brand-text font-semibold rounded-xl hover:shadow-xl transition-all"
          >
            <Plus className="w-4 h-4 mr-2 inline" />
            Submit Event
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-brand-mid border border-brand-light p-2 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-brand-accent text-brand-text shadow-lg'
                  : 'text-brand-secondary hover:text-brand-text hover:bg-brand-light/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-secondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-light rounded-xl text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter className="text-brand-secondary w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-brand-dark border border-brand-light rounded-xl text-brand-text focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-brand-dark">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-brand-mid border border-brand-light rounded-2xl overflow-hidden hover-lift">
              {/* Event Image */}
              <div className="relative h-48 bg-brand-dark">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-accent text-brand-text text-sm font-medium rounded-full">
                    {event.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-brand-dark/50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-brand-accent fill-current" />
                    <span className="text-brand-text text-sm">{event.rating}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-text mb-2">{event.title}</h3>
                    <p className="text-brand-secondary text-sm">by {event.organizer}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-text">UGX {event.price.toLocaleString()}</div>
                    <div className="text-brand-secondary text-sm">per ticket</div>
                  </div>
                </div>

                <p className="text-brand-secondary text-sm mb-4 line-clamp-2">{event.description}</p>

                {/* Event Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3 text-brand-secondary text-sm">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-secondary text-sm">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-secondary text-sm">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-secondary text-sm">
                    <Users className="w-4 h-4 text-brand-accent" />
                    <span>{event.registered}/{event.capacity} registered</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {event.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-brand-accent/20 text-brand-accent/80 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-4">
                  <h4 className="text-brand-text text-sm font-medium mb-2">Speakers</h4>
                  <div className="text-brand-secondary text-sm">
                    {event.speakers.join(', ')}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-brand-secondary">Registration</span>
                    <span className="text-brand-secondary">{Math.round((event.registered / event.capacity) * 100)}%</span>
                  </div>
                  <div className="w-full bg-brand-light rounded-full h-2">
                    <div 
                      className="bg-brand-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  {event.status === 'upcoming' ? (
                    <>
                      <button
                        onClick={() => handleRegister(event.id)}
                        disabled={event.registered >= event.capacity}
                        className={`flex-1 py-3 font-semibold rounded-xl transition-all ${
                          event.registered >= event.capacity
                            ? 'bg-brand-light text-brand-secondary cursor-not-allowed'
                            : 'bg-brand-accent text-brand-text hover:shadow-xl'
                        }`}
                      >
                        {event.registered >= event.capacity ? (
                          <>
                            <Ticket className="w-4 h-4 mr-2 inline" />
                            Sold Out
                          </>
                        ) : (
                          <>
                            <Ticket className="w-4 h-4 mr-2 inline" />
                            Register Now
                          </>
                        )}
                      </button>
                      <button className="px-4 py-3 bg-brand-light/10 text-brand-secondary hover:text-brand-text rounded-xl transition-colors">
                        <Calendar className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 py-3 bg-brand-light text-brand-secondary font-semibold rounded-xl cursor-not-allowed">
                      Event Ended
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-brand-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-text mb-2">No events found</h3>
            <p className="text-brand-secondary">Try adjusting your search criteria or check back later for new events.</p>
          </div>
        )}
      </div>
    </div>
  );
}
