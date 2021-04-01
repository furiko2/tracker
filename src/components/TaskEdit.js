import { Fragment, useContext } from "react";
import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import Button from "react-bootstrap/Button";
import {UserContext} from './UserContext';
import Alert from 'react-bootstrap/Alert'

import "react-datepicker/dist/react-datepicker.css";

const axios = require('axios');

function TaskEdit() {
  const {user, setUser} = useContext(UserContext);
  const [createdDate, setCreatedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [lastUpadtedDate, setLastUpdatedDate] = useState(new Date());
  const userName = useContext(UserContext);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  registerLocale("en-GB", enGB);
  setDefaultLocale("en-GB");

  const [newTask, setNewTask] = useState({
    createdDate: "",
    dueDate: "",
    lastUpdatedDate: "",
    priority: "Priority",
    description: "Short description",
    difficulty: "Difficulty",
    createdBy: "",
    handledBy: "",
    status: false,
  });

 

  function EditTaskButton(id){
    let url = "http://localhost:5000/api/v1/tasks/:id";
    console.log("edit task button pressed")
    setNewTask((prevState) => ({
      ...prevState,
      createdDate: createdDate,
      dueDate: dueDate,
      lastUpdatedDate: lastUpadtedDate,
      createdBy : userName.name
    }));

    axios.put(url, 
      newTask
    )
    .then(function (response) {
      console.log('clicked')
      setShowSuccessAlert(true);
      setTimeout(()=>{ setShowSuccessAlert(false)},5000);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  function handleChangePriority(e) {
    console.log(e.target)
    const selectedText =
      e.target.text !== undefined ? e.target.text : newTask.priority;
     
    setNewTask((prevState) => ({
      ...prevState,
      priority: selectedText,
    }));
  }

  function handleChangeDifficulty(e) {
    console.log(e.target)
    const difficultyTitle =
      e.target.text !== undefined ? e.target.text : newTask.difficulty;

    setNewTask((prevState) => ({
      ...prevState,

      difficulty: difficultyTitle,
    }));
  }

  function handleChangeDescription(e) {
    const descriptionText =
      e.target.value !== undefined ? e.target.value : newTask.description;

    setNewTask((prevState) => ({
      ...prevState,

      description: descriptionText,
    }));
  }

  function handleChangeStatus(e) {
    const currentStatus = newTask.status;

    setNewTask((prevState) => ({
      ...prevState,
      status: !currentStatus,
    }));
  }

  return (
    <>
      {/* Priority  */}
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={newTask.priority}
          id="input-group-dropdown-priority"
        >
          <Dropdown.Item onClick={handleChangePriority}>Standard</Dropdown.Item>
          <Dropdown.Item onClick={handleChangePriority}>Urgent</Dropdown.Item>
          <Dropdown.Item onClick={handleChangePriority}>
            Important
          </Dropdown.Item>
          <Dropdown.Item onClick={handleChangePriority}>
            Urgent and Important
          </Dropdown.Item>
        </DropdownButton>

        {/* Difficulty  */}

        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={newTask.difficulty}
          id="input-group-dropdown-difficulty"
        >
          <Dropdown.Item onClick={handleChangeDifficulty}>Easy</Dropdown.Item>
          <Dropdown.Item onClick={handleChangeDifficulty}>Normal</Dropdown.Item>
          <Dropdown.Item onClick={handleChangeDifficulty}>Hard</Dropdown.Item>
        </DropdownButton>
             </InputGroup>
 


      {/* DATES */}
      
      {/* Date created  */}
      <InputGroup>
        <div>Date created</div>
        <DatePicker
          selected={createdDate}
          dateFormat="dd/MM/y"
          title="Date created"
          showWeekNumbers
          onChange={(date) => setCreatedDate(date)}
        />
{/* Date due  */}
<div>Date due</div>
        <DatePicker
          selected={dueDate}
          dateFormat="dd/MM/y"
          showWeekNumbers
          onChange={(date) => setDueDate(date)}
        />
   {/* Last update   */}
      
   <div>Last update</div>
        <DatePicker
          selected={lastUpadtedDate}
          dateFormat="dd/MM/y"
          showWeekNumbers
          
          onChange={(date) => setLastUpdatedDate(date)}
          
        />
      </InputGroup>

      
     
   
     
     
      {/* Created by  */}

      {/* Handled by  */}

{/* Description */}
<InputGroup>
        <FormControl
          placeholder="Short descprition"
          aria-label="Full descprition"
          aria-describedby="basic-addon2"
          title="text"
          onChange={handleChangeDescription}
        />
      </InputGroup>

      {/* Status */}
      <InputGroup>
        <InputGroup.Checkbox
          checked={newTask.status}
          onChange={handleChangeStatus}
          aria-label="Checkbox for status value"
        />
        <div>Complete</div>
      </InputGroup>

      <Alert show={showSuccessAlert} variant="success">Task Created</Alert>

      <Button
        variant="outline-success"
        onClick={EditTaskButton}
      >
        Create task
      </Button>
    
      
    </>
  );
}

export default TaskEdit;
