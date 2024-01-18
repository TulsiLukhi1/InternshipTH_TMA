import React from "react";
import "./../../Admin/Workspace/workspace.css";
import useTaskStore from "../../../store/useTaskStore";
import StatusDropdown from "../../../components/Admin/Dropdown/statusDropdown";



const UserTasks = () => {
  const { tasks, updateTask } = useTaskStore();
  const handleUpdateStatus = (taskId, value) => {
    updateTask(taskId, { status: value });
  };
  return (
    <div className="header-container">
      <div className="header-text-div">
        <h2 className="header-text">My Tasks</h2>
        <div className="break-line"></div>
      </div>

      <main className="table">
        <section className="table__header">
          <table>
            <thead className="table__thead">
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>
                    <StatusDropdown
                      status={task.status}
                      onChange={(selectedStatus) =>
                        handleUpdateStatus(task.id, selectedStatus)
                      }
                    />
                  </td>
                  <td>
                    {task.dueDate}
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

export default UserTasks;
