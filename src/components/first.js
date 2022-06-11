import React, { useInsertionEffect, useState } from "react";


export default function First() {
    
    
    function Hide(){
        let para=document.getElementById('para');
        para.innerHTML="<b>General 2/3</b>";
        document.getElementById('drop1').style.display = 'none';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('div2').style.display = 'inline';
        
        var select = document.getElementById('options');
        var text = select.options[select.selectedIndex].value;
        if(text=='Friendly'){
            document.getElementById('tourname').style.visibility = 'hidden';
            document.getElementById('tourname2').style.visibility = 'hidden';
            
        }
        else{
            document.getElementById('tourname').style.visibility = 'visible';
            document.getElementById('tourname2').style.visibility = 'visible';
        }
        
    }
    function Back(){
        let para=document.getElementById('para');
        para.innerHTML="<b>Type 1/3</b>";
        document.getElementById('drop1').style.display = 'inline';
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div3').style.display = 'none';
        document.getElementById('btn').style.display = 'inline';

        document.getElementById('team1').value="";
        document.getElementById('team2').value='';
        document.getElementById('options').value='Friendly';
        document.getElementById('tourname2').value='';
        document.getElementById('startDate').value='';
        document.getElementById('endDate').value='';
        document.getElementById('location').value='';
        document.getElementById('comments').value='';

    }
    function Next2(){
        let para=document.getElementById('para');
        para.innerHTML="<b>Teams 3/3</b>";
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div3').style.display = 'inline';
    }
    function Back2(){
        let para=document.getElementById('para');
        para.innerHTML="<b>General 2/3</b>";
        document.getElementById('div2').style.display = 'inline';
        document.getElementById('div3').style.display = 'none';
    }

    var list1=[], list2=[],list3=[], list4=[],list5=[], list6=[],list7=[], list8=[], list9=[],list10=[];
    var n=1, x=0;
    function AddRow(){
        var Addrow = document.getElementById('table');
        var newRow = Addrow.insertRow(n);
        list1[x] = document.getElementById('team1').value;
        list2[x] = document.getElementById('team2').value;
        list3[x] = document.getElementById('options').value;
        list4[x] = document.getElementById('tourname2').value;
        list5[x] = document.getElementById('startDate').value;
        list6[x] = document.getElementById('endDate').value;
        list7[x] = document.getElementById('location').value;
        list8[x] = document.getElementById('comments').value;
        list9[x] = document.getElementById('teamOption').value;
        list10[x] = document.getElementById('teamOption2').value;

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        var cel7 = newRow.insertCell(6);
        var cel8 = newRow.insertCell(7);

        cel1.innerHTML = list1[x] + "(" + list9[x] + ")";
        cel2.innerHTML = list2[x] + "(" + list10[x] + ")";
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
        cel5.innerHTML = list5[x];
        cel6.innerHTML = list6[x];
        cel7.innerHTML = list7[x];
        //cel8.innerHTML = list8[x];
        if(list1[x]==""){
            cel1.innerHTML = "-";
        }
        if(list2[x]==""){
            cel2.innerHTML = "-";
        }
        if(list3[x]==""){
            cel3.innerHTML = "-";
        }
        if(list4[x]==""){
            cel4.innerHTML = "-";
        }
        if(list5[x]==""){
            cel5.innerHTML = "-";
        }
        if(list6[x]==""){
            cel6.innerHTML = "-";
        }
        if(list7[x]==""){
            cel7.innerHTML = "-";
        }
        //cel8.style.cols='1';
        //cel8.style.lineHeight='1px';
        newRow.className='new';
        cel8.id='cel8';
        var div = document.createElement('div');
        div.className='newdiv';
        cel8.appendChild(div);
        div.innerHTML = list8[x];
        n++;
        x++;
        Back();
        document.getElementById('form').style.display = "none";
        document.getElementById('table').style.display ='table';
        document.getElementById('add').style.display ='inline';
        document.getElementById('show').style.display ='none';
    }
    function Show(){
        document.getElementById('show').style.display ='none';
        document.getElementById('form').style.display = "none";
        document.getElementById('table').style.display ='table';
        document.getElementById('add').style.display ='inline';
    }
    
    return(
        <>
        <form name='myform1' id='form' className="FirstStyle">
            <div className='headerStyle'>
                <p id='para' className='headerWordStyle'><b>Type 1/3</b></p>
            </div>
            <div id='drop1' >
            <label  for='Match Type' className='labelStyle'>Select Match Type : </label>
            <select id='options' name='Match Type' className='dropdownStyle'>
                <option value='Friendly'>Friendly</option>
                <option value='Tournament'>Tournament</option>
            </select>
            <button type='button' id='btn' onClick={Hide} className='nextStyle'><b>Next</b></button>
            </div>
            <div2 id='div2' className='temp1Style'>
                <label  for='Start Date' className='StartDate'>Start Date and Time : </label>
                <input type='datetime-local' id='startDate' className='StartDateBox' name='enter'></input>
                <label  for='End Date' className='EndDate'>End Date and Time : </label>
                <input type='datetime-local' id='endDate' className='EndDateBox' name='enter'></input>
                <label  for='Match Location' className='StartDate'>Match Location : </label>
                <input type='text' id='location' className='StartDateBox' name='enter'></input>

                <label  id='tourname' for='Tournament Name' className='TourName'>Tournament Name : </label>
                <input id='tourname2' type='text' className='TourNameBox' name='enter'></input>

                <label  for='Comments' className='comment'>Comments : </label>
                <textarea rows='10' cols='50' id='comments' className='commentBox' name='enter'></textarea>
                <button type='button' id='btn2' onClick={Back} className='nextStyle2'><b>Back</b></button>
                <button type='button' id='btn3' onClick={Next2} className='nextStyle2'><b>Next</b></button>
            </div2>

            <div3 className='div3' id='div3'>
                <label htmlFor="Team1" className="StartDate">Team 1 Name : </label>
                <input type="text" id='team1' className="StartDateBox" name="Team1" />
                <label htmlFor="teamOptions" className="EndDate">Home or Away :</label>
                <select name="teamSelect" className="homeAway" id="teamOption">
                    <option value="Home">Home</option>
                    <option value="Away">Away</option>
                </select>
                <p className="vs">VS</p>
                <label htmlFor="Team1" className="StartDate">Team 2 Name : </label>
                <input type="text" id='team2' className="StartDateBox" name="Team1" />
                <label htmlFor="teamOptions" className="EndDate">Home or Away :</label>
                <select name="teamSelect" className="homeAway" id="teamOption2">
                    <option value="Home">Home</option>
                    <option value="Away">Away</option>
                </select>
                <button type='button' id='btn2' onClick={Back2} className='nextStyle2'><b>Back</b></button>
                <button type='button' id='btn3' onClick={AddRow} className='nextStyle2'><b>Submit</b></button>
            </div3>
        </form>
        <button type='button' id='show' onClick={Show} className='nextStyle2'><b>Show Table</b></button>
        
        </>
    )
}