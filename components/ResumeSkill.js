import React from "react";

export default function ResumeSkill({Skill}){
    return <div className="resume-skill-div">
        <i className={"resume-skill-icon " + Skill.icon} />
        <div className="resume-skill-text">{Skill.text}</div>
    </div>
}
