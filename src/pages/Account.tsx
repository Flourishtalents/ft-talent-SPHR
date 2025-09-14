import React from 'react';
import { User, Heart, Music, Film, Star } from 'lucide-react';

export default function Account() {
  const favoriteCreators = [
    { id: 1, name: 'Emma Wilson', avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { id: 2, name: 'Sofia Rodriguez', avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150' },
  ];

  const playlists = [
    { id: 1, name: 'Chill Vibes', content: [{ type: 'music', title: 'Sunset Groove' }, { type: 'music', title: 'Acoustic Soul' }] },
    { id: 2, name: 'Inspiration', content: [{ type: 'video', title: 'The Last Stand - Short Film' }, { type: 'blog', title: '10 Tips for a Killer Personal Brand' }] },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-brand-text mb-2">My Account</h1>
        <p className="text-brand-secondary mb-8">Manage your preferences and curated content.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Favorite Creators */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold text-brand-text mb-6">Favorite Creators</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {favoriteCreators.map(creator => (
                  <div key={creator.id} className="text-center">
                    <img src={creator.avatar} alt={creator.name} className="w-24 h-24 rounded-full mx-auto mb-2" />
                    <p className="text-brand-text font-medium">{creator.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Playlists */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold text-brand-text mb-6">My Playlists</h2>
              <div className="space-y-4">
                {playlists.map(playlist => (
                  <div key={playlist.id} className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-brand-text mb-2">{playlist.name}</h3>
                    <div className="space-y-2">
                      {playlist.content.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 text-brand-secondary">
                          {item.type === 'music' && <Music className="w-4 h-4 text-brand-accent" />}
                          {item.type === 'video' && <Film className="w-4 h-4 text-brand-accent" />}
                          {item.type === 'podcast' && <User className="w-4 h-4 text-brand-accent" />}
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Account Summary */}
            <div className="bg-brand-mid border border-brand-light p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold text-brand-text mb-6">Account Summary</h2>
              {/* Add summary details here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
