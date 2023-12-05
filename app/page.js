'use client'
import 'public/globals.css'
import React, { useState, useEffect } from 'react';
import Data from "Data/Data.json"


import Image from 'next/image'
import Footer from '../components/Footer'
import AboutCard from '../components/AboutCard'
import Project from '../components/Project'
export default function Home() {
const Cards = Data.cards;
const Projects = Data.projects;
const Footers = Data.footer;

function goTo(event,id){
let l = document.getElementById(id); if (l === null){return}
let lb = l.getBoundingClientRect();
window.scrollBy({
    left: 0, top: lb.y*1.2, behavior: "smooth"
})  }


  return (
    <main id="home">
      <section id="hero">
        <div className="hero-leftSection">
          <div className="wrapper">
            <h1>PIPER<br/>PHAIR</h1>
            <div className="headline" /*onClick="goTo(event,'projects')"*/>
              <span>Coding thoughts into reality</span>
              <div id="hero-scroll-down">
                <span className="icon material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-rightSection">
          <Image src="./logo.svg" alt="Website logo" onClick={() => goTo(event,'projects')} width="500" height="500" priority/>
        </div>
      </section>
      <section id="about">
        <div className="leftSection">
            <AboutCard Side="Back" CardData={Cards[0]}/>
            <AboutCard Side="Back" CardData={Cards[1]}/>
        </div>
        <div className="rightSection">
            <AboutCard Side="Front" CardData={Cards[2]}/>
        </div>
      </section>
      <section id="projects">
        <Project Projects={Projects} />
      </section>
      <Footer FooterList={Footers}/>
    </main>
  )
}
