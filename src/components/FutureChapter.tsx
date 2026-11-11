
import { motion } from 'motion/react'
import {
  House,
  Plane,
  Camera,
  PawPrint,
  Heart,
  Sparkles,
} from 'lucide-react'

const dreams = [
  {
    number: '01',
    title: 'Mudarnos juntos',
    detail: 'Y construir nuestro propio «Hogar».',
    icon: House,
    style: 'dream-home',
  },
  {
    number: '02',
    title: 'Viajar a Japón',
    detail: 'Descubrir juntos un lugar completamente diferente.',
    icon: Plane,
    style: 'dream-japan',
  },
  {
    number: '03',
    title: 'Viajar a España',
    detail: 'Sumar otro destino a nuestra historia.',
    icon: Plane,
    style: 'dream-spain',
  },
  {
    number: '04',
    title: 'Conocer París',
    detail: 'Para ser una parejita aesthetic JSJSJS.',
    icon: Camera,
    style: 'dream-paris',
  },
  {
    number: '05',
    title: 'Nuestras mascotas',
    detail: 'Criar y compartir la vida con nuestros propios compañeros.',
    icon: PawPrint,
    style: 'dream-pets',
  },
  {
    number: '06',
    title: 'Crear una familia',
    detail: 'Seguir construyendo algo lindo juntos.',
    icon: Heart,
    style: 'dream-family',
  },
]

function FutureChapter() {
  return (
    <div className="future-chapter">
      <header className="future-heading">
        <Sparkles size={20} />

        <p className="book-eyebrow">CAPÍTULO V · NUESTRO FUTURO</p>

        <h2>
          Lo que todavía
          <br />
          <em>nos espera...</em>
        </h2>

        <p className="future-intro">
          Hay tantas cosas que todavía queremos vivir,
          tantos lugares por conocer y tantos sueños
          que alguna vez imaginamos juntos.
        </p>

        <div className="album-divider">♡ ✧ ♡</div>
      </header>

      <div className="future-dreams">
        {dreams.map((dream, index) => {
          const Icon = dream.icon

          return (
            <motion.article
              key={dream.number}
              className={`future-dream-card ${dream.style}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="future-dream-number">
                {dream.number}
              </span>

              <div className="future-dream-icon">
                <Icon size={25} strokeWidth={1.4} />
              </div>

              <h3>{dream.title}</h3>
              <p>{dream.detail}</p>
            </motion.article>
          )
        })}
      </div>

      <footer className="future-ending">
        <Heart size={19} />
        <p>
          No sabemos cuándo ni cómo vamos a cumplir
          cada uno de estos sueños.
        </p>
        <p className="future-ending-highlight">
          Pero qué lindo es imaginar que todos
          ellos nos esperan juntos.
        </p>
      </footer>
    </div>
  )
}

export default FutureChapter
