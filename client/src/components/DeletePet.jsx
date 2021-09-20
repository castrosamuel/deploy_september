import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { petInfo, successCallback } = props;
    
    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pet/' + petInfo._id)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button className="del-btn" onClick={deletePet}>Adopt {petInfo.name}</button>
    )
}
