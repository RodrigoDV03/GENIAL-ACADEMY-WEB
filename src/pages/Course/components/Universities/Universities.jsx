import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { Link } from "react-router-dom";
import "./Universities.css";

export const Universities = () => {
    // const universities = [
    //     {
    //         id:1,
    //         name: "UNMSM",
    //         imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/UNMSM_coatofarms_seal.svg"
    //     },
    //     {
    //         id:2,
    //         name: "UNI",
    //         imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Uni-logo_transparente_granate.png/800px-Uni-logo_transparente_granate.png"
    //     },
    //     {
    //         id:3,
    //         name: "UNAC",
    //         imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Universidad-nacional-del-callao.png"
    //     },
    //     {
    //         id:4,
    //         name: "UNALM",
    //         imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Unalm_logo.png"
    //     },
    //     {
    //         id:5,
    //         name: "UNFV",
    //         imgUrl: "https://www.unfv.edu.pe/images/logo_unfv.jpg"
    //     },
    //     {
    //         id:6,
    //         name: "UNTELS",
    //         imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Untels_01.png/200px-Untels_01.png"
    //     },
    //     {
    //         id:7,
    //         name: "UNSA",
    //         imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Escudo_UNSA.png/488px-Escudo_UNSA.png"
    //     },
    //     {
    //         id:8,
    //         name: "UNE",
    //         imgUrl: "https://lh5.googleusercontent.com/proxy/NSXMPiwO9Zsm8WxXpnjOhapiRSp-5PWfIKzduVKpdoz9Fb0ajTGU1kw2e8iecxSQPQcjqPxJYi8"
    //     },

    // ]

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        async function fetchUniversities() {
        const token = Cookies.get("accessToken");
        // Obtén el token de las cookies
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
            <Link to={university.name.toLowerCase()} className="link">
                <div className="u_card_img">
                    <img src={university.imgUrl} alt={university.name} />
                </div>
                <div className="u_card_title">{university.name}</div>
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
