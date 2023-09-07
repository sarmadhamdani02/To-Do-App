"use client"

import { assetPrefix } from '@/next.config';
import React, { useState } from 'react'

const page = () => {

	const [taskName, settaskName] = useState("");
	const [taskDesc, settaskDesc] = useState("");

  const addFunction = () => {
    settaskName("");
    settaskDesc("");
  }
  
  return (
    <>
		<navbar className="nav-bar">
			To Do List
		</navbar>
		<div className="main-content">
            <form >
                <input type="text" placeholder='Enter Task' value= {taskName} onChange={(e) => {
                   settaskName(e.target.value);
                }}/>
                <input type="text" placeholder='Enter Description' value={taskDesc} onChange={() => {
                  settaskDesc(e.target.value); 
                }}/>
            </form>
			<button onClick={addFunction} className='add-btn'>Add</button>
        </div>
	</>
  )
  
}

export default page