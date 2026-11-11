
import { useRef, useState, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Music2 } from 'lucide-react'

import thisSideOfParadise from '../assets/music/this-side-of-paradise.mp3'
import untilIFoundYou from '../assets/music/until-i-found-you.mp3'

const tracks = [
  {
    title: 'This Side of Paradise',
    artist: 'Coyote Kisses',
    src: thisSideOfParadise,
  },
  {
    title: 'Until I Found You',
    artist: 'Stephen Sanchez & Em Beihold',
    src: untilIFoundYou,
  },
]

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00'

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const shouldAutoplay = useRef(false)

  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const track = tracks[currentTrack]

  function playNext() {
    shouldAutoplay.current = true
    setCurrentTrack((previous) => (previous + 1) % tracks.length)
    setCurrentTime(0)
  }

  function playPrevious() {
    const audio = audioRef.current

    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0
      return
    }

    shouldAutoplay.current = true
    setCurrentTrack((previous) =>
      (previous - 1 + tracks.length) % tracks.length
    )
    setCurrentTime(0)
  }

  function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().catch(() => {
        setIsPlaying(false)
      })
    } else {
      audio.pause()
    }
  }

useEffect(() => {
  const audio = audioRef.current
  if (!audio) return

  audio.load()

  if (shouldAutoplay.current) {
    audio.play()
      .then(() => {
        shouldAutoplay.current = false
      })
      .catch(() => {
        shouldAutoplay.current = false
        setIsPlaying(false)
      })
  }
}, [currentTrack])

  function handleSeek(value: string) {
    const audio = audioRef.current
    if (!audio) return

    const newTime = Number(value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={track.src}
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={playNext}
      />

      <div className="music-player-info">
        <div className="music-player-art">
          <Music2 size={22} />
        </div>

        <div className="music-player-details">
          <span className="music-player-label">
            NUESTRA BANDA SONORA
          </span>
          <strong>{track.title}</strong>
          <span>{track.artist}</span>
        </div>
      </div>

      <div className="music-player-controls">
        <button
          type="button"
          onClick={playPrevious}
          aria-label="Canción anterior"
        >
          <SkipBack size={19} />
        </button>

        <button
          type="button"
          className="music-player-play"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          type="button"
          onClick={playNext}
          aria-label="Canción siguiente"
        >
          <SkipForward size={19} />
        </button>
      </div>

      <div className="music-player-progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min={0}
          max={duration || 0}
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => handleSeek(event.target.value)}
          aria-label="Progreso de la canción"
        />

        <span>{formatTime(duration)}</span>
      </div>
    </div>
  )
}

export default MusicPlayer
