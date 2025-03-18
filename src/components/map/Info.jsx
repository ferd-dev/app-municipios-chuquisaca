const Info = ({ region }) => {
  return (
    <div className="relative rounded-2xl bg-1 shadow-lg overflow-hidden mx-auto">
      <img src="./sucre.jpg" alt="text" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-white font-bold text-3xl">{region?.name}</h3>

        <p className="text-sm text-white mt-2">{region?.description}</p>
      </div>
    </div>
  )
}

export default Info
