import React from 'react';
import { Code2, Database, Wrench, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'フロントエンド',
      icon: <Code2 className="text-blue-400" />,
      skills: ['HTML', 'JavaScript'],
    },
    {
      title: 'バックエンド',
      icon: <Database className="text-green-400" />,
      skills: ['Python (FastAPI)'],
    },
    {
      title: 'ツール',
      icon: <Wrench className="text-yellow-400" />,
      skills: ['Git', 'Docker', 'Kubernetes'],
    },
    {
      title: 'その他',
      icon: <Cloud className="text-purple-400" />,
      skills: ['AWS', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="pt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;