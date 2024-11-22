import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="pt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              BUMP OF CHICKEN ファン向けWebアプリケーション
            </h3>
            <p className="text-gray-300 mb-4">
              BUMP OF CHICKENがライブで行った歌詞変え情報をファンが自由に投稿、閲覧する
              Webアプリケーション。ファンコミュニティの活性化を目指して開発。
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href="http://tetraplot.s324.xrea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;