
import { useState } from 'react'
import Welcome from './components/Welcome'
import Book from './components/Book'

function App() {
  const [hasEntered, setHasEntered] = useState(false)

  if (!hasEntered) {
    return <Welcome onEnter={() => setHasEntered(true)} />
  }

  return <Book />
}

export default App
