import React, { useState, useEffect } from "react";



const ShowVolunteer = () => {
//useState
    const [volunteers, setVolunteers] = useState([]);
//Asks the browser to fetch data, but wait until load to do so
    const getVolunteers = async () => {
    try{
        const response = await fetch("http://localhost:5000/volunteers");
        const jsonData = await response.json()
        setVolunteers(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  }
//fetches the project data
    useEffect(() => {
        getVolunteers();
  }, [])

//Delete Project function
const deleteVolunteer = async (id) => {
    try{
        const deleteVolunteer= await fetch(`http://localhost:5000/volunteers/${id}`, {
            method:"DELETE"
        });
        setVolunteers(volunteers.filter(volunteer => volunteer.volunteer_id !== id ))
    } catch (err) {
        console.error(err.message)
    }
}

//Here we map our projects
  return (
    <>
      <h1 className="text-center mt-5">Volunteer Pool</h1>
      {volunteers.map( volunteer => (
        <div className="container">
          
      <div className="volunteerList card col-sm" key={volunteer.volunteer_id}> 
      
      <img className="volImg card-img-left" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="image placeholder"></img>
      <div className="card-body">
        <h3 className="card-title">{volunteer.firstname} {volunteer.lastname}</h3>
        <h4 className="volInfo">Skills</h4>
        <p>{volunteer.skills}</p>
        <h4 className="volInfo">Interests</h4>
        <p>{volunteer.interests}</p>
      <button className="btn btn-danger"  onClick={() => deleteVolunteer(volunteer.volunteer_id)}>Remove Profile</button>
      </div>
      </div>
      </div>
      ))}
    </>
  );
};

export default ShowVolunteer;