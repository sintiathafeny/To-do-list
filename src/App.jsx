import React, { useState } from "react";
import './App.css';
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks ] = useState([
     {
      id: "1",
      title: "Estudar Reactjs",
      complete: false,
    },
     {
      id: "2",
      title: "Banhar as cachorras",
      complete: true,
   },

   {
    id: "2",
    title: "Banhar as cachorras",
    complete: true,
 }
  ]);

    return (
      <>
        <div className= "container">
          <Tasks  tasks= {tasks} />  
        </div>
      </>
    );
};

export default App;