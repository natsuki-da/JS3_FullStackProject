// import React from 'react';
// import ProjectList from "../../components/Navbar/ProjectList.js";
// import ProjectAdd from "../../components/Navbar/ProjectAdd.js";

// const Project = () => {
//     return(
//     <div className="project">
//       <ProjectList />
//       <ProjectAdd />
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

const Project = () => {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectDescriptionList, setProjectNameList] = useState([]);
    const [newDescription, setNewDescription] = useState("");
    const [skill, setSkill] = useState("");
    // const [projectId, setProjectId] = useState("");
    const [projectIdList, setSkillList] = useState([]);
    

    useEffect(()=>{
        axios.get("http://localhost:3001/api/get").then((response) =>{
            // console.log(response.data);
            setProjectNameList(response.data);
        });
    }, []);

    const submitProject = () => {
        axios.post("http://localhost:3001/api/insert", {
            projectName: projectName, 
            projectDescription: projectDescription,
        });

        setProjectNameList([...projectDescriptionList, {
            projectName: projectName, 
            projectDescription: projectDescription},
        ]);
    };
    
    const fetchProjects = async () => {
        const res = await fetch('http://localhost:3001/api/get')
        const data = await res.json()
        return data
      }  

    useEffect(()=>{
        const getProjects = async () => {
            const projectsFromApi = await fetchProjects();
            setProjectNameList(projectsFromApi);
        }
        getProjects();
        
        projectDescriptionList.map((project) =>  {
          console.log(project);
          getSkill(project.id);
        });
    }, []);

    const deleteProject = (project) => {
        axios.delete(`http://localhost:3001/api/delete/${project}`);
    };

    const updateProject = (newDescription, id) => {
        axios.put("http://localhost:3001/api/update", {
            id: id, 
            projectDescription: newDescription,
        });
        setNewDescription(newDescription);
    };

    const getSkill = (projectId) =>  {
    
        axios.get(`http://localhost:3001/api/skill/${projectId}`).then((response) =>{
        setProjectNameList(
            projectDescriptionList.map((project) =>
                project.id === projectId ? { ...project, skill: response.data } : project
            )

        ) 
        });
        projectDescriptionList.map((val) => {
            console.log('test');
        }); 
    };    
    const addNewSkill = (projectId) => {
        axios.post("http://localhost:3001/api/insert_skill", {
            skill: skill, 
            projectId: projectId,
        });
        console.log('addedSkill');
    };

    useEffect(()=>{
        axios.get("http://localhost:3001/api/get_skill").then((response) =>{
            //console.log(response.data);
            setSkillList(response.data);
        });
    }, []);

    return (
        <Container>
          {projectDescriptionList.map((val) => {
                return (
                    <div className="card" key={val.id}>
                        
                        <p>{val.skill}</p>
                        <h3>{val.projectName}</h3>
                        <div>Project Description: </div>
                        <div>{val.projectDescription}</div>
                        {/* <div>{val.id}</div> */}

                        <input type="text" id="updateInput" placeholder="Description" onChange={(e) => {
                            setNewDescription(e.target.value)
                        }}></input>
                        <button className="btn btn-primary" onClick={() => {updateProject(newDescription, val.id)}}>Update</button>
                        <button className="btn btn-secondary" onClick={() => {deleteProject(val.id)}}>Delete</button>
                        
                        <label>Skills: </label>
                        <input type="text" name="skill" onChange={(e) =>{
                            setSkill(e.target.value);}}/>
                        {/* <label>Project Id: </label> */}
                        {/* <input type="text" name="projectId" onChange={(e) =>{
                            setProjectId(e.target.value);}}/> */}
                        <button className="btn btn-primary" onClick={() => {addNewSkill(val.id)}}>Add</button>
                        
                        
                    </div>
                );
                })}


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

export default Project;

