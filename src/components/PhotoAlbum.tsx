
import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
} from 'lucide-react'

// Carga automáticamente todas las imágenes JPG de las cinco carpetas.
const imageFiles = import.meta.glob(
    
  '../assets/recuerdos/**/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>

const collectionInfo = [
  {
    id: '01-primeros-recuerdos',
    title: 'Los primeros recuerdos',
    subtitle: 'Donde todo comenzó...',
    number: '01',
  },
  {
    id: '02-asi-somos-nosotros',
    title: 'Así somos nosotros',
    subtitle: 'Nuestra forma de ser, juntos.',
    number: '02',
  },
  {
    id: '03-lugares-compartidos',
    title: 'Lugares que compartimos',
    subtitle: 'Cada lugar tiene algo de nosotros.',
    number: '03',
  },
  {
    id: '04-dias-inolvidables',
    title: 'Días inolvidables',
    subtitle: 'Momentos que siempre vamos a recordar.',
    number: '04',
  },
  {
    id: '05-fotos-favoritas-de-maca',
    title: 'Mis fotos favoritas de vos',
    subtitle: 'Porque nunca me canso de mirarte.',
    number: '05',
  },
]

function getPhotoNumber(path: string) {
  const filename = path.split('/').pop() ?? ''
  const match = filename.match(/^(\d+)/)

  return match ? Number(match[1]) : 0
}

function PhotoAlbum() {
  const [activeCollection, setActiveCollection] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const collections = useMemo(() => {
    return collectionInfo.map((collection) => {
      const photos = Object.entries(imageFiles)
        .filter(([path]) => path.includes(collection.id))
        .sort(
          ([pathA], [pathB]) =>
            getPhotoNumber(pathA) - getPhotoNumber(pathB)
        )
        .map(([path, src]) => ({ path, src }))

      return {
        ...collection,
        photos,
      }
    })
  }, [])

const currentCollection = collections.find(
  (collection) => collection.id === activeCollection
) ?? null

  const currentPhoto =
    currentCollection && selectedPhoto !== null
      ? currentCollection.photos[selectedPhoto]
      : null

  function closeCollection() {
    setActiveCollection(null)
    setSelectedPhoto(null)
  }

  function showPreviousPhoto() {
    if (!currentCollection || selectedPhoto === null) return

    setSelectedPhoto(
      (selectedPhoto - 1 + currentCollection.photos.length) %
        currentCollection.photos.length
    )
  }

  function showNextPhoto() {
    if (!currentCollection || selectedPhoto === null) return

    setSelectedPhoto(
      (selectedPhoto + 1) % currentCollection.photos.length
    )
  }

  return (
    <div className="photo-album">
      {!currentCollection ? (
        <>
          <div className="album-intro">
            <span className="album-heart">
              <Heart size={19} />
            </span>

            <p className="book-eyebrow">NUESTRO ÁLBUM</p>

            <h2>
              Nuestros
              <br />
              <em>recuerdos</em>
            </h2>

            <p>
              Hay momentos que pasan, y otros que queremos
              guardar para siempre.
            </p>

            <div className="album-divider">✧ ♡ ✧</div>
          </div>

          <div className="album-collections">
            {collections.map((collection) => (
              <button
                key={collection.id}
                type="button"
                className="album-collection-card"
                onClick={() => setActiveCollection(collection.id)}
                disabled={collection.photos.length === 0}
              >
                <div className="album-collection-image">
                  {collection.photos[0] ? (
                    <img
                      src={collection.photos[0].src}
                      alt={collection.title}
                      loading="lazy"
                    />
                  ) : (
                    <span>♡</span>
                  )}
                  <span className="album-collection-count">
                    {collection.photos.length} fotos
                  </span>
                </div>

                <div className="album-collection-info">
                  <span className="album-collection-number">
                    {collection.number}
                  </span>

                  <div>
                    <h3>{collection.title}</h3>
                    <p>{collection.subtitle}</p>
                  </div>

                  <span className="album-collection-arrow">→</span>
                </div>
              </button>
            ))}
          </div>

          <p className="album-ending">
            Cada fotografía guarda un pedacito de nuestra historia. ♡
          </p>
        </>
      ) : (
        <>
          <button
            type="button"
            className="album-back-button"
            onClick={closeCollection}
          >
            <ArrowLeft size={16} />
            Volver a las colecciones
          </button>

          <div className="album-intro album-collection-heading">
            <p className="book-eyebrow">
              COLECCIÓN {currentCollection.number}
            </p>

            <h2>
              {currentCollection.title}
            </h2>

            <p>{currentCollection.subtitle}</p>
            <div className="album-divider">♡</div>
          </div>

          <div className="album-photo-grid">
            {currentCollection.photos.map((photo, index) => (
              <button
                type="button"
                key={photo.path}
                className="album-photo-card"
                onClick={() => setSelectedPhoto(index)}
                aria-label={`Abrir fotografía ${index + 1}`}
              >
                <img
                  src={photo.src}
                  alt={`Recuerdo ${index + 1}`}
                  loading="lazy"
                />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>

          <p className="album-photo-count">
            {currentCollection.photos.length} pequeños recuerdos ♡
          </p>
        </>
      )}

      {currentPhoto && selectedPhoto !== null && (
        <div
          className="album-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="album-lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Cerrar fotografía"
          >
            <X size={23} />
          </button>

          <button
            type="button"
            className="album-lightbox-arrow album-lightbox-previous"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousPhoto()
            }}
            aria-label="Fotografía anterior"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="album-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={`Recuerdo ${selectedPhoto + 1}`}
            />

            <p>
              {String(selectedPhoto + 1).padStart(2, '0')}
              {' / '}
              {String(currentCollection?.photos.length ?? 0).padStart(2, '0')}
              {' · '}
              {currentCollection?.title}
            </p>
          </div>

          <button
            type="button"
            className="album-lightbox-arrow album-lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              showNextPhoto()
            }}
            aria-label="Fotografía siguiente"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  )
}

export default PhotoAlbum
