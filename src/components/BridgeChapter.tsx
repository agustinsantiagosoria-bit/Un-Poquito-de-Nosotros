
import { useState } from 'react'
import puente from '../assets/puente-noche.jpg'

function BridgeChapter() {
  const [layout, setLayout] = useState<'cover' | 'diary'>('cover')

  return (
    <article className="bridge-chapter">
      <div className="bridge-layout-selector">
        <button
          className={layout === 'cover' ? 'selected' : ''}
          onClick={() => setLayout('cover')}
        >
          A · Foto protagonista
        </button>

        <button
          className={layout === 'diary' ? 'selected' : ''}
          onClick={() => setLayout('diary')}
        >
          B · Diario personal
        </button>
      </div>

      <p className="book-eyebrow">
        CAPÍTULO II · EL COMIENZO DE NOSOTROS
      </p>

      <h2>
        Y entonces,
        <br />
        <em>te lo pregunté...</em>
      </h2>

      <div className="story-divider">♡</div>

      {layout === 'cover' && (
        <figure className="bridge-photo bridge-photo-cover">
          <img src={puente} alt="El puente de aquella noche" />
          <figcaption>Un lugar que se convirtió en parte de nosotros.</figcaption>
        </figure>
      )}

      <div className="bridge-text">
        <p>
          Lo gracioso es que, para cuando llegó este momento,
          nosotros ya habíamos empezado a salir sin darnos cuenta.
          Hacíamos cosas de novios, nos tratábamos como novios,
          pero nunca lo habíamos hecho oficial. ¡Nos habíamos olvidado!
        </p>

        <p>
          Hasta que una noche, mientras caminábamos por un puente
          de nuestro pueblo, me detuve y vos giraste para mirarme.
        </p>

        {layout === 'diary' && (
          <figure className="bridge-photo bridge-photo-diary">
            <img src={puente} alt="El puente de aquella noche" />
            <figcaption>
              Quizás para otros era un puente más. Para mí, nunca volvió
              a serlo.
            </figcaption>
          </figure>
        )}

        <p>
          Era de noche, el cielo estaba lleno de estrellas y la luz
          de la luna acompañaba aquel momento. No sé si vos imaginabas
          lo que estaba por pasar, pero yo tenía una mezcla de nervios,
          felicidad y emoción que difícilmente pueda explicar.
        </p>

        <p>
          Y ahí, en medio de ese lugar que quizás para cualquier otra
          persona era un puente más, te hice una pregunta que iba a
          cambiar nuestra historia:
        </p>
      </div>

      <blockquote className="story-question">
        «Maca, ¿quisieras ser mi novia?»
      </blockquote>

      <div className="story-divider">♡</div>

      <p className="bridge-ending">
        Y así, después de todo lo que había comenzado meses atrás,
        nuestra historia tuvo oficialmente un comienzo.
      </p>

      <div className="story-date">01 · 12 · 2023</div>
    </article>
  )
}

export default BridgeChapter
