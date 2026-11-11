
import { useState } from 'react'
import portada from '../assets/maca-portada.jpg'
import BridgeChapter from './BridgeChapter'
import SoundtrackChapter from './SoundtrackChapter'
import MusicPlayer from './MusicPlayer'
import PhotoAlbum from './PhotoAlbum'
import FutureChapter from './FutureChapter'
import FinalChapter from './FinalChapter'

const chapters = [
  {
    id: 1,
    title: 'Cómo empezó todo',
    subtitle: 'A veces, las mejores historias empiezan sin que lo sepamos.',
    icon: '♡',
    label: 'NUESTRA HISTORIA',
  },
  {
    id: 2,
    title: 'El comienzo de nosotros',
    subtitle: 'Una pregunta que cambió nuestra historia para siempre.',
    icon: '♡',
    label: '01 · 12 · 2023',
  },
  {
    id: 3,
    title: 'Nuestra banda sonora',
    subtitle: 'Dos canciones que guardan un poquito de lo que siento por vos.',
    icon: '♫',
    label: 'NUESTRAS CANCIONES',
  },
  {
    id: 4,
    title: 'Nuestros recuerdos',
    subtitle: 'Pequeños momentos que juntos convertimos en algo inolvidable.',
    icon: '✧',
    label: 'NUESTRO ÁLBUM',
  },
  {
    id: 5,
    title: 'Lo que todavía nos espera',
    subtitle: 'Todavía nos quedan muchísimas cosas por vivir.',
    icon: '♡',
    label: 'NUESTRO FUTURO',
  },
  {
    id: 6,
    title: 'Una última cosita...',
    subtitle: 'Hay algo más que quiero decirte.',
    icon: '✉',
    label: 'PARA VOS',
  },
]


function Book() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null)

  const selectedChapter = chapters.find(
    (chapter) => chapter.id === activeChapter
  )

  return (
    <main className="book-container">
      <header className="book-header">
        {!selectedChapter && (
          <>
            <h1>
              Nuestro
              <br />
              <em>pequeño mundo</em>
            </h1>

            <p className="book-subtitle">
              Cada página guarda un pedacito de nosotros.
            </p>

            <figure className="book-cover-photo">
              <img src={portada} alt="Un recuerdo de nosotros dos" />
              <figcaption>Un poquito de nosotros ♡</figcaption>
            </figure>
          </>
        )}
      </header>
          <MusicPlayer />
      {selectedChapter ? (
        <section className="chapter-page">
          <button
            className="back-button"
            onClick={() => setActiveChapter(null)}
          >
            ← Volver al índice
          </button>

          {activeChapter === 1 ? (
            <article className="story-chapter">
              <p className="book-eyebrow">CAPÍTULO I · NUESTRA HISTORIA</p>

              <h2>
                Nunca lo vi
                <br />
                <em>venir...</em>
              </h2>

              <div className="story-divider">♡</div>

              <div className="story-text">
                <p>
                  Si alguien me hubiera dicho que una situación cualquiera
                  jugando al vóley en la escuela iba a terminar llevándome
                  hasta el amor de mi vida, probablemente no le hubiera
                  creído.
                </p>

                <p>
                  Todo comenzó con un comentario mío, una respuesta tuya,
                  un malentendido y mis ganas de pedir perdón.
                </p>

                <p>
                  No me reconocías, no recordabas haber dicho nada ese día,
                  pero nunca me cortaste un mensaje ni me ignoraste.
                </p>

                <p>
                  Pasó mucho. Todos me insinuaban que ya no buscaba tus
                  disculpas por lo que había pasado, sino por otras razones.
                  Y, sin darme cuenta, dejé de necesitar que los demás me
                  insinuaran las cosas, porque yo ya sabía qué me pasaba.
                </p>

                <p className="story-ending">
                  Me gustabas vos.
                  <br />
                  Y mucho.
                </p>
              </div>

              <div className="story-date">
                JULIO · 2023
              </div>
            </article>
          ) : activeChapter === 2 ? (
  <BridgeChapter />
) : activeChapter === 3 ? (
  <SoundtrackChapter />
  
) : activeChapter === 3 ? (
  <SoundtrackChapter />
) : activeChapter === 4 ? (
  <PhotoAlbum />
) : activeChapter === 4 ? (
  <PhotoAlbum />
) : activeChapter === 5 ? (
  <FutureChapter />
) : activeChapter === 6 ? (
  <FinalChapter />
) : (
    
  <div className="chapter-page-content">
    <span className="chapter-icon">{selectedChapter.icon}</span>
    <p className="book-eyebrow">{selectedChapter.label}</p>
    <h2>{selectedChapter.title}</h2>
    <p className="chapter-description">
      {selectedChapter.subtitle}
    </p>

    <div className="chapter-placeholder">
      <span>Esta página está esperando su historia...</span>
      <span className="placeholder-heart">♡</span>
    </div>
  </div>
)}

          <span className="book-page-number">
            0{selectedChapter.id}
          </span>
        </section>
      ) : (
        <section className="chapter-index">
          <p className="index-heading">ELEGÍ UNA PÁGINA</p>

          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              className="chapter-card"
              onClick={() => setActiveChapter(chapter.id)}
            >
              <span className="chapter-card-number">
                0{chapter.id}
              </span>

              <span className="chapter-card-content">
                <span className="chapter-card-label">
                  {chapter.label}
                </span>
                <span className="chapter-card-title">
                  {chapter.title}
                </span>
                <span className="chapter-card-subtitle">
                  {chapter.subtitle}
                </span>
              </span>

              <span className="chapter-card-arrow">→</span>
            </button>
          ))}
        </section>
      )}

      <footer className="book-footer">
        HECHO CON AMOR · PARA MI MIAWMOR
      </footer>
    </main>
  )
}

export default Book
