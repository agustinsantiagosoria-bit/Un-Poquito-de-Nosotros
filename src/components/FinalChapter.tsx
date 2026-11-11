
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Heart,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Mail,
} from 'lucide-react'

const levels = [
  {
    title: 'Nuestros comienzos',
    subtitle: 'Todo lo que empezó con un partido de vóley...',
    questions: [
      {
        question: '¿Dónde empezó todo?',
        options: [
          'En la costanera de Villa Carlos Paz',
          'En la escuela, jugando al vóley',
          'A través de unos mensajes',
        ],
        correct: [1],
        memory: 'Todo comenzó jugando al vóley en la escuela, con aquel comentario que terminó dando inicio a nuestra historia.',
      },
      {
        question: '¿Cuál fue el motivo de nuestro primer intercambio?',
        options: [
          'Mis disculpas por aquel malentendido',
          'Un piropo bastante malo JSJSJS',
          'Una invitación a salir',
        ],
        correct: [0],
        memory: 'Quién iba a imaginar que unas disculpas iban a terminar convirtiéndose en tantas conversaciones.',
      },
      {
        question: '¿Quién influyó para que no dejaras de hablarme?',
        options: ['Abby', 'Belén', 'Fede'],
        correct: [0],
        memory: 'Abby tuvo su pequeño papel en esta historia. Hay personas que, sin saberlo, ayudan a que algo lindo comience.',
      },
      {
        question: '¿Quién me pasó tu número?',
        options: ['Belén', 'Euge', 'Edu'],
        correct: [2],
        memory: 'Edu fue quien hizo posible que pudiéramos seguir hablando fuera de la escuela.',
      },
      {
        question: '¿Cuál fue nuestro primer plan frustrado?',
        options: [
          'Ir a ver la película de FNAF juntos',
          'Salir a jugar al vóley',
          'Ir a comer algo',
        ],
        correct: [0],
        memory: '¡La película de FNAF! Nuestro primer plan que no salió como esperábamos, pero que quedó para el recuerdo.',
      },
    ],
  },
  {
    title: 'Momentos especiales',
    subtitle: 'Esas anécdotas que solamente nosotros entendemos.',
    questions: [
      {
        question: '¿Dónde te pregunté si querías ser mi novia?',
        options: [
          'En una plaza de nuestro pueblo',
          'En el puente de Tanti',
          'A la salida de la escuela',
        ],
        correct: [1],
        memory: 'En aquel puente de nuestro pueblo, una noche bajo la luz de la luna, te hice la pregunta que cambió nuestra historia.',
      },
      {
        question: '¿Qué día comenzamos oficialmente nuestra relación?',
        options: [
          '18 de noviembre de 2023',
          '13 de noviembre de 2023',
          '1 de diciembre de 2023',
        ],
        correct: [2],
        memory: 'El 1 de diciembre de 2023. Una fecha que desde entonces tiene un significado completamente distinto para mí.',
      },
      {
        question: '¿Qué pasó en aquella primera intimidad?',
        options: [
          'Te diste la cabeza contra el respaldo',
          'No pudimos concretar lo que queríamos',
          'Estábamos tan nerviosos que terminamos riéndonos',
        ],
        correct: [0, 1, 2],
        memory: '¡Las tres son parte de la anécdota! Hay momentos que no salen como uno los imagina y justamente por eso terminan siendo inolvidables.',
      },
      {
        question: '¿Quiénes estaban presentes en aquella noche de nuestro primer beso?',
        options: [
          'Edu, Euge y Belén',
          'Simón, Franco y Belén',
          'Shamuel, Franco y Belén',
        ],
        correct: [2],
        memory: 'Shamuel, Franco y Belén. Algunos recuerdos vienen acompañados de personas que también formaron parte de ese momento.',
      },
      {
        question: '¿Qué pasó aquella noche que todavía recordamos?',
        options: [
          'Nació una foto icónica',
          'Te llevaste mi campera como recuerdo',
          'Belén se te cagó de risa',
        ],
        correct: [0, 1],
        memory: '¡Nacieron una foto icónica y el recuerdo de mi campera! Dos cosas que quedaron guardadas de aquella noche.',
      },
    ],
  },
]

