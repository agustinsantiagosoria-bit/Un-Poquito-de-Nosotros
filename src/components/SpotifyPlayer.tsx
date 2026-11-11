
interface SpotifyPlayerProps {
  playlistId: string
}

function SpotifyPlayer({ playlistId }: SpotifyPlayerProps) {
  return (
    <div className="spotify-player">
      <iframe
        title="Nuestra banda sonora"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
        width="100%"
        height="152"
        style={{ borderRadius: '12px', border: 0 }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}

export default SpotifyPlayer
