import "./styles.css";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import ModalLevel from "../../components/Modals/Modal_Level/modalLevel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {updateUser} from "../../redux/features/auth/authSlice"

export const Level = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const { uni_id, area_id, course_id, theme_id, level_id } = params;
  const user = useSelector((state) => state.auth.user);

  //redireccion
  useEffect(() => {
    if (!["advanced", "intermediate", "basic"].includes(level_id)) {
      navigate("/course");
    } else {
      const fetchQuestions = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(
            `http://localhost:3000/api/university/${uni_id}/area/${area_id}/course/${course_id}/topic/${theme_id}/questions?count=5&level=${level_id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "x-api-key":
                  "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
              },
            }
          );
          setQuestions(response.data.data);
        } catch (error) {
          console.error("Error fetching questions data:", error);
        }
      };
      fetchQuestions();
    }
  }, [uni_id, area_id, course_id, theme_id, level_id, navigate]);

  const options = ["a", "b", "c", "d", "e", "f"];


  let s = [];
  for (let index = 0; index < questions.length; index++) {
    s[index] = -1;
  }

  const [selection, setSelection] = useState(s);
  const [openClose, setOpenClose] = useState(false);
  const [result, setResult] = useState({ coins: 0, correct: 0, incorrect: 0 });

function  calculateResult() {
    const coin = 3;
    const penaltyCoin = 1;
    const newResult = { coins: 0, correct: 0, incorrect: 0 };
    questions.forEach((question, number_q) => {
      question.options.forEach((option, number_a) => {
        if (number_a == selection[number_q]) {
          if (option.isCorrect) {
            newResult.correct++;
          } else {
            newResult.incorrect++;
          }
        }
      });
    });
    newResult.coins =
      newResult.correct * coin - newResult.incorrect * penaltyCoin;
    if (newResult.coins < 0) {
      newResult.coins = 0;
    }
    setResult(newResult);

    /*
    // Actualiza el puntaje y las monedas en el estado global
    dispatch({
      type: "ADD_POINTS",
      payload: { points: newResult.correct, coins: newResult.coins },
    });*/

    updateUserCoins(newResult.coins);
    updateLocalUser();

    return true;
  }

  async function  updateUserCoins(coins) {
    const token = localStorage.getItem("token");
        try {
            if (user) {
                await axios.patch(
                    `http://localhost:3000/api/user/${user.id}/coins`,
                    {
                        action: "increment",
                        coins: coins
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        "x-api-key":
                          "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
                      },
                    }
                  );
            }
          
        } catch (error) {
          console.error("Error updating user coins:", error);
        }
  }

  async function  updateLocalUser() {
    const token = localStorage.getItem("token");
        try {
            if (user) {
                const response = await axios.get(
                    `http://localhost:3000/api/user/${user.id}`,
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        "x-api-key":
                          "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
                      },
                    }
                  );
                dispatch(updateUser(response.data.data));

            }
          
        } catch (error) {
          console.error("Error updating user coins:", error);
        }
  }

  function handelSelection(number_q, select) {
    const newSelection = [...selection];
    if (newSelection[number_q] == select) {
      newSelection[number_q] = -1;
    } else {
      newSelection[number_q] = select;
    }
    setSelection(newSelection);
  }

  function generateAnswers(answers, number_q) {
    const html = [];
    answers.forEach((answer, i) => {
      html.push(
        <div className="question">
          <div
            className={`question_selector ${
              selection[number_q] == i ? "question_selector_selected" : ""
            }`}
            onClick={() => handelSelection(number_q, i)}
          >
            {options[i]}
          </div>
          <p>{answer.option}</p>
        </div>
      );
    });
    return html;
  }

  function questionSection(question, number_q) {
    return (
      <div className="question__container">
        <h4>Pregunta {number_q + 1}:</h4>
        <br />
        <p>{question.statement}</p>
        <br />
        <div className="question__answer">
          {generateAnswers(question.options, number_q)}
        </div>
      </div>
    );
  }

  function generateFlex() {
    const html = [];
    questions.forEach((question, index) => {
      html.push(questionSection(question, index));
    });
    return html;
  }

  return (
    <div>
      <main>
        <h1>Nivel {level_id}</h1>
        <div className="questions_container">{generateFlex()}</div>
        <div className="submit__button__container">
          <button
            className="submit__button"
            onClick={() => {
              calculateResult();
              setOpenClose(true);
            }}
          >
            Terminar
          </button>
        </div>
        <button className="back__button" onClick={() => navigate(-1)}>
          <img src="/src/assets/images/back_arrow.png" alt="volver" />
        </button>
      </main>
      <ModalLevel
        isOpen={openClose}
        onClose={() => [setOpenClose(false), navigate(-1)]}
        result={result}
        linkTo={
          "https://drive.google.com/file/d/1DsaTGDzTfrhj9vJ4ZbFJp8oFEtOKrIMH/view"
        }
      />
    </div>
  );
};

export default Level;
