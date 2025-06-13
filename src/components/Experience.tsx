import React from 'react';
import { Briefcase, Calendar, MapPin, Users, Target, Heart } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    {
      icon: <Target className="w-5 h-5" />,
      text: "Designed and led group workout plans for up to 100 participants"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Provided health tips and wellness guidance to community members"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Managed workout schedules and coordinated group activities"
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Encouraged fitness engagement and motivated participants"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional experience in leadership and community engagement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mr-6">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    Workout Coordinator
                  </h3>
                  <h4 className="text-lg font-semibold text-purple-600">
                    Navgurukul Foundation For Social and Welfare
                  </h4>
                </div>
              </div>
              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">10/2024 – Present</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Navgurukul Campus</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Leading fitness initiatives and wellness programs at Navgurukul Foundation, focusing on community 
                health and engagement. This role has enhanced my leadership skills, organizational abilities, and 
                passion for helping others achieve their goals.
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h5 className="text-xl font-semibold text-gray-800 mb-6">
                Key Responsibilities & Achievements
              </h5>
              <div className="grid md:grid-cols-2 gap-6">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      {responsibility.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {responsibility.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Gained */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h5 className="text-lg font-semibold text-gray-800 mb-4">
                Skills Developed
              </h5>
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Event Planning', 'Community Engagement', 'Health & Wellness', 'Team Management', 'Communication'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;