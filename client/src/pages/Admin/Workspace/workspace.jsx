import React, { useState } from "react";
import useTaskStore from "../../../store/useTaskStore";
import "./../Workspace/workspace.css";
import "react-datepicker/dist/react-datepicker.css";
import StatusDropdown from "../../../components/Admin/Dropdown/statusDropdown";
import CustomDatePicker from "../../../components/Admin/CustomDatePicker/customDatePicker";
import CustomDropdown from './../../../components/Admin/DeveloperDropDown/customDropdown';

const AdminWorkspace = () => {
  const { tasks, createTask, updateTask, deleteTask } = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  

  const handleCreateTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle || "New Task",
      assignedTo: "Not Assigned",
      status: "Pending",
      dueDate: new Date(),
      project: "Not Assigned",
    };

    createTask(newTask);
    setNewTaskTitle("");
  };

  const handleDeleteConfirmation = (taskId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (shouldDelete) {
      handleDeleteTask(taskId);
    }
  };

  const handleEditTask = (taskId, field, value) => {
    updateTask(taskId, { [field]: value });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const developers = ['Tulsi Lukhi', 'Parangi Rathod', 'Parshwa Mehta', 'Jash Shah'];

  return (
    <div className="header-container">
      <div className="header-text-div">
        <h2 className="header-text">My Workspace</h2>
        <div className="break-line"></div>
      </div>

      <div className="create-task-section">
        <input
          type="text"
          placeholder="Enter task title"
          className="ad-input"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <div className="create-task" onClick={handleCreateTask}>
          Create Task
        </div>
      </div>

      <main className="table">
        <section className="table__header">
          <h1>Tasks</h1>
        </section>

        <section className="table__body">
          <table>
            <thead className="table__thead">
              <tr>
                <th>ID</th>
                <th>Task Name</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td
                    contentEditable
                    onBlur={(e) =>
                      handleEditTask(task.id, "title", e.target.innerText)
                    }
                  >
                    {task.title}
                  </td>

                  <td>
                    <CustomDropdown
                      dropdownList={developers}
                      selectedValue={task.assignedTo}
                      onSelectFromList={(developer) =>
                        handleEditTask(task.id, "assignedTo", developer)
                      }
                    />
                  </td>

                  <td>
                    <StatusDropdown
                      status={task.status}
                      onChange={(selectedStatus) =>
                        handleEditTask(task.id, "status", selectedStatus)
                      }
                    />
                  </td>
                  <td>
                    <CustomDatePicker
                      // selected={newTaskDueDate}
                      selected={task.dueDate}
                      onChange={(date) => {
                        // setNewTaskDueDate(date);
                        handleEditTask(task.id, "dueDate", date);
                      }}
                      placeholderText="Due Date"
                    />
                  </td>
                  <td>
                    <div
                      className="delete-icon"
                      onClick={() => handleDeleteConfirmation(task.id)}
                    >
                      <img src="/images/delete-icon.png" alt="Delete"/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminWorkspace;
