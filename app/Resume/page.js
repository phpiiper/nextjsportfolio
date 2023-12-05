'use client'
import 'public/globals.css'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import ResumeEducation from 'components/ResumeEducation'
import ResumeExperience from 'components/ResumeExperience'
import ResumeSkill from 'components/ResumeSkill'
import Data from "Data/Data.json"
export default function Page() {
const Educations = Data.edu;
const Experiences = Data.exp;
const Skills = Data.skl;

return (<div id={"resume-body"}>
    <div id="resume-page-header">
        <h1>PIPER PHAIR</h1>
        <button>
            <a href="./">BACK</a>
        </button>
    </div>
    <div id="resume">
        <div className="left">
            <div id="resume-education">
                <h2>Education</h2>
                {Educations.map(x => <ResumeEducation key={x.name} Education={x} />)}
            </div>
            <div id="resume-experience">
                <h2>Experience</h2>
                {Experiences.map(x => <ResumeExperience key={x.name} Experience={x} />)}
            </div>
            <button onClick={() => print()}>PRINT RESUME</button>
        </div>
        <div className="right">
            <div id="resume-skills">
                <h2>Skills</h2>
                    {Skills.map(x => <ResumeSkill Skill={x} key={"SKI-"+x.text} />)}
            </div>
        </div>
    </div>
        </div>

    )
}
