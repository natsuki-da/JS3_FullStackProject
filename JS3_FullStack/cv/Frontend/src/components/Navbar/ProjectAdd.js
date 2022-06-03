import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

const ProjectAdd = () => {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");


    const submitProject = () => {
        axios.post("http://localhost:3001/api/insert", {
            projectName: projectName, 
            projectDescription: projectDescription,
        });
    };

    return (
        <Container>
            <div >
                <h1>New Projects</h1>
                <div className="form">
                    <label>Project Name: </label>
                    <input type="text" name="projectName" onChange={(e)=>{
                        setProjectName(e.target.value);}}/>
                    <label>Project Description: </label>
                    <input type="text" name="projectDescription" onChange={(e) =>{
                         setProjectDescription(e.target.value);}}/>
                    <button onClick={submitProject}>Submit</button>
                </div>
            </div>
        </Container>
    );
};

export default ProjectAdd;