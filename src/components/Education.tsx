import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Certificate in Web Development",
      institution: "Navgurukul",
      period: "04/2024 – Present",
      location: "Online",
      description: "Comprehensive web development program focusing on modern JavaScript, HTML, CSS, and project-based learning.",
      status: "In Progress",
      color: "from-purple-500 to-blue-500"
    },
    {
      degree: "Bachelor of Commerce",
      institution: "Veer Sawarkar College",
      period: "07/2024 – Present",
      location: "Pune, Maharashtra",
      description: "Pursuing undergraduate degree in Commerce with focus on business fundamentals and analytical skills.",
      status: "In Progress",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Higher Secondary School",
      institution: "M.B. Convent H.S. School",
      period: "06/2023 – 07/2024",
      location: "Maharashtra",
      description: "Completed higher secondary education with strong academic performance and active participation in extracurricular activities.",
      status: "Completed",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My educational journey combining formal academics with practical skill development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-600 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center text-white`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {edu.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;