function FinalChapter() {
  const [level, setLevel] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [finished, setFinished] = useState(false)
  const [finalPage, setFinalPage] = useState(0)

  const currentLevel = levels[level]
  const currentQuestion = currentLevel.questions[questionIndex]

  function revealAnswer() {
    if (selectedOption === null) return
    setRevealed(true)
  }

  function nextQuestion() {
    if (questionIndex < currentLevel.questions.length - 1) {
      setQuestionIndex((previous) => previous + 1)
      setSelectedOption(null)
      setRevealed(false)
      return
    }

    if (level === 0) {
      setLevel(1)
      setQuestionIndex(0)
      setSelectedOption(null)
      setRevealed(false)
      return
    }

    setFinished(true)
  }

  function restartGame() {
    setLevel(0)
    setQuestionIndex(0)
    setSelectedOption(null)
    setRevealed(false)
    setFinished(false)
    setFinalPage(0)
  }

  return (
    <div className="final-chapter">
      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div
            key={`game-${level}-${questionIndex}-${revealed}`}
            className="final-game"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <header className="final-heading">
              <Heart size={20} />
              <p className="book-eyebrow">CAPÍTULO VI · UNA ÚLTIMA COSITA</p>
              <h2>
                ¿Cuánto nos acordamos
                <br />
                <em>de nosotros?</em>
              </h2>
              <p>
                No hay competencia ni respuestas individuales.
                Vamos a recordar nuestra historia juntos.
              </p>
            </header>

            <div className="final-level-indicator">
              <span>NIVEL {level + 1} DE 2</span>
              <strong>{currentLevel.title}</strong>
              <p>{currentLevel.subtitle}</p>

              <div className="final-progress">
                <span
                  style={{
                    width: `${
                      ((questionIndex + 1) /
                        currentLevel.questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <small>
                Pregunta {questionIndex + 1} de{' '}
                {currentLevel.questions.length}
              </small>
            </div>

            <section className="final-question-card">
              <span className="final-question-number">
                PREGUNTA {questionIndex + 1}
              </span>

              <h3>{currentQuestion.question}</h3>

              <div className="final-options">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    className={`final-option ${
                      selectedOption === index ? 'selected' : ''
                    } ${
                      revealed && currentQuestion.correct.includes(index)
                        ? 'correct'
                        : ''
                    }`}
                    onClick={() => {
                      if (!revealed) setSelectedOption(index)
                    }}
                    disabled={revealed}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option}
                    {revealed &&
                      currentQuestion.correct.includes(index) && (
                        <Heart size={16} />
                      )}
                  </button>
                ))}
              </div>

              {revealed && (
                <motion.div
                  className="final-memory-reveal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Sparkles size={18} />
                  <p>{currentQuestion.memory}</p>
                  {currentQuestion.correct.length > 1 && (
                    <small>
                      ¡En esta pregunta había más de una respuesta válida!
                    </small>
                  )}
                </motion.div>
              )}

              {!revealed ? (
                <button
                  type="button"
                  className="final-action-button"
                  disabled={selectedOption === null}
                  onClick={revealAnswer}
                >
                  Revelar nuestro recuerdo
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  className="final-action-button"
                  onClick={nextQuestion}
                >
                  {questionIndex === currentLevel.questions.length - 1
                    ? level === 0
                      ? 'Descubrir el siguiente nivel'
                      : 'Terminar nuestro recorrido'
                    : 'Siguiente recuerdo'}
                  <ChevronRight size={18} />
                </button>
              )}
            </section>
          </motion.div>
        ) : (
          <motion.div
            key={`ending-${finalPage}`}
            className="final-ending"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {finalPage === 0 ? (
              <div className="final-thanks">
                <Sparkles size={24} />
                <p className="book-eyebrow">NUESTRA HISTORIA · 01.12.2023</p>

                <h2>
                  Gracias por
                  <br />
                  <em>estos tres años.</em>
                </h2>

                <div className="final-ending-divider">♡</div>

                <p>
                  Tres años de momentos, aprendizajes, risas,
                  aventuras y recuerdos que hoy forman parte
                  de nuestra historia.
                </p>

                <p>
                  Y aunque estas páginas guardan muchas cosas
                  que vivimos, todavía nos quedan muchísimas
                  más por escribir.
                </p>

                <h3>Y esto recién empieza...</h3>

                <button
                  type="button"
                  className="final-action-button"
                  onClick={() => setFinalPage(1)}
                >
                  Hay algo más para vos
                  <ChevronRight size={18} />
                </button>
              </div>
            ) : (
              <div className="final-letter">
                <div className="final-letter-icon">
                  <Mail size={32} />
                </div>

                <p className="book-eyebrow">UNA ÚLTIMA SORPRESA</p>

                <h2>
                  No todo podía
                  <br />
                  <em>quedar acá...</em>
                </h2>

                <p>
                  Hay algunas cosas que preferí escribirte
                  de otra manera.
                </p>

                <div className="final-letter-paper">
                  <Heart size={20} />
                  <p>
                    Esta vez, quiero que puedas leerlas
                    de mi puño y letra.
                  </p>
                  <span>Hay algo esperándote fuera de esta pantalla.</span>
                </div>

                <p className="final-letter-signature">
                  Con amor, para mi Miawmor. ♡
                </p>

                <button
                  type="button"
                  className="final-restart-button"
                  onClick={restartGame}
                >
                  <RotateCcw size={15} />
                  Volver a jugar
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FinalChapter
