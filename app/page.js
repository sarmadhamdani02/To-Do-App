"use client"

import { assetPrefix } from '@/next.config';
import { Copse } from 'next/font/google';
import React, { useState } from 'react';

const page = () => {

  const [taskName, settaskName] = useState("");
  const [taskDesc, settaskDesc] = useState("");
  let [taskPanel, settaskPanel] = useState([]);
  let renderTask = <h2 className=' text-red-600'>No Task has been added yet.</h2>
  let [taskID, settaskID] = useState(-1);

  const deleteTask = (i) => {
    let copyTaskArray = [...taskPanel];
    copyTaskArray.splice(i,1);
    settaskPanel(copyTaskArray);
  }

  if (taskPanel.length > 0) {
  
  renderTask = taskPanel.map((t, i) => { // arguments: target and index repectively
    return (
      <div key={i} className="task">
        <h1>{t.taskName}</h1>
        <h3>{t.taskDesc}</h3>
        <button className='delete-btn' onClick={() => {deleteTask(i)}}>Delete</button>
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

        <div className="completed-tasks">
          
        </div>
      </>
    )

  }

export default page