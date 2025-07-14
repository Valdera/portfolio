"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/navigation/Navigation";
import CursorLight from "@/components/cursor-light/CursorLight";

const stats = [
  { label: "Years Experience", value: "5+", icon: "💼" },
  { label: "Projects Completed", value: "50+", icon: "🚀" },
  { label: "Technologies", value: "25+", icon: "⚡" },
  { label: "Happy Clients", value: "30+", icon: "😊" },
];

const skills = [
  "Python", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL", 
  "MongoDB", "Apache Kafka", "Terraform", "Redis", "GraphQL", "FastAPI"
];

const services = [
  {
    title: "Backend Development",
    description: "Building scalable APIs, microservices, and server-side applications with modern frameworks",
    icon: "⚙️",
  },
  {
    title: "Cloud Engineering", 
    description: "Designing and implementing cloud-native architectures on AWS, GCP, and Azure",
    icon: "☁️",
  },
  {
    title: "Data Engineering",
    description: "Creating robust data pipelines, ETL processes, and real-time streaming solutions",
    icon: "📊",
  },
];

const projects = [
  {
    title: "MESS Discord Bot",
    description: "A comprehensive Discord bot for server management with advanced moderation features, custom commands, and real-time analytics dashboard.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Python", "Discord.py", "PostgreSQL", "Redis"],
    github: "https://github.com/your-username/mess-discord-bot",
    demo: "https://discord.com/invite/your-bot",
    category: "Bot Development"
  },
  {
    title: "Ustora E-commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture, payment integration, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Node.js", "React", "MongoDB", "Stripe"],
    github: "https://github.com/your-username/ustora-ecommerce",
    demo: "https://ustora-demo.vercel.app",
    category: "E-commerce"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "High-performance analytics platform processing millions of events per second with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "Apache Kafka", "ClickHouse", "React"],
    github: "https://github.com/your-username/analytics-dashboard",
    demo: "https://analytics-demo.vercel.app",
    category: "Data Engineering"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Terraform modules and CI/CD pipelines for automated cloud infrastructure deployment across multiple providers.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["Terraform", "AWS", "Docker", "GitHub Actions"],
    github: "https://github.com/your-username/cloud-automation",
    demo: null,
    category: "DevOps"
  }
];

const certificationBadges = [
  {
    name: "AWS Solutions Architect",
    image: "/images/cert/aws-solutions-architect-associate-badge.png",
  },
  {
    name: "GitHub Foundations",
    image: "/images/cert/github-foundations-badge.webp",
  },
  {
    name: "Databricks Data Engineer",
    image: "/images/cert/databricks-data-engineer-associate-badge.png",
  },
  {
    name: "AWS Data Engineer",
    image: "/images/cert/aws-data-engineer-associate-badge.png",
  },
  {
    name: "MongoDB Developer",
    image: "/images/cert/mongodb-associate-developer-badge.png",
  },
  {
    name: "Kubernetes Administrator",
    image: "/images/cert/certified-kubernetes-administrator-badge.png",
  }
];

