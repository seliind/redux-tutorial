import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPerson, deletePerson , updateUsername} from "../features/people";
import "./Persons.css";

function Persons() {
  const dispatch = useDispatch();
  const personList = useSelector((state) => state.persons.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewusername]= useState("");
  return (
    <div>
      <div className="addPerson">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addPerson({
                id: personList[personList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayPerson">
        {personList.map((person) => {
          return (
            <div key={person.id}>
              <h1>Name: {person.name}</h1>
              <h1>Username: {person.username}</h1>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => setNewusername(event.target.value)}
              />
              <button onClick={() => {dispatch(updateUsername({id:person.id, username : newUsername}))} }>Update</button>
              <button onClick={() => dispatch((deletePerson({id:person.id})))}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Persons;
