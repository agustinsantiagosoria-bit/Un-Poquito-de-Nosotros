
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Heart, ArrowRight } from 'lucide-react'

interface WelcomeProps {
  onEnter: () => void
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="welcome-screen">
      <div className="welcome-decoration decoration-one">♡</div>
      <div className="welcome-decoration decoration-two">✿</div>
      <div className="welcome-decoration decoration-three">♡</div>

      <div className="welcome-content">
        <motion.p
          className="welcome-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          UNA PEQUEÑA HISTORIA
        </motion.p>

        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Un poquito
          <br />
          <em>de nosotros</em>
        </motion.h1>

        <motion.p
          className="welcome-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Para mi Miawmor, con todo mi amor.
        </motion.p>

        <div className={`envelope-scene ${isOpen ? 'opened' : ''}`}>
          <motion.div
            className={`envelope ${isOpen ? 'opened' : ''}`}
            onClick={() => setIsOpen(true)}
            whileHover={!isOpen ? { y: -5, scale: 1.02 } : {}}
            whileTap={!isOpen ? { scale: 0.98 } : {}}
            role="button"
            tabIndex={0}
            aria-label="Abrir sobre"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setIsOpen(true)
              }
            }}
          >
            <div className="envelope-back" />


<motion.div
  className="letter"
  initial={false}
animate={
  isOpen
    ? { y: -85, opacity: 1 }
    : { y: 0, opacity: 0.9 }
}
transition={{
  duration: 1.2,
  delay: isOpen ? 0.25 : 0,
  ease: [0.22, 1, 0.36, 1],
}}
>
  <Heart size={24} strokeWidth={1.3} />
  <span>Para vos</span>
</motion.div>


            <div className="envelope-front" />

            <motion.div
              className="envelope-flap"
              initial={false}
              animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.7 }}
            />

            <motion.div
              className="envelope-seal"
              animate={isOpen ? { opacity: 0, scale: 0.6 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Heart size={25} fill="currentColor" strokeWidth={1} />
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              className="welcome-invitation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <p>Hay algo que preparé especialmente para vos...</p>
              <button
                className="open-envelope-button"
                onClick={() => setIsOpen(true)}
              >
                Abrir mi sorpresa <Heart size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              className="welcome-invitation"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="opened-message">
                Una pequeña parte de todo lo que significás para mí.
              </p>

              <button className="open-envelope-button" onClick={onEnter}>
                Entrar a nuestro libro <ArrowRight size={17} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="welcome-footer">
        HECHO CON AMOR · 18.11.2026
      </footer>
    </main>
  )
}
