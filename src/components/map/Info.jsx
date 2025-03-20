const Info = ({ region }) => {
  return (
    <div className="col-md-6 col-lg-12 mx-auto">
      <div className="card card-link card-link-rotate">
        <div className="card-body">
          <img
            src="./sucre.jpg"
            alt="text"
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h3 className="text-dark font-bold">{region?.name}</h3>

            <p className="text-sm text-dark mt-2">{region?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
