import { useState } from 'react'
import Info from './Info'
import MapSvg from './MapSvg'
import data from './../../data/municipalities.json'

const municipaly = data.find((item) => item.id === parseInt(1))

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState(municipaly)

  const handleRegionChange = (regionData) => {
    setSelectedRegion(regionData)
  }
  return (
    <div
      style={{
        marginTop: '-130px',
        position: 'relative',
        zIndex: 10, // Asegura que esté por encima
      }}>
      <div className="mx-5">
        <div className="row row-cards ">
          <div className="col-sm-12 col-lg-10 col-md-10 col-12 mx-auto">
            <div
              className="card rounded-4 "
              style={{
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
              }}>
              <div className="card-body">
                <p className="fs-1 text-center text-dark">
                  #Un_paseo_por_los_municipios ❤️ Chuquisaca
                </p>
                <div className="hr"></div>
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <Info region={selectedRegion} />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <MapSvg onRegionSelect={handleRegionChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
