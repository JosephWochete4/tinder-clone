import { SwipeableDrawer } from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import TinderCard from "react-tinder-card"
import "./TinderCards.css"
import axios from "./axios"

function TinderCards() {
        const [people, setPeople]=useState([
        // {
        // name:"Elon Musk",
        // url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"

        // },
        // {
        // name:"Jeff Bezos",
        // url:"data:image/jpeg;base64,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"
        
        // },

    ]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            
            setPeople(req.data);

        }
        fetchData();
    }, []);
        

    const swiped=(direction, nameToDelete)=>{
        console.log("removing:" + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame=(name)=>{
        console.log(name + "left the screen")

    }

    return (
        <div className="tinderCards" >
            <div className="tinderCards__cardContainer">


        {people.map((person)=>(
            
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            >
                <div style={{backgroundImage:`url(${person.imgUrl})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>

            </TinderCard>

        ))}
            </div>
            
        </div>
    )
}

export default TinderCards
