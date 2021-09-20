import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const CreatePet = () => {
    const [validationErrors, setValidationErrors] = useState({});
    const history = useHistory();
    const [formInfo, setFormInfo] = useState(
        {
            name: "",
            type:"",
            description:"",
            skill1:"",
            skill2:"",
            skill3:""
        }
    );

    const changeHandler = e=>{
        setFormInfo({...formInfo,[e.target.name]:e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', formInfo)
        .then(res=>{
            if(res.data.error){
                setValidationErrors(res.data.error.errors)
                console.log(res.data.error.errors)
            } else {
                history.push("/")
            }
        })

    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Pet Name:</label>
                    <input type="text" name="name" onChange={(e)=>changeHandler(e)} value={formInfo.name}></input>
                    <p style={{color:"red"}}>{validationErrors?.name?.message}</p>
                </div>
                <div>
                    <label>Pet Type:</label>
                    <input type="text" name="type" onChange={(e)=>changeHandler(e)} value={formInfo.type}></input>
                    <p style={{color:"red"}}>{validationErrors?.type?.message}</p>
                </div>
                <div>
                    <label>Pet Description</label>
                    <input type="text" name="description" onChange={(e)=>changeHandler(e)} value={formInfo.description}></input>
                    <p style={{color:"red"}}>{validationErrors?.description?.message}</p>
                </div>

                <div>
                    <label>Skill 1:</label>
                    <input type="text" name="skill1" onChange={(e)=>changeHandler(e)} value={formInfo.skill1}></input>
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type="text" name="skill2" onChange={(e)=>changeHandler(e)} value={formInfo.skill2}></input>
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type="text" name="skill3" onChange={(e)=>changeHandler(e)} value={formInfo.skill3}></input>
                </div>
                <button type="submit">Add Pet</button>
            </form>
        </div>
    );
};

export default CreatePet;