const Home = () => {
  const [visibleBadges, setVisibleBadges] = useState<number[]>([0, 1, 2, 3]);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [badgePositions, setBadgePositions] = useState([
    { top: "8%", left: "-12%" },     // Top left
    { top: "8%", right: "-12%" },    // Top right
    { bottom: "12%", left: "-12%" }, // Bottom left
    { bottom: "12%", right: "-12%" } // Bottom right
  ]);

  // Generate random position shifts
  const generateRandomShift = () => {
    return {
      top: `${8 + (Math.random() - 0.5) * 8}%`,
      left: `${-12 + (Math.random() - 0.5) * 6}%`
    };
  };

  // Cycle through badges every 8 seconds with smooth fade transitions
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out animation
      setIsAnimatingOut(true);
      
      // After fade out completes, update badges and positions
      setTimeout(() => {
        setVisibleBadges(prev => {
          const nextBadges = prev.map(index => (index + 4) % certificationBadges.length);
          return nextBadges;
        });

        // Update positions with random shifts
        setBadgePositions([
          { top: `${8 + (Math.random() - 0.5) * 8}%`, left: `${-12 + (Math.random() - 0.5) * 6}%` },     // Top left
          { top: `${8 + (Math.random() - 0.5) * 8}%`, right: `${-12 + (Math.random() - 0.5) * 6}%` },    // Top right
          { bottom: `${12 + (Math.random() - 0.5) * 8}%`, left: `${-12 + (Math.random() - 0.5) * 6}%` }, // Bottom left
          { bottom: `${12 + (Math.random() - 0.5) * 8}%`, right: `${-12 + (Math.random() - 0.5) * 6}%` } // Bottom right
        ]);

        // Start fade in animation
        setIsAnimatingOut(false);
      }, 500); // 500ms fade out duration
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gradient-bg min-h-screen">
      <CursorLight />
      <Navigation />
      
      {/* Hero Section */}
      <section className="container relative py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  Available for new projects
                </div>
                
                <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                  Hi, I'm{" "}
                  <span className="text-gradient">
                    Fauzan Valdera
                  </span>
                </h1>
                
                <p className="text-xl leading-relaxed text-foreground/70 max-w-lg">
                  A software engineer specializing in <strong className="text-primary">backend development</strong>, 
                  <strong className="text-primary"> cloud engineering</strong>, and 
                  <strong className="text-primary"> data engineering</strong>. I build scalable, 
                  efficient systems that power modern applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="glow-button rounded-full px-8 py-4 font-semibold text-black transition-all">
                  Get in touch
                </button>
                <button className="rounded-full border border-primary/30 px-8 py-4 font-semibold text-primary transition-all hover:bg-primary/10">
                  View my work
                </button>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground/60">Primary Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 6).map((skill) => (
                    <span 
                      key={skill}
                      className="rounded-full bg-background-light/50 border border-foreground/10 px-3 py-1 text-sm backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Profile with Certification Badges */}
            <div className="relative flex justify-center">
              {/* Profile Image Container */}
              <div className="relative">
                <div className="floating-element">
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Fauzan Valdera"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </div>

                {/* Floating Certification Badges */}
                {visibleBadges.map((badgeIndex, positionIndex) => (
                  <div
                    key={`${certificationBadges[badgeIndex].name}-${badgeIndex}`}
                    className={`absolute cert-badge hidden lg:block ${isAnimatingOut ? 'cert-badge-fade-out' : ''}`}
                    style={badgePositions[positionIndex]}
                  >
                    <img
                      src={certificationBadges[badgeIndex].image}
                      alt={certificationBadges[badgeIndex].name}
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                ))}

                {/* Background Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-primary/5 blur-lg animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-hover rounded-xl p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Me Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Drives Me</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Beyond just using tools, I believe in understanding how things work, 
              sharing knowledge, and tackling the challenges that others might avoid.
            </p>
          </div>
          
          {/* Trait Cards - Zigzag Layout */}
          <div className="space-y-20">
            {/* Card 1 - Left Aligned */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="card-hover rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Deep Technical Understanding</h3>
                  </div>
                  <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                    I don't just use frameworks and libraries — I dig into how they work under the hood. 
                    Building systems from scratch helps me make better architectural decisions and optimize performance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://github.com/your-username/tcp-from-scratch" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      TCP Implementation
                    </a>
                    <a 
                      href="https://github.com/your-username/database-from-scratch" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Database Engine
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="rotatable-image w-80 h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop"
                    alt="Code implementation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Right Aligned */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex justify-center">
                <div className="rotatable-image w-80 h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop"
                    alt="Knowledge sharing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="card-hover rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Knowledge Sharing</h3>
                  </div>
                  <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                    Learning is most valuable when shared. I create content to help other developers 
                    understand complex concepts and build better systems.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://youtube.com/@your-channel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      YouTube
                    </a>
                    <a 
                      href="https://udemy.com/user/your-profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.542 3.895l1.542.897 1.542-.897L12 2.552l-1.542 1.343zM12 5.448L9.877 4.124 12 2.8l2.123 1.324L12 5.448zm4.516 2.068v8.968L12 19.552l-4.516-3.068V7.516L12 4.448l4.516 3.068z"/>
                      </svg>
                      Udemy Courses
                    </a>
                    <a 
                      href="https://medium.com/@your-username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                      Technical Blogs
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Left Aligned */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="card-hover rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Complex Problem Solving</h3>
                  </div>
                  <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                    The most rewarding challenges are the ones that require deep thinking and innovative solutions. 
                    I thrive on architecting systems that others might consider "too complex."
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="/projects" 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      System Designs
                    </a>
                    <a 
                      href="https://github.com/your-username/architecture-patterns" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Architecture Repo
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="rotatable-image w-80 h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=400&fit=crop"
                    alt="Problem solving"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A showcase of my recent work in backend development, cloud engineering, 
              and data processing solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-background-light/50 border border-foreground/10 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
              <span>View All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              I specialize in building robust backend systems, scalable cloud infrastructure, 
              and efficient data processing solutions that drive business growth.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-hover rounded-xl p-8 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="card-hover rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Let's build something amazing
            </h2>
            <p className="text-foreground/60 mb-8 text-lg">
              Ready to scale your backend, optimize your cloud infrastructure, 
              or build robust data pipelines? Let's discuss your project.
            </p>
            <button className="glow-button rounded-full px-10 py-4 font-semibold text-black text-lg">
              Start a conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
