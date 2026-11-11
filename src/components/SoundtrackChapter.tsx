
import { useState } from 'react'
import { Music2, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const songs = [
  {
    id: 1,
    title: 'This Side of Paradise',
    artist: 'Coyote Kisses',
    dedication:
      'Esta siempre fue mi canción favorita. La escuché muchísimas veces, pero cuando llegaste vos empecé a entender algunas partes de una manera que antes no había comprendido. Empecé a encontrarle sentido a sus palabras, a sus sentimientos y a esas pequeñas partes que antes simplemente cantaba sin detenerme demasiado a pensar en ellas. Y hay algo que probablemente nunca me olvide: vos fuiste la primera persona a la que me animé a cantarle cara a cara. Casi nunca había hecho algo así con alguien, pero con vos me nació hacerlo. Una canción que siempre fue mía, pero que ahora también tiene un poquito de vos.',
    notes: [
      {
        phrase: "I've never been in love, I've been alone. Feel like I've been living life asleep.",
        text:
          'Cuando llegaste a mi vida, empecé a sentir que había vivido muchas cosas sin disfrutarlas tanto como empecé a hacerlo desde que vos estabas conmigo. No es que antes no hubiera tenido momentos felices, pero con vos descubrí una manera diferente de disfrutar la vida y de encontrar felicidad en las pequeñas cosas.',
      },
      {
        phrase: 'Our fingers dancing when they meet',
        text:
          'Siempre me gustó esta parte. Siento que mis manos no pueden expresar lo felices que están cuando encuentran las tuyas. Es como si mis dedos bailaran cada vez que se encuentran con los tuyos. Puede parecer una pavada, pero son esas pequeñas cosas que me hacen feliz de estar con vos.',
      },
      {
        phrase: 'If you’re lonely, Come, Be lonely with me',
        text:
          'Sé que muchas veces te sentiste sola. Nunca necesité que me demostraras que estabas bien, que fingieras una sonrisa o que escondieras lo que sentías. Yo solamente quería que vinieras a estar conmigo, incluso en esos momentos en los que te sintieras sola. Quería que supieras que podías contar conmigo, que quería acompañarte y darte todo el amor que tuviera para ofrecerte.',
      },
    ],
  },
  {
    id: 2,
    title: 'Until I Found You',
    artist: 'Stephen Sanchez & Em Beihold',
    dedication:
      'Durante mucho tiempo pensé que enamorarme no era algo que estuviera hecho para mí. Creía que el amor simplemente no era lo mío, que quizás no iba a encontrar a alguien con quien pudiera sentir algo así. Y después llegaste vos. Sin buscarlo, terminaste cambiando todo lo que pensaba sobre el amor. Me hiciste descubrir sentimientos que creía que nunca iba a experimentar y me demostraste que estaba equivocado. También hubo momentos en los que mis días se sentían bastante oscuros. Y vos, muchas veces sin siquiera darte cuenta, fuiste ese apoyo que necesitaba para encontrar un poquito de luz. Por eso te dediqué esta canción. Porque antes de encontrarte, no imaginaba que podía sentir todo esto por alguien.',
    notes: [
      {
        phrase: 'Until I found her',
        text:
          'Durante mucho tiempo pensé que enamorarme no era para mí. Que el amor era algo que quizás les pasaba a otras personas, pero no a mí. Y apareciste vos, rompiendo todas esas ideas que había construido. Me hiciste descubrir que estaba equivocado y que todavía tenía muchísimo amor para dar.',
      },
      {
        phrase: 'I was lost within the darkness',
        text:
          'Hubo momentos en los que mis días se sentían bastante oscuros. Y vos, muchas veces sin siquiera darte cuenta, fuiste un apoyo enorme para mí. Me ayudaste a encontrar un poquito de luz cuando más lo necesitaba. No quiero que sientas que tenés que salvarme; simplemente quiero que sepas cuánto significó para mí tenerte a mi lado.',
      },
    ],
  },
]

function SoundtrackChapter() {
  const [selectedSong, setSelectedSong] = useState(0)
  const [page, setPage] = useState(0)

  const song = songs[selectedSong]
  const totalPages = song.notes.length + 1
  const isDedication = page === song.notes.length
  const note = song.notes[page]

  const changeSong = (index: number) => {
    setSelectedSong(index)
    setPage(0)
  }

  return (
    <article className="soundtrack-chapter">
      <p className="book-eyebrow">CAPÍTULO III · NUESTRAS CANCIONES</p>

      <h2>
        Nuestra
        <br />
        <em>banda sonora</em>
      </h2>

      <p className="soundtrack-intro">
        Hay canciones que escuchamos y otras que, de alguna manera,
        terminan contando un poquito de nuestra historia.
      </p>

      <div className="song-selector">
        {songs.map((item, index) => (
          <button
            key={item.id}
            className={selectedSong === index ? 'active' : ''}
            onClick={() => changeSong(index)}
          >
            <Music2 size={15} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <section className="song-journal">
        <div className="song-heading">
          <span className="song-heart">♡</span>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>

        <div className="journal-paper">
          <span className="journal-page-label">
            {isDedication ? 'UNA DEDICATORIA' : `ANOTACIÓN ${page + 1}`}
          </span>

          {isDedication ? (
            <>
              <h4>Esta canción es para vos.</h4>
              <p className="journal-text">{song.dedication}</p>
              <Heart className="journal-heart" size={22} />
            </>
          ) : (
            <>
              <p className="journal-phrase">
                «{note.phrase}»
              </p>
              <div className="journal-divider">♡</div>
              <p className="journal-text">{note.text}</p>
            </>
          )}
        </div>

        <div className="journal-navigation">
          <button
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            aria-label="Página anterior"
          >
            <ChevronLeft size={19} />
          </button>

          <span>
            {String(page + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </span>

          <button
            onClick={() => setPage((current) => Math.min(totalPages - 1, current + 1))}
            disabled={page === totalPages - 1}
            aria-label="Página siguiente"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </section>
    </article>
  )
}

export default SoundtrackChapter
