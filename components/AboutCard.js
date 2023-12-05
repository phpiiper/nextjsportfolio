'use client'
import React, { useState, useEffect } from 'react';

export default function AboutCard({Side, CardData}){
let cardText = validateText(CardData.text);
function validateText(tx){
    tx = CardData.text;
    if (Array.isArray(tx)){
        tx = tx.map((x) => (
            <div className="container-flex" key={x.text.replaceAll(" ","")}>
                <i className={"icon fa-brands " + x.symbol}></i>
                <div>{x.text}</div>
            </div>
        ))
    } // an array
    return tx
}

function initFunction(c,obj){
    let cf = c.childNodes[0];
    let cb = c.childNodes[1];
    let spTL = cf.childNodes[0];
    let spBR = cf.childNodes[1];
    let ctx = cb.childNodes[1];


    c.front = cf; c.back = cb; c.data = obj;
    c.flip = function(){
        if (c.side){
            if (c.side === "Back"){ // show text
                c.side = "Front";
                c.front.style.display = null; c.back.style.display = "none";
            } else { // else hide
                c.side = "Back";
                c.front.style.display = "none"; c.back.style.display = null;
            }
        } else { // Set Default --> default is faced down
            c.side = "Back"; c.front.style.display = "none"
        }
    }
    c.set = function(x){
        c.side = x;
    }

    //c.onclick(c);
}

function cardclick(event,obj){
    let c = event.currentTarget;
    if (!c.parentNode.classList.contains("rightSection")){


    let repl = c.parentNode.nextSibling.childNodes[0];
    if (!c.front){
        initFunction(c,obj)
        c.flip();
        initFunction(repl,repl.data)
    }
        c.after(repl);
        c.flip() // flip
        c.parentNode.nextSibling.appendChild(c);
        repl.flip() // flip

        c.style.animation = "card-change 0.2s 1";
        setTimeout(function (){ c.style.animation = null; }, 201);
    }
}
// initFunction(event,CardData)

    return <div id={"card-"+CardData.name.toLowerCase()} className="card" onClick={(event) => cardclick(event,CardData)}>
            <div className="card-front" style={{display: 'none'}}>
                <span className="icon material-symbols-outlined">{CardData.icon}</span>
                <div className="card-text">
                    {cardText}
                </div>
                <span className="icon material-symbols-outlined">{CardData.icon}</span>
            </div>
            <div className="card-back">
                <img src="./logo.svg" alt="Back of card with design of logo" />
                <div>{CardData.name}</div>
            </div>
        </div>
}
