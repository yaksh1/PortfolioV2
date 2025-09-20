import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-20 bg-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-wide" style={{ fontFamily: 'DM Serif Text, serif' }}>
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/60 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <div className="flex items-center mb-4">
              <span className="material-icons text-purple-400 text-2xl mr-3">code</span>
              <h3 className="text-lg font-semibold text-gray-200">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Java</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Python</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Go</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">C++</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Dart</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">SQL</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">HTML & CSS</span>
            </div>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <div className="flex items-center mb-4">
              <span className="material-icons text-purple-400 text-2xl mr-3">layers</span>
              <h3 className="text-lg font-semibold text-gray-200">Frameworks & Libraries</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-400 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Spring Boot</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Microservices</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">FastAPI</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Django</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Hibernate</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-400 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">React</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Next.js</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Flutter</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <div className="flex items-center mb-4">
              <span className="material-icons text-purple-400 text-2xl mr-3">science</span>
              <h3 className="text-lg font-semibold text-gray-200">Data Science & ML</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">TensorFlow</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Keras</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Scikit-learn</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Pandas</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">NumPy</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">OpenCV</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">LLM</span>
            </div>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <div className="flex items-center mb-4">
              <span className="material-icons text-purple-400 text-2xl mr-3">cloud_queue</span>
              <h3 className="text-lg font-semibold text-gray-200">Cloud & DevOps</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-400 mb-2">Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">AWS</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Azure</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">GKE</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Heroku</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-400 mb-2">Infrastructure & Automation</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Docker</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Kubernetes</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Terraform</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Jenkins</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">GitHub Actions</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">CI/CD</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Kafka</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">RabbitMQ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <div className="flex items-center mb-4">
              <span className="material-icons text-purple-400 text-2xl mr-3">storage</span>
              <h3 className="text-lg font-semibold text-gray-200">Databases & Data</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-400 mb-2">Relational & NoSQL</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">MySQL</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">PostgreSQL</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">MongoDB</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Redis</span>
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">ElasticSearch</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-400 mb-2">Vector & Search</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Pinecone</span>
                </div>
              </div>
              
            </div>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <div className="flex items-center mb-4">
              <span className="material-icons text-purple-400 text-2xl mr-3">build</span>
              <h3 className="text-lg font-semibold text-gray-200">Tools & Other</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Git</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Postman</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">IntelliJ</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Jira</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Figma</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">ELK Stack</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Grafana</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">Tableau</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;