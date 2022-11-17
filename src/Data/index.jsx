import React from "react";
import "./data.scss";

const json = [
    {
        carNumber: "uk10",
        driverName: "Manoj",
        inTime: "10:48 PM",
        outTime: "11:22 PM"
    },
    {
        carNumber: "uk20",
        driverName: "Rajiv",
        inTime: "10:48 PM",
        outTime: "11:22 PM"
    },
    {
        carNumber: "uk12",
        driverName: "Saurav",
        inTime: "10:48 PM",
        outTime: "11:22 PM"
    },
    {
        carNumber: "uk02",
        driverName: "Tanuj",
        inTime: "9:45 AM",
        outTime: "12:22 PM"
    },
    {
        carNumber: "uk10",
        driverName: "Manoj",
        inTime: "10:48 PM",
        outTime: "11:22 PM"
    }
];

function DataRow(e) {
    return (
        <tr>
            <td className="dataRow">{e.driverName}</td>
            <td className="dataRow">{e.carNumber}</td>
            {e.inTime!==null ? <td className="dataRow" style={{backgroundColor: "greenyellow"}}>{e.inTime}</td> : <td className="dataRow" style={{backgroundColor: "white"}}>----</td>}
            {e.outTime!==null ? <td className="dataRow" style={{backgroundColor: "rgb(250,150,150)"}}>{e.outTime}</td> : <td className="dataRow" style={{backgroundColor: "white"}}>----</td>}
        </tr>
    )
}

function Data(info) {
    return (
        <div className="data">
            <table border={1}>
                <tr>
                    <th>Driver Name</th>
                    <th>Car Number</th>
                    <th>Checkin Time</th>
                    <th>Checkout Time</th>
                </tr>
                {json.map((e)=>info.name.toLocaleLowerCase() === e.driverName.toLocaleLowerCase() && info.number.toLocaleLowerCase() === e.carNumber.toLocaleLowerCase() ? <DataRow driverName={e.driverName} carNumber={e.carNumber} inTime={e.inTime} outTime={e.outTime} /> : null)}
            </table>
            
        </div>
    )
}

export default Data;