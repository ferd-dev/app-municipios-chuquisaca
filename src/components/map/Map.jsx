import { useState } from 'react'
import Info from './Info'
import MapSvg from './MapSvg'

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState()

  const handleRegionChange = (regionData) => {
    setSelectedRegion(regionData)
  }
  return (
    <div
      className="sobre"
      style={{
        marginTop: '-150px',
        position: 'relative',
        zIndex: 10, // Asegura que esté por encima
      }}>
      <div className="container-xl">
        <div className="row row-deck row-cards">
          <div className="col-sm-12 col-lg-12">
            <div
              className="card shadow-lg"
              style={{
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
              }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <Info region={selectedRegion} />
                  </div>
                  <div className="col-6">
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

  // return (
  //   <div className="bg-[#fcf2de] pb-16">
  //     <section className="relative -mt-15 py-12 bg-white mx-auto px-4 rounded-2xl shadow-lg max-w-5/6">
  //       <div className="container mx-auto px-4">
  //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //           <Info region={selectedRegion} />
  //           <MapSvg onRegionSelect={handleRegionChange} />
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // )
}

export default Map
