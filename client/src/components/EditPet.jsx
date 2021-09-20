import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { useParams } from "react-router"
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditPet = () => {
    const { id } = useParams();
    const [petInfo, setPetInfo] = useState({});
    const history = useHistory();
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=>{
                console.log("response when trying to get one ninja-->", res)
                setPetInfo(res.data.pet)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[id])

    const changeHandler = (e)=>{
        setPetInfo({ 
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, petInfo )
            .then(res=>{
                if(res.data.error){
                    setValidationErrors(res.data.error.errors)
                    console.log(res.data.error.errors)
                } else {
                    history.push("/");
                }
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <h3>Edit {petInfo.name}</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Pet Name:</label>
                    <input type="text" name="name" onChange={(e)=>changeHandler(e)} value={petInfo.name}></input>
                    <p style={{color:"red"}}>{validationErrors.name?.message}</p>
                </div>
                <div>
                    <label>Pet Type:</label>
                    <input type="text" name="type" onChange={(e)=>changeHandler(e)} value={petInfo.type}></input>
                    <p style={{color:"red"}}>{validationErrors.type?.message}</p>
                </div>
                <div>
                    <label>Pet Description</label>
                    <input type="text" name="description" onChange={(e)=>changeHandler(e)} value={petInfo.description}></input>
                    <p style={{color:"red"}}>{validationErrors.description?.message}</p>
                </div>

                <div>
                    <label>Skill 1:</label>
                    <input type="text" name="skill1" onChange={(e)=>changeHandler(e)} value={petInfo.skill1}></input>
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type="text" name="skill2" onChange={(e)=>changeHandler(e)} value={petInfo.skill2}></input>
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type="text" name="skill3" onChange={(e)=>changeHandler(e)} value={petInfo.skill3}></input>
                </div>
                <button type="submit">Edit Pet</button>
            </form>
        </div>
    );
};


export default EditPet;