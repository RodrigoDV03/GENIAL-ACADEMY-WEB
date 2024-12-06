import "./University.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const University = () => {
  const [university, setUniversity] = useState(null);
  const [areas, setAreas] = useState([]); // Nuevo estado para almacenar las áreas
  const params = useParams();
  const { uni_id } = params;
  const navigate = useNavigate();

  const fetchUniversity = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:3000/api/university/${uni_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "x-api-key":
              "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
          },
        }
      );

      setUniversity(response.data.data);
    } catch (error) {
      console.error("Error fetching university data:", error);
    }
  };

  const fetchAreas = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:3000/api/university/${uni_id}/areas`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "x-api-key":
              "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
          },
        }
      );
      setAreas(response.data.data);
    } catch (error) {
      console.error("Error fetching areas data:", error);
    }
  };

  useEffect(() => {
    if (uni_id) {
      fetchUniversity();
      fetchAreas();
    }
  }, [uni_id]);

  function areaCard(area) {
    return (
      <div className="areas__button" key={area.id}>
        <Link
          to={area.slug}
        >
          <div className="button__image">
            <img src={area.thumbnail} alt="" />
          </div>
        </Link>
        <div className="button__text">
          <h4>{area.name}</h4>
          <p>{area.largeName}</p>
        </div>
      </div>
    );
  }

  function generateGrid() {
    return areas.map((area) => areaCard(area));
  }

  return (
    <div>
      <div>
        <div id="navigation">
          <button
            name="btnregresar"
            id="btnregresaru"
            onClick={() => navigate(-1)}
          ></button>
          <h4 id="btnunmsm">
            {university ? university.name : uni_id} &gt;{" "}
          </h4>
        </div>
        <div className="banner__university">
          <figure className="banner__figure">
            <img
              src="/src/assets/images/header1.png"
              className="figure__img"
              alt="Banner"
            />
          </figure>
          <div className="banner__text">
            <div className="text__title">
              <h1>{university ? university.title : uni_id}</h1>
              <img
                src={
                  university
                    ? university.thumbnail
                    : `/src/assets/images/${uni_id}.png`
                }
                alt={university ? university.acronym : uni_id}
              />
            </div>
            <p className="text__paragraph">
              {university ? university.description : uni_id} 
            </p>
          </div>
        </div>
      </div>
      <section className="main__areas">
        <h2>Áreas</h2>
        <div className="areas">{generateGrid()}</div>
      </section>
    </div>
  );
};

export default University;
