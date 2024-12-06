import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Universities.css";

export const Universities = () => {

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        async function fetchUniversities() {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token no encontrado en las cookies");
            return;
        }
    
        try {
            const response = await axios.get("http://localhost:3000/api/universities", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                    "x-api-key" : "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b"
                }
        });
        setUniversities(response.data.data);
        } catch (error) {
            console.error("Error fetching universities:", error);
        }
        }
    
        fetchUniversities();
    }, []);

    function universityCard(university) {
        return (
        <button className="u_card" key={university.id}>
            <Link to={university.slug} className="link">
                <div className="u_card_img">
                    <img src={university.thumbnail} alt={university.name} />
                </div>
                <div className="u_card_title">{university.acronym}</div>
            </Link>
        </button>
        );
    }

    return (
        <div className="u_screen">
        <div className="u_title">
            <p>Selecciona una universidad</p>
        </div>
        <div className="u_grid">
            {universities.map(university => universityCard(university))}
        </div>
        </div>
    );
};
