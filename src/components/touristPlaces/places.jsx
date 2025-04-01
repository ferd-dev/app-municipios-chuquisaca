import React, { useState, useEffect } from "react";
import data from "./../../data/activities.json";
import "./Activities.css";

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    console.log("Actividad actual:", data[currentIndex]);
  }, [currentIndex]);


  const navigateActivities = (direction) => {
    console.log("Navegar actividades:", direction);
    setCurrentIndex((prevIndex) => {
      if (!data.length) return 0; 

      let newIndex =
        direction === "next"
          ? (prevIndex + 1) % data.length
          : (prevIndex - 1 + data.length) % data.length;

      console.log("Nuevo índice:", newIndex);
      return newIndex;
    });
  };



  console.log("Datos cargados:", data);

  console.log("Navegar actividades:", currentIndex);


  return (
    <div className="page-body">
      <div className="container-xl">
        <h1
          className="font-bold text-dark mt-5 mb-4 text-center"
          style={{ fontSize: "2.5rem" }}
        >
          Explore Actividades
        </h1>

        <div className="row justify-content-center">
          <div className="row-md-8">
            <div className="activity-carousel">
              <div className="carousel-content">
                <div className="card activity-card">
                  <button
                    className="carousel-control prev"
                    onClick={() => {
                      console.log("Botón prev presionado");
                      navigateActivities("prev");
                    }}
                  >
                    &lt;
                  </button>
                  <div className="testses" onClick={(prev) => navigateActivities('next')} style={
                    {
                        zIndex: 10,
                    }

                  } type="button">
  casos cerrado
</div>

                  <div className="card-body text-center">
                    {data[currentIndex].imageBase64 ? (
                      <img
                        src={data[currentIndex].imageBase64}
                        alt={data[currentIndex].name}
                        className="activity-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="image-placeholder">
                        <h3 className="fs-2">Imagen no disponible</h3>
                      </div>
                    )}
                  </div>
                  <button
                    className="carousel-control next"
                    onClick={() => {
                      console.log("Botón next presionado");
                      navigateActivities("next");
                    }}
                  >
                    &gt;
                  </button>
                </div>
              </div>
              <div className="activity-details">
                <h2 className="text-center mb-3" style={{ fontSize: "1.8rem" }}>
                  {data[currentIndex].name}
                </h2>
                <p className="text-center" style={{ fontSize: "1.1rem" }}>
                  {data[currentIndex].description}
                </p>
                <p className="text-center text-muted mt-2">
                  {data[currentIndex].municipio}
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
