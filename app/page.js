"use client"

import React, { useState } from 'react'

const page = () => {

	const [taskName, settaskName] = useState("");
	const [taskDesc, settaskDesc] = useState("");

  return (
    <>
		<navbar className="nav-bar">
			To Do List
		</navbar>
		<div className="main-content">
            <form >
                <input type="text" placeholder='Enter Task' />
                <input type="text" placeholder='Enter Description' />
            </form>
			<button className='add-btn'>Add</button>
        </div>
	</>
  )
}

export default page