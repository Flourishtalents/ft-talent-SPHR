import React, { useState } from 'react';
import { Camera, Edit3, Eye, EyeOff, Plus, Star, Award, MapPin, Phone, Mail, Globe, Instagram, Twitter, Linkedin, Save, Upload, X, Mic } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Portfolio() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>(null);

  const [portfolioData, setPortfolioData] = useState({
    profileImage: '',
    coverImage: '',
    bio: 'Passionate creative professional with expertise in digital marketing and brand development.',
    location: 'Kampala, Uganda',
    phone: '+256 772 123456',
    email: user?.email || '',
    website: 'www.example.com',
    socialMedia: {
      instagram: '@username',
      twitter: '@username',
      linkedin: 'linkedin.com/in/username'
    },
    skills: ['Digital Marketing', 'Brand Development', 'Content Creation', 'Social Media Strategy'],
    experience: [
      {
        title: 'Senior Marketing Specialist',
        company: 'Creative Agency Inc.',
        period: '2022 - Present',
        description: 'Led digital marketing campaigns for Fortune 500 clients, achieving 150% ROI improvement.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Marketing',
        institution: 'University of Arts',
        year: '2020',
        honors: 'Magna Cum Laude'
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Brand Campaign 2025',
        type: 'image',
        thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Complete brand identity redesign for tech startup'
      },
      {
        id: 2,
        title: 'Product Launch Video',
        type: 'video',
        thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Creative direction for product launch campaign'
      }
    ],
    certifications: [
      { name: 'Digital Marketing Certification', issuer: 'FlourishTalents Academy', year: '2025' },
      { name: 'Brand Ambassador Certification', issuer: 'FlourishTalents Academy', year: '2025' }
    ],
    testimonials: [
      {
        client: 'Sarah Johnson',
        company: 'Tech Innovations',
        rating: 5,
        comment: 'Exceptional work quality and professional approach. Highly recommended!'
      }
    ],
    awards: [
      { name: 'Creative of the Year', issuer: 'FlourishTalents Awards', year: '2025' },
      { name: 'Best Marketing Campaign', issuer: 'Digital Media Awards', year: '2024' },
    ],
    interviews: [
      { title: 'The Future of Branding', platform: 'Creative Minds Podcast', date: '2025-10-15' },
      { title: 'A Journey in Digital Marketing', platform: 'The Marketing Show', date: '2025-09-01' },
    ]
  });

  const handleSendToMedia = (content: any) => {
    setSelectedContent(content);
    setShowMediaModal(true);
  };

  const confirmSendToMedia = () => {
    // Simulate sending to media for admin review
    alert('Content sent for admin review. You will be notified once it\'s approved!');
    setShowMediaModal(false);
    setSelectedContent(null);
  };

  const addSkill = () => {
    const skill = prompt('Enter new skill:');
    if (skill) {
      setPortfolioData({
        ...portfolioData,
        skills: [...portfolioData.skills, skill]
      });
    }
  };

  const removeSkill = (index: number) => {
    setPortfolioData({
      ...portfolioData,
      skills: portfolioData.skills.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Controls */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">My Highlights</h1>
            <p className="text-brand-secondary">Showcase your talent to the world</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-brand-secondary">Public</span>
              <button
                onClick={() => setIsPublic(!isPublic)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isPublic ? 'bg-brand-accent' : 'bg-brand-light'
                }`}
                disabled={user?.tier === 'free'}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isPublic ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              {user?.tier === 'free' && (
                <span className="text-brand-accent text-sm">Premium required</span>
              )}
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isEditing
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-brand-accent hover:shadow-xl text-brand-text'
              }`}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2 inline" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 mr-2 inline" />
                  Edit Portfolio
                </>
              )}
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative mb-8">
          <div className="h-64 bg-brand-accent rounded-2xl overflow-hidden">
            {portfolioData.coverImage ? (
              <img src={portfolioData.coverImage} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-brand-text">
                  <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="opacity-75">Add cover image</p>
                </div>
              </div>
            )}
          </div>
          
          {isEditing && (
            <button className="absolute top-4 right-4 p-2 bg-brand-dark/50 rounded-lg text-brand-text hover:bg-brand-dark/70 transition-colors">
              <Upload className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Profile Image & Basic Info */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full bg-brand-accent p-1">
                    <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden">
                      {portfolioData.profileImage ? (
                        <img src={portfolioData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <Camera className="w-8 h-8 text-brand-secondary" />
                      )}
                    </div>
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 p-2 bg-brand-accent rounded-full text-brand-text hover:bg-brand-accent/80 transition-colors">
                      <Upload className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold text-brand-text mt-4">{user?.name}</h2>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />
                  ))}
                  <span className="text-brand-secondary ml-2">4.9 (127 reviews)</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-brand-secondary">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={portfolioData.location}
                      onChange={(e) => setPortfolioData({...portfolioData, location: e.target.value})}
                      className="bg-transparent border-b border-brand-light focus:border-brand-accent outline-none flex-1"
                    />
                  ) : (
                    <span>{portfolioData.location}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3 text-brand-secondary">
                  <Phone className="w-4 h-4 text-brand-accent" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={portfolioData.phone}
                      onChange={(e) => setPortfolioData({...portfolioData, phone: e.target.value})}
                      className="bg-transparent border-b border-brand-light focus:border-brand-accent outline-none flex-1"
                    />
                  ) : (
                    <span>{portfolioData.phone}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3 text-brand-secondary">
                  <Mail className="w-4 h-4 text-brand-accent" />
                  <span>{portfolioData.email}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-brand-secondary">
                  <Globe className="w-4 h-4 text-brand-accent" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={portfolioData.website}
                      onChange={(e) => setPortfolioData({...portfolioData, website: e.target.value})}
                      className="bg-transparent border-b border-brand-light focus:border-brand-accent outline-none flex-1"
                    />
                  ) : (
                    <span>{portfolioData.website}</span>
                  )}
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-brand-light">
                <h3 className="text-brand-text font-semibold mb-3">Social Media</h3>
                <div className="flex space-x-3">
                  <Instagram className="w-5 h-5 text-brand-accent hover:text-brand-accent/80 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-brand-accent hover:text-brand-accent/80 cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-brand-accent hover:text-brand-accent/80 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Awards & Recognitions */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-text mb-4">Awards & Recognitions</h3>
              <div className="space-y-3">
                {portfolioData.awards.map((award, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-brand-accent mt-1" />
                    <div>
                      <div className="text-brand-text font-medium">{award.name}</div>
                      <div className="text-brand-secondary text-sm">{award.issuer} • {award.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interviews & Features */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-text mb-4">Interviews & Features</h3>
              <div className="space-y-3">
                {portfolioData.interviews.map((interview, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Mic className="w-5 h-5 text-brand-accent mt-1" />
                    <div>
                      <div className="text-brand-text font-medium">{interview.title}</div>
                      <div className="text-brand-secondary text-sm">{interview.platform} • {new Date(interview.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-brand-text">Skills</h3>
                {isEditing && (
                  <button
                    onClick={addSkill}
                    className="p-1 text-brand-accent hover:text-brand-accent/80"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <span className="px-3 py-1 bg-brand-accent/20 text-brand-accent/80 rounded-full text-sm border border-brand-accent/30">
                      {skill}
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => removeSkill(index)}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-2 h-2 text-white" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-text mb-4">Certifications</h3>
              <div className="space-y-3">
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-brand-accent mt-1" />
                    <div>
                      <div className="text-brand-text font-medium">{cert.name}</div>
                      <div className="text-brand-secondary text-sm">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Portfolio Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-text mb-4">About Me</h3>
              {isEditing ? (
                <textarea
                  value={portfolioData.bio}
                  onChange={(e) => setPortfolioData({...portfolioData, bio: e.target.value})}
                  className="w-full h-24 bg-transparent border border-brand-light rounded-lg p-3 text-brand-text resize-none focus:border-brand-accent outline-none"
                  placeholder="Tell your story..."
                />
              ) : (
                <p className="text-brand-secondary leading-relaxed">{portfolioData.bio}</p>
              )}
            </div>

            {/* Highlights */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-brand-text">Highlights</h3>
                {isEditing && (
                  <button className="px-4 py-2 bg-brand-accent text-brand-text rounded-lg hover:shadow-lg transition-all">
                    <Plus className="w-4 h-4 mr-2 inline" />
                    Add Work
                  </button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioData.portfolio.map((item) => (
                  <div key={item.id} className="group relative">
                    <div className="aspect-video bg-brand-dark rounded-xl overflow-hidden">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => handleSendToMedia(item)}
                          className="px-4 py-2 bg-brand-accent text-brand-text rounded-lg hover:bg-brand-accent/80 transition-colors"
                        >
                          Send to Media
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-brand-text font-medium">{item.title}</h4>
                      <p className="text-brand-secondary text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-text mb-4">Experience</h3>
              <div className="space-y-4">
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-brand-accent pl-4">
                    <h4 className="text-brand-text font-semibold">{exp.title}</h4>
                    <div className="text-brand-accent text-sm">{exp.company} • {exp.period}</div>
                    <p className="text-brand-secondary text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-text mb-4">Client Testimonials</h3>
              <div className="space-y-4">
                {portfolioData.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-brand-light/10 p-4 rounded-lg">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-brand-secondary italic mb-2">"{testimonial.comment}"</p>
                    <div className="text-sm">
                      <span className="text-brand-text font-medium">{testimonial.client}</span>
                      <span className="text-brand-secondary"> - {testimonial.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Send to Media Modal */}
        {showMediaModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl max-w-md w-full">
              <h3 className="text-xl font-semibold text-brand-text mb-4">Send to Media</h3>
              <p className="text-brand-secondary mb-4">
                Send "{selectedContent?.title}" to the Media section for admin review?
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={confirmSendToMedia}
                  className="flex-1 py-2 bg-brand-accent text-brand-text rounded-lg hover:shadow-lg transition-all"
                >
                  Send for Review
                </button>
                <button
                  onClick={() => setShowMediaModal(false)}
                  className="flex-1 py-2 bg-brand-light text-brand-text rounded-lg hover:bg-brand-light/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
