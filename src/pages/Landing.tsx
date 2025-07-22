
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Users, MessageSquare, Trophy, Search } from 'lucide-react';

export default function Landing() {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) {
        console.error('Sign-in error:', error.message);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const features = [
    {
      icon: Search,
      title: 'Find Study Rooms',
      description: 'Browse and join curated study groups tailored to your subjects and learning pace.'
    },
    {
      icon: Users,
      title: 'Peer Study Buddies',
      description: 'Connect with classmates at your level and build lasting study partnerships.'
    },
    {
      icon: Trophy,
      title: 'XP & Streaks',
      description: 'Earn rewards for consistent learning and track your academic progress.'
    },
    {
      icon: MessageSquare,
      title: 'Chat & Collaboration',
      description: 'Discuss topics in real-time with peers and share resources seamlessly.'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-8 py-4 bg-card border-b border-border">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">Kupintar</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <button 
            onClick={handleSignIn}
            disabled={isSigningIn}
            className="text-primary hover:text-primary/80 font-medium transition-colors disabled:opacity-50"
          >
            {isSigningIn ? 'Signing in...' : 'Sign In'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Learn Together,
            <br />
            <span className="text-primary">Make It Fun.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Kupintar helps you find study groups, discuss materials, and hit your learning goals together with peers who share your passion for knowledge.
          </p>
          <button
            onClick={handleSignIn}
            disabled={isSigningIn}
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSigningIn ? 'Getting Started...' : 'Get Started'}
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything you need to succeed
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make collaborative learning engaging and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up', description: 'Create your account with Google in seconds' },
              { step: '02', title: 'Join a Room', description: 'Find study groups that match your interests' },
              { step: '03', title: 'Collaborate & Learn', description: 'Study together and achieve your goals' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">© Kupintar 2025</p>
            <div className="flex justify-center space-x-6">
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#github" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
