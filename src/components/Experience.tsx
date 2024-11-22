import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="pt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Building2 className="text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold">アプリケーションエンジニア</h3>
              <p className="text-gray-400 mb-2">フューチャーアーキテクト株式会社</p>
              <p className="text-gray-300">
                Webアプリケーション開発に従事。ログインのバックエンド処理と、
                アプリケーションで表示させるマニュアル内容を整理する業務を担当。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;