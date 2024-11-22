import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside";
import './List.css'

const List = () => {
  const [taskWrite, setTaskWrite] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const agregarTarea = () => {
    if (taskWrite.trim() === "") {
      alert("Necesita agregar una tarea");
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      text: taskWrite,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskWrite("");

    guardarTareasEnLocalStorage([...tasks, newTask]);
  };

  const eliminarTarea = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    guardarTareasEnLocalStorage(updatedTasks);
  };

  const marcarComoCompletada = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    guardarTareasEnLocalStorage(updatedTasks);
  };

  const guardarTareasEnLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div className="App">
      <main className="main">
        <div className="container--todolist">
          <div className="container__list">
            <div className="list__texts">
              <div className="list__text">
                <h1 className="list__text-">To Do List</h1>
                <div className="list__add">
                  <input
                    type="text"
                    className="task__write"
                    value={taskWrite}
                    onChange={(e) => setTaskWrite(e.target.value)}
                    placeholder="Agregar tarea"
                  />
                  <button id="button__add" onClick={agregarTarea}>
                    <i className="bi bi-plus-lg">+</i>
                  </button>
                </div>
              </div>
              <h2>{tasks.length} tareas</h2>
            </div>
            <div className="list__task">
              {tasks.map((task) => (
                <div key={task.id} className="task">
                  <div className="task__text">
                    <input
                      type="checkbox"
                      className="task__check"
                      checked={task.completed}
                      onChange={() => marcarComoCompletada(task.id)}
                    />
                    <p
                      className={
                        task.completed ? "task__add completed" : "task__add"
                      }
                    >
                      {task.text}
                    </p>
                  </div>
                  <i
                    className="bi bi-x"
                    onClick={() => eliminarTarea(task.id)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default List;
