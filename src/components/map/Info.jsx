import { useEffect, useState } from 'react'
import './info.css'

const Info = ({ region }) => {
  const [transitionClass, setTransitionClass] = useState('')

  useEffect(() => {
    setTransitionClass('transition-active')

    const timer = setTimeout(() => {
      setTransitionClass('')
    }, 300)

    return () => clearTimeout(timer)
  }, [region])

  const truncateDescription = (description, maxLength) => {
    if (!description) return ''
    return description.length > maxLength
      ? description.substring(0, maxLength) + '  '
      : description
  }

  return (
    <div className={`col-md-12 col-lg-7 mx-auto show ${transitionClass}`}>
      <div className="card card-link card-link-rotate">
        <div className="card-body">
          <div className="row g-md-3">
            {region?.images?.map((image, index) => (
              <div className="col-6" key={index}>
                <div
                  className="img-responsive img-responsive-3x3 rounded-3 border"
                  style={{
                    backgroundImage: `url(./municipios/${image})`,
                  }}></div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="px-5">
              <p className="font-bold text-dark mt-2 fs-1">@{region?.name}</p>

              <p className="text-sm text-dark mt-2">
                {truncateDescription(region?.description, 150)}
                <a href="#">ver mas </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
