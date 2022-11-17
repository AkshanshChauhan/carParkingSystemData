import "./home.scss";
import React from "react";
import Data from "../Data";
import { useState } from "react";

function Home() {
    const [carNumber, setCarNumber] = useState("");
    const [driverName, setDriverName] = useState("");
    return (
        <>
            <Data name={driverName} number={carNumber}></Data>
            <div className="home" style={{display: "flex", gap: 5, margin: "20px 0px"}}>
                <input style={{padding: "10px"}} placeholder="Car Number..." onChange={(e)=>setCarNumber(e.target.value)} />
                <input style={{padding: "10px"}} placeholder="Driver Name..." onChange={(e)=>setDriverName(e.target.value)} />
            </div>
            <summary style={{color: "gray", fontWeight: 400, textAlign: "center"}}>Example: Car Number: uk10, Driver Name: Manoj</summary>
        </>
    )
}

export default Home;