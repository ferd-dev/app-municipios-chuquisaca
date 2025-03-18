import { useState } from 'react'
import Info from './Info'
import MapSvg from './MapSvg'

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState()

  const handleRegionChange = (regionData) => {
    setSelectedRegion(regionData)
  }

  return (
    <div className="bg-[#fcf2de] pb-16">
      <section className="relative -mt-15 py-12 bg-white mx-auto px-4 rounded-2xl shadow-lg max-w-5/6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Info region={selectedRegion} />
            <MapSvg onRegionSelect={handleRegionChange} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Map
