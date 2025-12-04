import { motion } from 'framer-motion'

const projectData = [
  {
    id: 1,
    name: 'Frontend Kit',
    project: {
      name: 'React Starter',
      version: 'v3.2.1',
      status: 'Production',
      lastDeploy: '2 hours ago',
      uptime: '99.99%',
    },
    statistics: {
      builds: '1,247',
      deployTime: '45s',
      testCoverage: '94%',
    },
    technologies: [
      { name: 'React 18', color: 'bg-cyan-500/20 text-cyan-400' },
      { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'Vite', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'Tailwind', color: 'bg-cyan-500/20 text-cyan-400' },
      { name: 'ESLint', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'Prettier', color: 'bg-pink-500/20 text-pink-400' },
      { name: 'Vitest', color: 'bg-green-500/20 text-green-400' },
      { name: 'Zustand', color: 'bg-orange-500/20 text-orange-400' },
    ],
  },
  {
    id: 2,
    name: 'API Server',
    project: {
      name: 'Node Backend',
      version: 'v2.8.0',
      status: 'Production',
      lastDeploy: '1 day ago',
      uptime: '99.95%',
    },
    statistics: {
      builds: '892',
      deployTime: '32s',
      testCoverage: '87%',
    },
    technologies: [
      { name: 'Node.js', color: 'bg-green-500/20 text-green-400' },
      { name: 'Express', color: 'bg-white/20 text-white' },
      { name: 'PostgreSQL', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'Redis', color: 'bg-red-500/20 text-red-400' },
      { name: 'Docker', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'Jest', color: 'bg-red-500/20 text-red-400' },
      { name: 'Prisma', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'GraphQL', color: 'bg-pink-500/20 text-pink-400' },
      { name: 'ScyllaDB', color: 'bg-purple-500/20 text-purple-400' },
    ],
  },
  {
    id: 3,
    name: 'Mobile App',
    project: {
      name: 'React Native',
      version: 'v1.5.2',
      status: 'Staging',
      lastDeploy: '3 days ago',
      uptime: '99.90%',
    },
    statistics: {
      builds: '456',
      deployTime: '78s',
      testCoverage: '82%',
    },
    technologies: [
      { name: 'React Native', color: 'bg-cyan-500/20 text-cyan-400' },
      { name: 'Expo', color: 'bg-white/20 text-white' },
      { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'Firebase', color: 'bg-yellow-500/20 text-yellow-400' },
      { name: 'Reanimated', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'Detox', color: 'bg-green-500/20 text-green-400' },
      { name: 'AsyncStorage', color: 'bg-orange-500/20 text-orange-400' },
    ],
  },
  {
    id: 4,
    name: 'Infrastructure',
    project: {
      name: 'Cloud Setup',
      version: 'v4.1.0',
      status: 'Production',
      lastDeploy: '5 hours ago',
      uptime: '100%',
    },
    statistics: {
      builds: '2,103',
      deployTime: '120s',
      testCoverage: '91%',
    },
    technologies: [
      { name: 'Terraform', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'AWS', color: 'bg-orange-500/20 text-orange-400' },
      { name: 'Kubernetes', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'Docker', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'GitHub Actions', color: 'bg-white/20 text-white' },
      { name: 'Datadog', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'Vault', color: 'bg-yellow-500/20 text-yellow-400' },
    ],
  },
]

const TechIcon = ({ name, color }) => (
  <div className={`px-2 py-0.5 rounded text-[10px] font-medium ${color} whitespace-nowrap`}>
    {name}
  </div>
)

const ProjectCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="card-rim bg-[#0c0d12]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-4 hover:border-white/10 transition-all duration-300 hover:shadow-card-hover"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
          <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-white">{data.name}</span>
      </div>

      {/* Project Section */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="text-xs font-medium text-white/70">Project</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
          <div className="flex justify-between">
            <span className="text-white/40">Name</span>
            <span className="text-white/80">{data.project.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Version</span>
            <span className="text-neon-cyan font-medium">{data.project.version}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Status</span>
            <span className={`font-medium ${data.project.status === 'Production' ? 'text-green-400' : 'text-yellow-400'}`}>{data.project.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Last Deploy</span>
            <span className="text-white/80">{data.project.lastDeploy}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Uptime</span>
            <span className="text-green-400 font-medium">{data.project.uptime}</span>
          </div>
        </div>
        {/* Action Icons */}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="w-3 h-3 text-white/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>

      {/* Build Stats Section */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-xs font-medium text-white/70">Build Stats</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
          <div className="flex justify-between">
            <span className="text-white/40">Total Builds</span>
            <span className="text-neon-cyan font-medium">{data.statistics.builds}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Deploy Time</span>
            <span className="text-white/80">{data.statistics.deployTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Test Coverage</span>
            <span className="text-green-400 font-medium">{data.statistics.testCoverage}</span>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-medium text-white/70">Tech Stack</span>
          </div>
          <span className="text-[10px] text-white/40">{data.technologies.length}+</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {data.technologies.slice(0, 8).map((tech, i) => (
            <TechIcon key={i} name={tech.name} color={tech.color} />
          ))}
          {data.technologies.length > 8 && (
            <div className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-white/40">
              +{data.technologies.length - 8}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const CardGrid = () => {
  return (
    <section className="relative px-6 pt-32 pb-16">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-3">
          Your Projects at a Glance
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
          Monitor builds, deployments, and tech stacks across all your projects
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Cards Frame Container */}
        <div className="cards-frame p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectData.map((project, index) => (
              <ProjectCard key={project.id} data={project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CardGrid
