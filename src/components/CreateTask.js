import React from 'react'
import { Fragment, useState } from 'react';

import moment from "moment";

export default function CreateTask(task) {
   
    return (
      <Fragment key={task.id} >
        <tr onClick={()=>{console.log('clicked')}} style={{backgroundColor : ''}} >
          <th>{task.id}</th>
          <th>{task.priority}</th>
          <th>{task.description}</th>
          <th>{moment(task.date_created).format("d / MMM / YY")}</th>
          <th>{moment(task.date_due).format("d / MMM / YY")}</th>
          <th>{moment(task.last_update).format("d / MMM / YY")}</th>
          <th>{task.difficulty}</th>
          <th>{task.created_by}</th>
          <th>{task.handled_by}</th>
          <th>{task.status ? "done" : ""}</th>
        </tr>
      </Fragment>
    );
  }
 // {taskList.map(CreateTask)}