import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, DollarSign, Star, Users, Eye, Briefcase, Building } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Projects() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'talents' | 'teams' | 'projects'>(user?.role === 'creator' ? 'projects' : 'talents');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  const categories = [
    'all', 'acting', 'modeling', 'digital-marketing', 'event-management', 
    'brand-ambassador', 'content-creation', 'photography', 'design', 'writing'
  ];

  const budgetRanges = [
    'all', 'under-500', '500-1000', '1000-5000', '5000-plus'
  ];

  const projects = [
    {
      id: 1,
      title: 'Brand Ambassador for Tech Startup',
      company: 'Innovate Inc.',
      location: 'Remote',
      budget: 'UGX 1,500,000',
      description: 'Looking for an energetic brand ambassador to represent our new app. Must have strong social media presence.',
      skills: ['Social Media Marketing', 'Brand Representation', 'Content Creation'],
      type: 'gig'
    },
    {
      id: 2,
      title: 'Lead Actor for Short Film',
      company: 'Starlight Pictures',
      location: 'Kampala, Uganda',
      budget: 'UGX 2,000,000',
      description: 'Seeking a male lead actor for a drama short film. Acting experience required.',
      skills: ['Acting', 'Drama', 'Improvisation'],
      type: 'casting'
    }
  ];

  const talents = [
    {
      id: 1,
      name: 'Emma Wilson',
      title: 'Digital Marketing Specialist',
      category: 'digital-marketing',
      location: 'Kampala, Uganda',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 320000,
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      skills: ['Social Media Marketing', 'SEO', 'Content Strategy', 'Analytics'],
      completedProjects: 45,
      responseTime: '2 hours',
      description: 'Experienced digital marketer with 5+ years helping brands grow their online presence.',
      certifications: ['Google Ads Certified', 'Facebook Blueprint', 'FlourishTalents Digital Marketing'],
      portfolio: {
        projects: 12,
        totalViews: 15420
      }
    },
    {
      id: 2,
      name: 'Sofia Rodriguez',
      title: 'Professional Model & Actress',
      category: 'modeling',
      location: 'Entebbe, Uganda',
      rating: 4.8,
      reviews: 89,
      hourlyRate: 570000,
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      skills: ['Fashion Modeling', 'Commercial Acting', 'Brand Representation', 'Social Media'],
      completedProjects: 32,
      responseTime: '1 hour',
      description: 'Professional model and actress with experience in fashion, commercial, and brand campaigns.',
      certifications: ['SAG-AFTRA Member', 'Professional Model Certification'],
      portfolio: {
        projects: 28,
        totalViews: 32100
      }
    },
    {
      id: 3,
      name: 'Maya Chen',
      title: 'Event Management Expert',
      category: 'event-management',
      location: 'Jinja, Uganda',
      rating: 5.0,
      reviews: 156,
      hourlyRate: 360000,
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      skills: ['Corporate Events', 'Wedding Planning', 'Vendor Management', 'Budget Planning'],
      completedProjects: 78,
      responseTime: '30 minutes',
      description: 'Award-winning event planner specializing in corporate and luxury events.',
      certifications: ['Certified Meeting Professional', 'Event Planning Certification'],
      portfolio: {
        projects: 45,
        totalViews: 28900
      }
    }
  ];

  const teams = [
    {
      id: 1,
      name: 'Creative Collective Agency',
      type: 'Full-Service Creative Agency',
      category: 'design',
      location: 'Kampala, Uganda',
      rating: 4.9,
      reviews: 234,
      teamSize: 12,
      startingRate: 450000,
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      services: ['Brand Design', 'Web Development', 'Marketing Strategy', 'Content Creation'],
      completedProjects: 189,
      responseTime: '4 hours',
      description: 'Award-winning creative agency specializing in brand identity and digital experiences.',
      specialties: ['Tech Startups', 'E-commerce', 'Healthcare', 'Finance']
    },
    {
      id: 2,
      name: 'Elite Marketing Solutions',
      type: 'Digital Marketing Agency',
      category: 'digital-marketing',
      location: 'Mbarara, Uganda',
      rating: 4.8,
      reviews: 178,
      teamSize: 8,
      startingRate: 360000,
      logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=150',
      services: ['PPC Management', 'SEO', 'Social Media', 'Email Marketing'],
      completedProjects: 156,
      responseTime: '2 hours',
      description: 'Results-driven marketing agency with proven track record of ROI growth.',
      specialties: ['SaaS', 'E-commerce', 'Local Business', 'B2B']
    }
  ];

  const filteredTalents = talents.filter(talent => {
    const matchesCategory = selectedCategory === 'all' || talent.category === selectedCategory;
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesBudget = selectedBudget === 'all' || 
      (selectedBudget === 'under-500' && talent.hourlyRate < 190000) ||
      (selectedBudget === '500-1000' && talent.hourlyRate >= 190000 && talent.hourlyRate < 380000) ||
      (selectedBudget === '1000-5000' && talent.hourlyRate >= 380000 && talent.hourlyRate < 760000) ||
      (selectedBudget === '5000-plus' && talent.hourlyRate >= 760000);
    
    return matchesCategory && matchesSearch && matchesBudget;
  });

  const filteredTeams = teams.filter(team => {
    const matchesCategory = selectedCategory === 'all' || team.category === selectedCategory;
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.type === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApply = (projectId: number) => {
    alert(`Applied to project ${projectId}`);
  };

  const handleHire = (id: number, type: 'talent' | 'team') => {
    if (!user) {
      alert('Please sign up or sign in to proceed.');
      navigate('/signin');
      return;
    }
    if (user.role === 'creator') {
        handleApply(id);
        return;
    }
    if (user.tier === 'free') {
      alert('Upgrade to Premium to hire talents and teams!');
      return;
    }
    alert(`Hiring request sent! The ${type} will be notified and will respond soon.`);
  };

  const handleViewPortfolio = (id: number) => {
    alert('Opening portfolio in new window...');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">Projects</h1>
          <p className="text-brand-secondary">Find the perfect project or team for your skills</p>
        </div>

        {/* View Toggle and Submit Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-1 bg-brand-mid border border-brand-light p-2 rounded-xl w-fit">
            {user?.role === 'creator' ? (
              <button
                onClick={() => setViewMode('projects')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'projects'
                    ? 'bg-brand-accent text-brand-text shadow-lg'
                    : 'text-brand-secondary hover:text-brand-text hover:bg-brand-light/20'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Browse Projects</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => setViewMode('talents')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'talents'
                      ? 'bg-brand-accent text-brand-text shadow-lg'
                      : 'text-brand-secondary hover:text-brand-text hover:bg-brand-light/20'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>Individual Talents</span>
                </button>
                <button
                  onClick={() => setViewMode('teams')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'teams'
                      ? 'bg-brand-accent text-brand-text shadow-lg'
                      : 'text-brand-secondary hover:text-brand-text hover:bg-brand-light/20'
                  }`}
                >
                  <Building className="w-5 h-5" />
                  <span>Teams & Agencies</span>
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => {
              if (!user) {
                alert('Please sign up or sign in to submit a project.');
                navigate('/signin');
                return;
              }
              alert('Project submission feature coming soon!');
            }}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all">
            Submit a Project
          </button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-secondary w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${viewMode}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-light rounded-xl text-brand-text placeholder-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-brand-dark border border-brand-light rounded-xl text-brand-text focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-brand-dark">
                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </option>
            ))}
          </select>

          {viewMode === 'talents' && (
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="px-4 py-3 bg-brand-dark border border-brand-light rounded-xl text-brand-text focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
            >
              <option value="all" className="bg-brand-dark">All Budgets</option>
              <option value="under-500" className="bg-brand-dark">Under UGX 190,000/hr</option>
              <option value="500-1000" className="bg-brand-dark">UGX 190,000–380,000/hr</option>
              <option value="1000-5000" className="bg-brand-dark">UGX 380,000–760,000/hr</option>
              <option value="5000-plus" className="bg-brand-dark">UGX 760,000+/hr</option>
            </select>
          )}
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-3 gap-6">
          {viewMode === 'projects' ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="bg-brand-mid border border-brand-light rounded-2xl overflow-hidden hover-lift p-6">
                <h3 className="text-xl font-semibold text-brand-text">{project.title}</h3>
                <p className="text-brand-secondary text-sm">{project.company}</p>
                <div className="flex items-center space-x-2 mt-2">
                    <MapPin className="w-4 h-4 text-brand-accent" />
                    <span className="text-brand-secondary text-sm">{project.location}</span>
                </div>
                <p className="text-brand-secondary text-sm mt-4 line-clamp-2">{project.description}</p>
                <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-brand-accent/20 text-brand-accent/80 text-xs rounded">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="text-lg font-bold text-brand-text">{project.budget}</div>
                    <button
                        onClick={() => handleHire(project.id, 'talent')}
                        className="flex-1 py-2 bg-brand-accent text-brand-text rounded-lg hover:shadow-lg transition-all"
                    >
                        Apply Now
                    </button>
                </div>
              </div>
            ))
          ) : viewMode === 'talents' ? (
            filteredTalents.map((talent) => (
              <div key={talent.id} className="bg-brand-mid border border-brand-light rounded-2xl overflow-hidden hover-lift">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={talent.avatar} 
                      alt={talent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-text">{talent.name}</h3>
                      <p className="text-brand-secondary text-sm">{talent.title}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-brand-accent fill-current" />
                          <span className="text-brand-text text-sm">{talent.rating}</span>
                          <span className="text-brand-secondary text-sm">({talent.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="px-6 pb-4">
                  <p className="text-brand-secondary text-sm mb-4 line-clamp-2">{talent.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <MapPin className="w-4 h-4" />
                      <span>{talent.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <Clock className="w-4 h-4" />
                      <span>{talent.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <Briefcase className="w-4 h-4" />
                      <span>{talent.completedProjects} projects</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <DollarSign className="w-4 h-4" />
                      <span>UGX {talent.hourlyRate.toLocaleString()}/hr</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {talent.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-brand-accent/20 text-brand-accent/80 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                      {talent.skills.length > 3 && (
                        <span className="px-2 py-1 bg-brand-light text-brand-secondary text-xs rounded">
                          +{talent.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className="text-brand-text text-sm font-medium mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {talent.certifications.slice(0, 2).map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-brand-secondary text-xs">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewPortfolio(talent.id)}
                      className="flex-1 py-2 bg-brand-light/10 text-brand-secondary hover:text-brand-text rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{user?.role === 'creator' ? 'Send Portfolio' : 'Portfolio'}</span>
                    </button>
                    <button
                      onClick={() => handleHire(talent.id, 'talent')}
                      className="flex-1 py-2 bg-brand-accent text-brand-text rounded-lg hover:shadow-lg transition-all"
                    >
                      {user?.role === 'creator' ? 'Apply' : 'Hire Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredTeams.map((team) => (
              <div key={team.id} className="bg-brand-mid border border-brand-light rounded-2xl overflow-hidden hover-lift">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={team.logo} 
                      alt={team.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-text">{team.name}</h3>
                      <p className="text-brand-secondary text-sm">{team.type}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-brand-accent fill-current" />
                          <span className="text-brand-text text-sm">{team.rating}</span>
                          <span className="text-brand-secondary text-sm">({team.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="px-6 pb-4">
                  <p className="text-brand-secondary text-sm mb-4 line-clamp-2">{team.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <MapPin className="w-4 h-4" />
                      <span>{team.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <Clock className="w-4 h-4" />
                      <span>{team.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <Users className="w-4 h-4" />
                      <span>{team.teamSize} members</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-secondary">
                      <DollarSign className="w-4 h-4" />
                      <span>From UGX {team.startingRate.toLocaleString()}/hr</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-brand-text text-sm font-medium mb-2">Services</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.services.slice(0, 3).map((service, index) => (
                        <span key={index} className="px-2 py-1 bg-brand-accent/20 text-brand-accent/80 text-xs rounded">
                          {service}
                        </span>
                      ))}
                      {team.services.length > 3 && (
                        <span className="px-2 py-1 bg-brand-light text-brand-secondary text-xs rounded">
                          +{team.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-brand-text text-sm font-medium mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.specialties.map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-brand-accent/20 text-brand-accent/80 text-xs rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewPortfolio(team.id)}
                      className="flex-1 py-2 bg-brand-light/10 text-brand-secondary hover:text-brand-text rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Work</span>
                    </button>
                    <button
                      onClick={() => handleHire(team.id, 'team')}
                      className="flex-1 py-2 bg-brand-accent text-brand-text rounded-lg hover:shadow-lg transition-all"
                    >
                      {user?.role === 'creator' ? 'Apply' : 'Hire Team'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Empty State */}
        {((viewMode === 'talents' && filteredTalents.length === 0) || 
          (viewMode === 'teams' && filteredTeams.length === 0)) && (
          <div className="text-center py-12">
            <div className="text-brand-secondary mb-4">
              {viewMode === 'talents' ? <Users className="w-16 h-16 mx-auto mb-4" /> : <Building className="w-16 h-16 mx-auto mb-4" />}
            </div>
            <h3 className="text-xl font-semibold text-brand-text mb-2">No {viewMode} found</h3>
            <p className="text-brand-secondary">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
