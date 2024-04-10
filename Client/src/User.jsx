import React, { useEffect } from "react";
import axios from "axios";
import { getUser, deleteUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/delete/${id}`
      );
      if (response) {
        // console.log(response.data.data);
        dispatch(deleteUser({ id }));
        message.success("User Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
      message.error("Error while Deleting user");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/users");
        if (response) {
          console.log(response.data.data);
        }
        dispatch(getUser(response.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    color: "#333",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  };

  const buttonStyle = {
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    marginRight: "5px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minWidth: "50%",
          borderRadius: "5px",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <button onClick={() => navigate("/create")} style={buttonStyle}>
          Add +
        </button>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.age}</td>
                <td style={tdStyle}>
                  <Link to={`/edit/${user.id}`} style={buttonStyle}>
                    Update
                  </Link>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
