import React from 'react';
import { Code, Plane, Book, Dumbbell, Camera, Music, Palette, Coffee } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Building Projects",
      description: "Love creating web applications and experimenting with new technologies",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coding with Fun",
      description: "Enjoy coding challenges, hackathons, and collaborative development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Traveling",
      description: "Exploring new places, cultures, and gaining diverse perspectives",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Reading Books",
      description: "Passionate about reading fiction, tech blogs, and self-improvement books",
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalInterests = [
    { icon: <Dumbbell className="w-6 h-6" />, name: "Fitness" },
    { icon: <Camera className="w-6 h-6" />, name: "Photography" },
    { icon: <Music className="w-6 h-6" />, name: "Music" },
    { icon: <Palette className="w-6 h-6" />, name: "Design" }
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Interests & Hobbies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond coding, here are the things that inspire and motivate me in my personal journey
          </p>
        </div>

        {/* Main Interests */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Icon Header */}
              <div className={`h-24 bg-gradient-to-r ${interest.color} flex items-center justify-center`}>
                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Interests */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Other Things I Love
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalInterests.map((interest, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <span className="text-gray-700 font-medium text-center">
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <blockquote className="text-xl md:text-2xl font-medium mb-4">
              "The best way to predict the future is to create it."
            </blockquote>
            <p className="text-purple-100">
              This quote drives my passion for learning, building, and exploring new possibilities every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;