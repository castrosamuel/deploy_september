import React, {useState, useEffect} from 'react';
import { useParams } from "react-router"
import {Link} from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const DetailPet = (props) => {
    const { removeFromDom } = props;
    const [petInfo, setPetInfo] = useState({});
    const { id } = useParams();
    const history = useHistory();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=>{
                setPetInfo(res.data.pet)
            })
            .catch(err=>console.log(err))
    },[id])

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
                history.push("/");
            })
            .catch(err => console.error(err));
    }

    const likePet = () => {
        petInfo.likes++
        axios.put(`http://localhost:8000/api/pet/${id}`, petInfo )
            .then(res=>{
                console.log("Pet likes: ", petInfo.likes)
            })
            .catch(err=> console.log(err))
        
    }

    const displayLike = () =>{
        if (petInfo.likes < 1){
            return <button onClick={likePet}>Like {petInfo.name}</button>;
        } else{
            return "";
        }
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <button onClick={(e)=>{deletePet(petInfo._id)}}>Adopt {petInfo.name}</button>
            <h3>Details about: {petInfo.name}</h3>
            <div>
                <b>Pet Type: </b> {petInfo.type}
                <br/>
                <b>Pet Description: </b> {petInfo.description}
                <br/>
                <b>Skills: </b> 
                
                {petInfo.skill1}<br/>
                {petInfo.skill2}<br/>
                {petInfo.skill3}<br/>
                {displayLike()}
                {petInfo.likes} likes(s)
            </div>
        </div>
    );
};


export default DetailPet;