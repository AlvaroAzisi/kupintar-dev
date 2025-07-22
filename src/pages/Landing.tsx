
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Users, MessageSquare, Trophy, Search, Brain, Shield, Clock, Target, CheckCircle, Star, ArrowRight, BookOpen, Award, Zap } from 'lucide-react';

export default function Landing() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Our algorithm matches you with study partners based on your subjects, availability, learning style, and academic goals.'
    },
    {
      icon: Clock,
      title: 'Flexible Study Sessions',
      description: 'Join virtual study rooms, schedule in-person meetups, or create study groups for ongoing collaboration.'
    },
    {
      icon: Target,
      title: 'Progress Tracking',
      description: 'Track your study hours, set goals together, and celebrate achievements with your study partners.'
    },
    {
      icon: Shield,
      title: 'Safe & Verified Community',
      description: 'All users are verified students with profile verification and rating systems for trusted connections.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex',
      role: 'Engineering Student',
      content: 'I went from struggling with calculus to acing my midterm thanks to my study partner Sarah. Kupintar\'s matching is spot-on!',
      rating: 5
    },
    {
      name: 'Priya',
      role: 'Business Student',
      content: 'As an international student, finding study partners was impossible until Kupintar. Now I have a whole study group for my MBA courses.',
      rating: 5
    },
    {
      name: 'Marcus',
      role: 'Pre-Med Student',
      content: 'The accountability aspect is game-changing. My study partner keeps me motivated during finals week!',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Is Kupintar free to use?',
      answer: 'Yes! Basic matching and messaging are free. Premium features include unlimited matches and advanced filters.'
    },
    {
      question: 'How does the matching algorithm work?',
      answer: 'We consider your subjects, study schedule, learning style, academic level, location preferences, and goals.'
    },
    {
      question: 'Can I study with people from other universities?',
      answer: 'Absolutely! You can match with students from any verified institution.'
    },
    {
      question: 'Is it safe to meet study partners in person?',
      answer: 'We recommend meeting in public places like libraries or cafes. All users are verified, but always prioritize your safety.'
    },
    {
      question: 'What if my study partner isn\'t a good fit?',
      answer: 'You can easily end partnerships and get matched with new study buddies anytime.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      description: 'Add your subjects, availability, and learning preferences to get started.',
      icon: Users
    },
    {
      step: '02',
      title: 'Get Matched',
      description: 'Our AI finds compatible study partners in your area or online.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Start Studying',
      description: 'Connect via chat, video calls, or meet in person to begin learning together.',
      icon: BookOpen
    },
    {
      step: '04',
      title: 'Track Progress',
      description: 'Monitor your study goals and academic improvements together.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Kupintar</h1>
              <span className="text-sm text-muted-foreground hidden sm:block">Your Smart Study Companion</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <button 
                onClick={handleSignIn}
                disabled={isSigningIn}
                className="text-primary hover:text-primary/80 font-medium transition-colors disabled:opacity-50"
              >
                {isSigningIn ? 'Signing in...' : 'Sign In'}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Join 10,000+ students already studying together
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Perfect<br />
              <span className="text-primary">Study Buddy</span> in Minutes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered matching connects you with compatible study partners based on your subjects, schedule, and learning style. Study smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleSignIn}
                disabled={isSigningIn}
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSigningIn ? 'Getting Started...' : 'Find Study Buddies Now'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-colors text-lg font-medium">
                How It Works
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="inline-flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                95% of users find study partners within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Studying Alone is Hard. We Get It.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Procrastination', description: 'Hard to stay motivated without accountability' },
                { title: 'Lack of Discussion', description: 'Missing diverse perspectives on complex topics' },
                { title: 'Isolation', description: 'Learning alone can feel overwhelming' },
                { title: 'Limited Methods', description: 'Stuck with only your own study techniques' }
              ].map((pain, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{pain.title}</h3>
                  <p className="text-muted-foreground text-sm">{pain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Smart Matching, Better Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed to connect you with the perfect study partners and enhance your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
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
      <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-bold text-primary/30 mb-2">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Loved by Students Everywhere
            </h2>
            <p className="text-xl text-muted-foreground">
              See what students are saying about their Kupintar experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Privacy */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Study with confidence knowing that every user is verified and your privacy is protected
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Student Verification', description: 'All users must verify their student email before joining' },
              { title: 'In-App Messaging', description: 'Chat safely within the app before sharing personal contacts' },
              { title: 'Report & Block', description: 'Easy reporting system and instant blocking for your protection' },
              { title: 'Community Guidelines', description: 'Strict enforcement of respectful behavior and academic focus' },
              { title: 'Data Encryption', description: 'Your personal information is encrypted and never shared' },
              { title: 'Video Verification', description: 'Optional video verification for additional trust and safety' }
            ].map((safety, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">{safety.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{safety.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Kupintar
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <div className={`transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-5 h-5 text-muted-foreground transform rotate-90" />
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your<br />
            Study Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who've already improved their grades through collaborative learning
          </p>
          <button
            onClick={handleSignIn}
            disabled={isSigningIn}
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSigningIn ? 'Getting Started...' : 'Start Finding Study Buddies'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Free to get started
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Kupintar</h3>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Your smart study companion connecting students worldwide for collaborative learning and academic success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-foreground transition-colors">Reviews</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">© 2025 Kupintar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
