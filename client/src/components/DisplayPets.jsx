import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const DisplayPets = (props) => {
    
    const {listOfPets} = props;

    // const sortPets = () => {
    //     setPets([...pets].sort((a, b) => (a.type < b.type) ? -1 : 1));
    // }

    return (
        <div>
            <Link to="/pets/new">add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            {/* <button onClick={sortPets()}>Sort by Type</button> */}
            <table className="petsTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    listOfPets.map((pet, i)=> {
                    return <tr key={i}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Link to={"/pet/" + pet._id}>Details</Link> | <Link to={"/edit/pet/" + pet._id}>Edit</Link></td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default DisplayPets;