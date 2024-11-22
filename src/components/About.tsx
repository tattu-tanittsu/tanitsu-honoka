import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            クラウドソーシングを用いた犯罪検知システムについて研究しています。
            現在はフューチャーアーキテクト株式会社にてアルバイトをしており、
            そこでAWSを使用しながら実務経験を積んでいます。
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">主要なスキル</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Python</li>
              <li>JavaScript</li>
              <li>Linux</li>
              <li>AWS (勉強中)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;