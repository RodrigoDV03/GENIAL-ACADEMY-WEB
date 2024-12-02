import "./styles.css"
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import ModalLevel from "../../components/Modals/Modal_Level/modalLevel";
import { useScore } from "../../context/ScoreContext";

export const Level = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {uni_id, area_id, course_id, theme_id, level_id} = params;

    const { state, dispatch } = useScore(); // Usa el contexto de puntajes

    //redireccion
    useEffect(() => {
        if (!["advanced", "medium", "basic"].includes(level_id)) {
            navigate('/home');
        }
    }, [level_id, navigate]);

    const options = [
        "a","b", "c", "d", "e", "f"
    ]

    function getQuestionsById(uni_id, area_id, course_id, theme_id, level_id) {
        return [
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
            {
                desc: "La proposición : “Si Gilda fuma entonces tose y si no fuma entonces baila; por lo tanto, si Gilda no tose , entonces no baila” es falsa . ¿Cuál de las siguientes proposiciones es verdadera?",
                answers: [
                    {
                        correct: true,
                        desc: "Gilda fuma",
                    },
                    {
                        correct: false,
                        desc: "Gilda tose",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma y baila",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma o baila",
                    },
                ]
            },
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
            {
                desc: "La proposición : “Si Gilda fuma entonces tose y si no fuma entonces baila; por lo tanto, si Gilda no tose , entonces no baila” es falsa . ¿Cuál de las siguientes proposiciones es verdadera?",
                answers: [
                    {
                        correct: true,
                        desc: "Gilda fuma",
                    },
                    {
                        correct: false,
                        desc: "Gilda tose",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma y baila",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma o baila",
                    },
                ]
            },
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
            {
                desc: "La proposición : “Si Gilda fuma entonces tose y si no fuma entonces baila; por lo tanto, si Gilda no tose , entonces no baila” es falsa . ¿Cuál de las siguientes proposiciones es verdadera?",
                answers: [
                    {
                        correct: true,
                        desc: "Gilda fuma",
                    },
                    {
                        correct: false,
                        desc: "Gilda tose",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma y baila",
                    },
                    {
                        correct: false,
                        desc: "Gilda fuma o baila",
                    },
                ]
            },
            {
                desc: "La proposición: “Si María viaja a Cusco o no sale de vacaciones, entonces María no viaja a Cusco ni sale de vacaciones” es equivalente a:",
                answers: [
                    {
                        correct: true,
                        desc: "María viaja a Cusco o sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco y no sale de vacaciones.",
                    },
                    {
                        correct: false,
                        desc: "María no viaja a Cusco o sale de vacaciones.",
                    },
                ]
            },
        ];
    }

    const QUESTIONS = getQuestionsById(uni_id, area_id, course_id, theme_id, level_id);

    let s = []
    for (let index = 0; index < QUESTIONS.length; index++) {
        s[index] = -1
    }

    const [selection, setSelection] = useState(s);
    const [openClose, setOpenClose] = useState(false);
    const [result, setResult] = useState({ coins: 0, correct: 0, incorrect: 0});

    function calculateResult() {
        const coin = 3;
        const penaltyCoin = 1;
        const newResult = {coins: 0, correct: 0, incorrect: 0}
        QUESTIONS.forEach((question, number_q)=> {
            question.answers.forEach((answer, number_a) => {
                if(number_a == selection[number_q]) {
                    if(answer.correct){
                        newResult.correct++
                    }
                    else {
                        newResult.incorrect++
                    }
                }
            });
        }); 
        newResult.coins = newResult.correct*coin - newResult.incorrect*penaltyCoin;
        if(newResult.coins < 0) {
            newResult.coins = 0;
        }
        setResult(newResult);

        // Actualiza el puntaje y las monedas en el estado global
        dispatch({ type: 'ADD_POINTS', payload: { points: newResult.correct, coins: newResult.coins } });

        return true;
    }

    function handelSelection(number_q, select) {
        const newSelection = [...selection];
        if(newSelection[number_q] == select) {
            newSelection[number_q] = -1;
        }
        else {
            newSelection[number_q] = select;
        }
        setSelection(newSelection);
    }

    function generateAnswers(answers, number_q) {
        const html = [];
        answers.forEach((answer, i) => {
            html.push(
                <div className="question">
                    <div className={`question_selector ${selection[number_q] == i? "question_selector_selected" : ""}`}
                        onClick={()=>handelSelection(number_q, i)}
                    >
                        {options[i]}
                    </div>
                    <p>{answer.desc}</p>
                </div>
            );
        });
        return html;
    }

    function questionSection(question, number_q) {
        return (
            <div className="question__container">
                <h4>Pregunta {number_q+1}:</h4>
                <br/>
                <p>{question.desc}</p>
                <br/>
                <div className="question__answer">
                    {generateAnswers(question.answers, number_q)}
                </div>
            </div>
        );
    }

    function generateFlex() {
        const html = [];
        QUESTIONS.forEach((question, index) => {
            html.push(
                questionSection(question, index)
            );
        });
        return html;
    }

    return (
        <div>
            <main>
                <h1>Nivel {level_id}</h1>
                <div className="questions_container">
                    {generateFlex()}
                </div>
                <div className="submit__button__container">
                    <button className="submit__button"
                        onClick={()=>{
                            calculateResult();
                            setOpenClose(true)
                        }}>
                        Terminar
                    </button>
                </div>
                <button className="back__button" onClick={()=> navigate(-1)}>
                    <img src="/src/assets/images/back_arrow.png" alt="volver" />
                </button>
            </main>
            <ModalLevel 
                isOpen={openClose} 
                onClose={()=>[setOpenClose(false), navigate(-1)]}
                result={result} 
                linkTo={'https://drive.google.com/file/d/1DsaTGDzTfrhj9vJ4ZbFJp8oFEtOKrIMH/view'}
            />
        </div>
    );
}

export default Level;