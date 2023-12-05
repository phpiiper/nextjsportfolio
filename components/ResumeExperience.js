import React from "react";

export default function ResumeExperience({Experience}){
    return <div className="resume-experience-div">
        <h3 className="resume-experience-title">
            {Experience.name}
        </h3>
        <p className="resume-experience-year">{Experience.year}</p>
        <div className="resume-experience-skills">
            <span className="resume-experience-skill-div">SKILLS</span>
            {Experience.skills.map(x => <span className="resume-experience-skill-div" key={Experience.name+"-"+x}>{x}</span>)}
        </div>
        <p className="resume-experience-text">
            {Experience.text}
        </p>
    </div>
}
