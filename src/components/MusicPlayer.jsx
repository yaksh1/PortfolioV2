import React, { useState } from 'react'
import { FiShuffle as Shuffle, FiSkipBack as SkipBack, FiSkipForward as SkipForward, FiRepeat as Repeat, FiVolume2 as Volume2, FiHardDrive as HardDrive, FiPlay as Play, FiPause as Pause } from 'react-icons/fi'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(27)
  const [volume, setVolume] = useState(60)

  const togglePlay = () => setIsPlaying((p) => !p)
  const handleProgressChange = (e) => setProgress(Number(e.target.value))
  const handleVolumeChange = (e) => setVolume(Number(e.target.value))

  return (
    <div className="relative w-full max-w-sm p-6 flex flex-col space-y-6 rounded-3xl border border-white/30 shadow-2xl bg-white/20 backdrop-blur-2xl before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:opacity-40 before:pointer-events-none overflow-hidden">
      {/* Album Cover Section */}
      <div className="relative bg-gray-700 rounded-xl aspect-square flex items-center justify-center overflow-hidden">
        {/* Placeholder for Album Cover Image */}
        <div className="text-gray-400 text-3xl font-bold">Album Cover</div>
        <div className="absolute bottom-4 right-4 text-gray-400 text-sm">Sam Ple</div>
        <div className="absolute top-4 left-4 text-gray-400 text-sm">Oddam Asdi Artosa</div> {/* Watermark-like text */}
      </div>
      {/* Device and Song Info */}
      <div className="text-gray-300 text-sm">Device</div>
      <div className="text-white text-xl font-semibold">Song Title - Lorem Ipsum</div>
      <div className="text-gray-400 text-base">Artist - Lorem Ipsum</div>
      {/* Progress Bar */}
      <div className="flex items-center space-x-3">
        <span className="text-gray-400 text-xs">0:27</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
        />
        <span className="text-gray-400 text-xs">4:34</span>
      </div>
      {/* Playback Controls */}
      <div className="flex items-center justify-around text-gray-300 text-3xl">
        {/* Shuffle Icon */}
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <Shuffle className="h-6 w-6" />
        </button>
        {/* Previous Icon */}
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <SkipBack className="h-6 w-6" />
        </button>
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-3 bg-green-500 text-gray-900 rounded-full hover:bg-green-600 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8" />
          ) : (
            <Play className="h-8 w-8" />
          )}
        </button>
        {/* Next Icon */}
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <SkipForward className="h-6 w-6" />
        </button>
        {/* Repeat Icon */}
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <Repeat className="h-6 w-6" />
        </button>
      </div>
      {/* Volume Control */}
      <div className="flex items-center space-x-3 pt-4">
        <Volume2 className="h-5 w-5 text-gray-400" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
        />
      </div>
      {/* Devices Available */}
      <div className="flex items-center justify-center text-gray-400 text-xs mt-4">
        <HardDrive className="h-4 w-4 mr-2" />
        <span>Devices Available</span>
      </div>
    </div>
  )
}

export default MusicPlayer 