import React, { useState } from "react";
import CustomDropdown from "../../../components/Admin/DeveloperDropDown/customDropdown";
import "./../Workspace/workspace.css";
import useDeveloperStore from "../../../store/useDeveloperstore";
const AdminDevlopers = () => {
  const { developers, addDeveloper, updateDeveloper, deleteDeveloper } = useDeveloperStore();
  const [ newDeveloper, setNewDeveloper] = useState("");
  const [ devEmail,setDevEmail] = useState("")

  const [newDevDetails, setNewDevDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    developerRole: "",
    programmingLanguages: "",
    communicationChannels: "",
    availabilities: "",
  });

  const handleAddDeveloper = () => {
    addDeveloper(newDevDetails);
    setNewDevDetails({
      fullName: "",
      email: "",
      password: "",
      developerRole: "",
      programmingLanguages: "",
      communicationChannels: "",
      availabilities: "",
    });
  };


  const developerRolesList = [
    'Front-end Developer',
    'Back-end Developer',
    'Full-stack Developer',
    'DevOps Engineer',
  ];

  const progLangList = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'Ruby',
  ];
  

  const handleDeleteConfirmation = (devId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to remove this developer?"
    );

    if (shouldDelete) {
      handleDeleteDeveloper(devId);
    }
  };

  const handleEditDeveloper = (taskId, field, value) => {
    updateDeveloper(taskId, { [field]: value });
  };

  const handleDeleteDeveloper = (taskId) => {
    deleteDeveloper(taskId);
  };

  return (
    <div className="header-container">
      <div className="header-text-div">
        <h2 className="header-text">Developer List</h2>
        <div className="break-line"></div>
      </div>

      <div className="create-task-section">
        <input
          type="text"
          placeholder="Enter Developer Name"
          className="ad-input"
          value={newDeveloper}
          onChange={(e) => setNewDeveloper(e.target.value)}
        />
        
      {/* <div className="create-task-section"> */}
        <input
          type="text"
          placeholder="Enter Developer Email"
          className="ad-input"
          value={devEmail}
          onChange={(e) => setDevEmail(e.target.value)}
        />
        <div className="create-task" onClick={handleAddDeveloper}>
          Add Developer
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
                <th>Name</th>
                <th>Email</th>
                <th>Developer Role</th>
                <th>Programming Language</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {developers.map((dev) => (
                <tr key={dev.id}>
                  <td>{dev.id}</td>
                  <td
                    contentEditable
                    onBlur={(e) =>
                      handleEditDeveloper(dev.id, "fullName", e.target.innerText)
                    }
                  >
                    {dev.fullName}
                  </td>

                  <td
                    contentEditable
                    onBlur={(e) =>
                      handleEditDeveloper(dev.id, "email", e.target.innerText)
                    }
                  >
                    {dev.email}
                  </td>

                  <td>
                  <CustomDropdown
                      dropdownList={developerRolesList}
                      selectedValue={dev.developerRole}
                      onSelectFromList={(role) =>
                        handleEditDeveloper(dev.id, "developerRole", role)
                      }
                    />
                  </td>
                  <td>
                    <CustomDropdown
                        dropdownList={progLangList}
                        selectedValue={dev.programmingLanguages}
                        onSelectFromList={(lang) =>
                          handleEditDeveloper(dev.id, "programmingLanguages", lang)
                        }
                      />
                  </td>
                  
                  <td>
                    <div
                      className="delete-icon"
                      onClick={() => handleDeleteConfirmation(dev.id)}
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

export default AdminDevlopers;
