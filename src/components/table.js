import React from "react";
import First from "./first";

export default function Table(){
    
    function Back1(){
        document.getElementById('form').style.display = "block";
        document.getElementById('show').style.display ='inline';

        document.getElementById('table').style.display='none';
        document.getElementById('add').style.display='none';
    }
    

    return(
        <>
        <table id='table'>
            <tr>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Match Type</th>
                <th>Tournament Name</th>
                <th>Start Date and Time</th>
                <th>End Date and Time</th>
                <th>Location</th>
                <th className='tableComment'>Comments</th>
            </tr>
            
        </table>
        <button type='button' id='add' onClick={Back1} className='nextStyle2'><b>Add Entry</b></button>
        </>
    )
}