import { useEffect, useState } from "react";
import axios from "axios";
import "./Area.css";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Area = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courses, setCourses] = useState([]);
  const [area, setArea] = useState(null);
  const { uni_id, area_id } = params;

  useEffect(() => {
    const fetchArea = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:3000/api/university/${uni_id}/area/${area_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "x-api-key":
                "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
            },
          }
        );
        setArea(response.data.data);
      } catch (error) {
        console.error("Error fetching areas data:", error);
      }
    };
    const fetchCourses = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:3000/api/university/${uni_id}/area/${area_id}/courses`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "x-api-key":
                "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
            },
          }
        );
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    };
    fetchArea();
    fetchCourses();
  }, [area_id, uni_id]);

  function courseCard(course) {
    console.log(courses.thumbnail)
    return (
      <Link to={course.slug} className="link">
        <div className="circle-button">
          <img src={course.thumbnail} alt={course.name} />
          <span>{course.name}</span>
        </div>
      </Link>
    );
  }

  function generateGrid() {
    const html = [];
    courses.forEach((course) => {
      html.push(courseCard(course));
    });
    return html;
  }

  function genertatePath() {
    if (area) {
      return area.path.map((item, index) => (
        <>
        {index == 0 ? "" : " > "}
          {item.name}
        </>
      ))
    }
  }

  return (
    <div>
      <div id="navigation">
        <button
          name="btnregresar"
          id="btnregresar"
          onClick={() => navigate(-1)}
        ></button>
         <h4 id="btnunmsm">
          {genertatePath()}
        </h4>
      </div>
      <section id="section1">
        <div>
            <img
            src="/src/assets/images/principal.png"
            alt="Imagen Principal"
            id="imgprincipal"
            />
        </div>
        <div id="contenedor2">
          <h1 id="titulo">
            {area ? area.title : area_id}
          </h1>
          <div id="container">
            <h3>
              {area ? area.description : area_id}.
            </h3>
          </div>
        </div>
      </section>

      <section id="section2">
        <h1 id="titulo2">Cursos</h1>
        <div className="button-container" id="button-container1">
          {generateGrid()}
        </div>
      </section>
      <section id="section3">
        <h1 id="titulo3">Exámenes de admisión</h1>
        <div className="exam-container" id="exam-container1">
          <a
            href="https://drive.google.com/file/d/1c007AHsDKIN7fjuufideMhJ-WohJCDvf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="exam-button"
          >
            <img src="/src/assets/images/lista.png" alt="2020-I" />
            <span>2020-I</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1L4Ov_9-spyRV8HsFL2WAilR5WW2GjpGV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="exam-button"
          >
            <img src="/src/assets/images/lista.png" alt="2020-II" />
            <span>2020-II</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1IAHxvo1Luys2j2qwtImOjzw55A4cZxI9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="exam-button"
          >
            <img src="/src/assets/images/lista.png" alt="2021-I" />
            <span>2021-I</span>
          </a>
        </div>
        <div className="exam-container" id="exam-container2">
          <a
            href="https://drive.google.com/file/d/1DpLiGf0BcO-Ptpl6IFPwVaZlDOznDe1e/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="exam-button"
          >
            <img src="/src/assets/images/lista.png" alt="2021-II" />
            <span>2021-II</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1ohbIBtiUiuVJ1AdDGH8_3hCcd2IafOft/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="exam-button"
          >
            <img src="/src/assets/images/lista.png" alt="2022-I" />
            <span>2022-I</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1CDmkZrC6fO9mGvGwGZrQhBuT2HJ34ief/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="exam-button"
          >
            <img src="/src/assets/images/lista.png" alt="2022-II" />
            <span>2022-II</span>
          </a>
        </div>
      </section>
    </div>
  );
};
