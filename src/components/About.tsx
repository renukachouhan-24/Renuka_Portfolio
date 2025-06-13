import React from 'react';
import { Code, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Passion",
      description: "Strong interest in web development and creating meaningful digital experiences"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learner",
      description: "Always eager to learn new technologies and improve existing skills"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Excellent communication skills and collaborative mindset"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Motivated to build projects and grow in a professional environment"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a motivated recent high school graduate with a strong academic background and a passion for learning. 
              I possess good communication skills, a positive attitude, and a keen interest in technical fields.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Eager to gain experience, build projects, and grow in a collaborative environment. My journey in web 
              development has been driven by curiosity and the desire to create solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, reading books, or planning my next 
              adventure. I believe in continuous learning and am always excited to take on new challenges.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;