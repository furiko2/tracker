import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TaskEdit from "./TaskEdit";
import GetTasks from "./GetTasks";
import moment from "moment";

function TaskList() {
  const taskList = GetTasks();
  const [selectedID, setSelectedID] = useState(null);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Priority</th>
          <th>Description</th>
          <th>Date Created</th>
          <th>Date Due</th>
          <th>Last Update</th>
          <th>Difficulty</th>
          <th>Created by</th>
          <th>Handled by</th>
          <th>Status</th>
        </tr>

        {taskList.map(
          ({
            id,
            priority,
            description,
            date_created,
            date_due,
            last_update,
            difficulty,
            created_by,
            handled_by,
            status,
          }) => {
            return (
              <tr
                key={id}
                onClick={() => {
                  setSelectedID(id);
                }}
                style={{
                  backgroundColor: id === selectedID ? "lightgray" : "white",
                }}
                onDoubleClick={() => {
                  TaskEdit(id)
                }}
              >
                <th>{id}</th>
                <th>{priority}</th>
                <th>{description}</th>
                <th>{moment(date_created).format("d / MMM / YY")}</th>
                <th>{moment(date_due).format("d / MMM / YY")}</th>
                <th>{moment(last_update).format("d / MMM / YY")}</th>
                <th>{difficulty}</th>
                <th>{created_by}</th>
                <th>{handled_by}</th>
                <th>{status ? "✔️" : "🚧"}</th>
              </tr>
            );
          }
        )}
      </thead>
    </Table>
  );
}

export default TaskList;
