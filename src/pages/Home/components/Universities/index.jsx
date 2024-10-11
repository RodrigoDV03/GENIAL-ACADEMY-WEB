import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export const UniversitiesSection = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        async function fetchUniversities() {
        const token = localStorage.getItem("token");
        // Obtén el token del localStorage
        if (!token) {
            console.error("Token no encontrado en el localStorage");
            return;
        }
    
        try {
            const response = await axios.get("https://genial-academy-backend.onrender.com/universities/findAll", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
        });
        setUniversities(response.data);
        } catch (error) {
            console.error("Error fetching universities:", error);
        }
        }
    
        fetchUniversities();
    }, []);

    function universityCard(university) {
        return (
        <button className="u_card" key={university.id}>
            <Link to={university.acronym.toLowerCase()} className="link">
                <div className="u_card_img">
                    <img src={university.imgUrl} alt={university.name} />
                </div>
                <div className="u_card_title">{university.acronym}</div>
            </Link>
        </button>
        );
    }

    return (
        <div className="u_screen">
        <div className="u_title">
            <p>Universidades</p>
        </div>
        <div className="u_grid">
            {universities.map(university => universityCard(university))}
        </div>
        </div>
    );
};
