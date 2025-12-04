import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, ChevronDown, ChevronUp, Loader2, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const WINDOWS_DOWNLOAD_URL = "https://github.com/VishruthSai123/CodeEternal/releases/download/v1.0.0/Code.Eternal.Setup.1.0.0.exe"

// Download Button Component with fake progress
const DownloadButton = ({ url }) => {
  const [downloadStatus, setDownloadStatus] = useState("idle") // idle, downloading, downloaded
  const [progress, setProgress] = useState(0)

  const handleClick = () => {
    if (downloadStatus !== "idle") return
    
    setDownloadStatus("downloading")
    setProgress(0)
    
    // Fake progress animation
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        setProgress(100)
        setDownloadStatus("downloaded")
        
        // Start actual download
        window.location.href = url
        
        // Reset after a delay
        setTimeout(() => {
          setDownloadStatus("idle")
          setProgress(0)
        }, 3000)
      } else {
        setProgress(Math.floor(currentProgress))
      }
    }, 200)
  }

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden select-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all w-44
        ${downloadStatus === "idle" ? "bg-gradient-to-r from-neon-cyan to-neon-blue text-navy hover:opacity-90" : ""}
        ${downloadStatus === "downloading" ? "bg-neon-cyan/30 text-white cursor-not-allowed" : ""}
        ${downloadStatus === "downloaded" ? "bg-green-500/20 text-green-400 cursor-not-allowed" : ""}
      `}
      disabled={downloadStatus !== "idle"}
    >
      {downloadStatus === "idle" && (
        <>
          <Download className="h-3.5 w-3.5" />
          Download
        </>
      )}
      {downloadStatus === "downloading" && (
        <div className="z-10 flex items-center justify-center gap-2">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          {progress}%
        </div>
      )}
      {downloadStatus === "downloaded" && (
        <>
          <CheckCircle className="h-3.5 w-3.5" />
          <span>Download Started</span>
        </>
      )}
      {downloadStatus === "downloading" && (
        <div
          className="absolute bottom-0 left-0 h-full bg-neon-cyan/50 transition-all duration-200 ease-in-out -z-0"
          style={{ width: `${progress}%` }}
        />
      )}
    </button>
  )
}

// Platform icons
const WindowsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
)

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const LinuxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06.135-.19.334-.553.533-.156.135-.178.2-.141.333.037.134.057.2.077.266.257.867-.106 1.136-.51 1.136-.342-.002-.797-.135-1.283-.135-.585 0-1.15.467-1.77.734-.595.266-1.196.4-1.73.4-.512 0-.964-.2-1.283-.535-.052.146-.09.267-.16.399-.04.068-.098.135-.176.202.16.2.322.402.543.601.446.401 1.104.734 2.09.734.96 0 1.678-.333 2.231-.734.552-.4.96-.867 1.277-1.202.166-.2.288-.333.408-.4.12-.066.246-.066.455-.066.314 0 .639-.135.854-.334.216-.2.324-.466.359-.733.037-.4-.078-.666-.253-.866-.18-.2-.387-.334-.563-.467-.3-.133-.618-.267-.816-.533-.123-.135-.314-.4-.265-.666.07-.4.35-.867.646-1.270.3-.4.622-.8.883-1.202.26-.4.49-.8.63-1.202.138-.401.179-.736.122-1.002-.18-.67-.753-1.2-1.39-1.535zm-7.998 1.203c.096 0 .195.005.295.018.19.023.362.066.515.135-.141.005-.283.018-.427.031-.96.133-1.858.6-2.591 1.202-.495.401-.972.935-1.477 1.469a.62.62 0 00-.143.334c-.01.066.012.2.038.266.04.133.08.267.12.333l.124.268v.002c.178.4.296.869.296 1.402 0 .468-.088.935-.245 1.335-.013.022-.025.044-.04.063-.28.4-.682.801-1.212 1.002-.328.135-.728.2-1.214.133.074.135.17.267.286.4.28.333.688.667 1.227.867.538.2 1.202.266 1.986.066.08-.023.162-.047.244-.078-.053-.066-.102-.135-.15-.202-.184-.267-.272-.534-.301-.801-.03-.267.001-.535.046-.802.043-.268.139-.535.222-.802.085-.267.163-.4.235-.535.01-.067.018-.135.031-.202.009-.067.009-.135.003-.202-.018-.135-.052-.267-.116-.4-.063-.132-.14-.266-.251-.4-.185-.2-.388-.4-.593-.534-.21-.135-.42-.267-.596-.4a.923.923 0 01-.35-.6c-.038-.4.106-.802.387-1.137.282-.334.64-.668 1.016-.935.375-.267.768-.4 1.113-.6.349-.2.672-.336.923-.469.253-.133.404-.267.5-.333.103-.067.163-.135.223-.202v-.003h.003a.317.317 0 01.168-.067c.04 0 .08.005.12.018zm-6.984.736c.04 0 .08.004.12.012.2.036.4.132.583.332.183.2.36.534.517 1.069.122.4.241.868.363 1.402.122.534.247 1.068.373 1.602.097.4.254.802.456 1.135.202.334.452.6.723.802a3.06 3.06 0 001.008.533c.189.067.379.1.566.133-.074.068-.144.135-.222.202-.226.2-.458.333-.697.466a4.088 4.088 0 01-.958.4c-.351.1-.707.133-1.064.067h-.001c-.287-.06-.516-.2-.702-.4a2.386 2.386 0 01-.427-.736 4.21 4.21 0 01-.201-.868c-.027-.267-.006-.535.035-.802.041-.267.108-.534.194-.8.038-.135.09-.267.155-.4.022-.135.04-.2.055-.267.013-.067.02-.135.022-.202.003-.134-.021-.267-.065-.4-.043-.132-.113-.266-.198-.4-.054-.066-.118-.132-.188-.198a.686.686 0 00-.187-.135c.026-.133.049-.267.08-.4.065-.267.143-.535.229-.802.177-.534.371-1.002.58-1.402.208-.4.43-.668.662-.868.116-.1.232-.167.352-.2a.594.594 0 01.152-.019z"/>
  </svg>
)

const DownloadPage = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const windowsDownloads = [
    { name: "Windows (x64) Installer", url: WINDOWS_DOWNLOAD_URL, available: true },
  ]

  const macDownloads = [
    { name: "Mac (ARM64)", available: false },
    { name: "Mac (x64)", available: false },
    { name: "Mac Universal", available: false },
  ]

  const linuxDownloads = [
    { name: "Linux .deb (ARM64)", available: false },
    { name: "Linux .deb (x64)", available: false },
    { name: "Linux RPM (ARM64)", available: false },
    { name: "Linux RPM (x64)", available: false },
  ]

  return (
    <section className="min-h-screen bg-navy relative">
      {/* Lamp Glow Effect at Top */}
      <div 
        className="fixed top-0 left-0 right-0 h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(10,11,16,0.9)] border border-white/10 backdrop-blur-md text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start gap-6 mb-16"
          >
            {/* Logo */}
            <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 mt-2">
              <img 
                src="/assets/favicon.png" 
                alt="Code Eternal" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Download Button */}
            <div className="text-center md:text-left pt-1">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">
                Download Code Eternal
              </h1>
              <p className="text-gray-400 text-sm mb-4">
                Available for Windows. macOS and Linux coming soon.
              </p>
              <DownloadButton url={WINDOWS_DOWNLOAD_URL} />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" />

          {/* Version Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">1.0.0</span>
              <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium border border-neon-cyan/20">
                Latest
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </motion.div>

          {/* Platform Downloads Grid */}
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {/* macOS */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <AppleIcon />
                  <span className="font-semibold">macOS</span>
                </div>
                <div className="space-y-3">
                  {macDownloads.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{item.name}</span>
                      <span className="text-gray-600 text-xs">Coming Soon</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Windows */}
              <div className="bg-white/5 border border-neon-cyan/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <WindowsIcon />
                  <span className="font-semibold">Windows</span>
                </div>
                <div className="space-y-3">
                  {windowsDownloads.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{item.name}</span>
                      {item.available ? (
                        <a 
                          href={item.url}
                          className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-gray-600 text-xs">Coming Soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Linux */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <LinuxIcon />
                  <span className="font-semibold">Linux</span>
                </div>
                <div className="space-y-3">
                  {linuxDownloads.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{item.name}</span>
                      <span className="text-gray-600 text-xs">Coming Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DownloadPage
