import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {changeColor} from "../features/thema"

function ChangeColors() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" onChange={(event) => {
            setColor(event.target.value)}}/>
        <button onClick={() => {
            dispatch(changeColor(color));
        }}>
            Change COLOR</button>
    </div>
  )
}

export default ChangeColors