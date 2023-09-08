"use client"

import { assetPrefix } from '@/next.config';
import React, { useState } from 'react';

const page = () => {

  const [taskName, settaskName] = useState("");
  const [taskDesc, settaskDesc] = useState("");
  let [taskPanel, settaskPanel] = useState([]);
  let renderTask = <h2 className=' text-red-600'>No Task has been added yet.</h2>

  if (taskPanel.length > 0) {
    
  
  renderTask = taskPanel.map((t, i) => { // arguments: target and index repectively
    return (
      <div className="task">
        <h1>{t.taskName}</h1>
        <h3>{t.taskDesc}</h3>
      </div>
    )
  });
}

  const addTask = () => {
    settaskName("");
    settaskDesc("");

    settaskPanel([...taskPanel, {taskName, taskDesc}]);
  }

    return (
      <>
        <navbar className="nav-bar">
          To Do List
        </navbar>
        <div className="main-content">
          <form >
            <input type="text" placeholder='Enter Task' value={taskName} onChange={(e) => {
              settaskName(e.target.value);
            }} />
            <input type="text" placeholder='Enter Description' value={taskDesc} onChange={(e) => {
              settaskDesc(e.target.value);
            }} />
          </form>
          <button onClick={addTask} className='add-btn'>Add</button>
        </div>
        <div className="tasks-div">
          <ul>
            <li>{renderTask}</li>

          </ul>
        </div>
      </>
    )

  }

export default page