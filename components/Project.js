'use client'
import React, { useState, useEffect } from 'react';

import ProjectLink from '../components/ProjectLink'
export default function Project({Projects}){
const [SelectedProject, setSelectedProject] = useState(0);

function changeProject(index){
    const list = Projects;
    let e = document.getElementById("envelope");
    let ei = JSON.parse(e.dataset.index)
    if (index === "+"){
        // increase by one
        index = (list.length <= ei+1) ? 0 : ei+1;
    }
    e.dataset.index = index;
    let p = Projects[index];
    setSelectedProject(index);

}


return <div id="envelope" data-index={SelectedProject}>
    <div id="envelope-body">
        <div id="envelope-top">
            <img src="./envelopeTop.svg" alt="Top of the envelope" />
            <div id="envelope-seal" onClick={() => changeProject("+")}>
                <span className="icon material-symbols-outlined" id="envelope-seal-icon">
                {Projects[SelectedProject].icon}
                </span>
            </div>
        </div>
    </div>
    <div id="letter" data-testid="[WIP] Character Creator">
        <div id="letterTitle">
            <h2>{Projects[SelectedProject].title}</h2>
        </div>
        <p id="letterDescription">
            {Projects[SelectedProject].text}
        </p>
        <img id="letterProjectIm" alt="Image for project" src={"./" + Projects[SelectedProject].im} />
        <div id="letterLinkList">
            <div className="linkList-tag" onClick={() => changeProject("+")}>
                <span aria-label="Link to NEXT PROJECT">NEXT PROJECT</span>
            </div>
            {Projects[SelectedProject].links.map(x => <ProjectLink key={x.link} LinkData={x} />)}
        </div>
    </div>
</div>

}
