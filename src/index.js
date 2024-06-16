import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Search from './Search';


//import App from './App';
//import Parent from './parent';


const root = ReactDOM.createRoot(document.getElementById('root'));

// function Name(props){
//   return(
// <div style={{backgroundColor:"purple", padding:"10px", margin:"5px"}}>
//   <h1>{props.name}</h1>
//   <p>{props.dept}</p>
//   <h1>{props.Book}</h1>
//   <p>{props.Author}</p>
// </div>
// )
// }

// var person=[
//   {
//     name:"John",
//     dept:"CSE"
//   },
//   {
//     name:"Mike",
//     dept:"ECE"
//   },
//   {
//     name:"Hike",
//     dept:"Mech"
//   }
// ]

// var Novel= [
//   {
//     Book:"Rich Dad Poor Dad",
//     Author:"Robert"
//   },
//   {
//     Book:"Atomic Habits",
//     Author:"James"
//   },
//   {
//     Book:"MindSet",
//     Author:"Carol"
//   }
// ]

function Chat(props) {
  return (

    <div style={{ backgroundColor: "white", margin: "4px", borderRadius: "5px" }}>
      {/* <Card.Text>
        <p>search</p>
      </Card.Text> */}
      <Card>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{width:"max-content"}}>
            <img src={props.dp} style={{ width: "50px", borderRadius: "50%" }}></img>
          </div>
          <div style={{display:"flex" , justifyContent:"space-between" , width:"100%"}}>
            <div>
              <h3>{props.name}</h3>
              <p>{props.message}</p>
            </div>
            <div>
              <p>{props.time}</p>
              <p>{props.star}</p>
            </div>

          </div>
        </div>
      </Card>
    </div>
  )
}

var person = [
  {
    dp: "./dp.jpg",
    name: "Kaviya",
    message: "Hi! there",
    time: 6.01,
    star: "⭐"
  },
  {
    name: "Ishu",
    message: "Good Morning",
    time: 7.50,
    star: "⭐"
  },
  {
    name: "Santhosh",
    message: "Call me",
    time: 8.00,
    star: "⭐"
  },
  {
    name: "Pattu",
    message: "Can we meet around 5pm today",
    time: 9.10,
    star: "⭐"
  },
  {
    name: "Dharani",
    message: "Yes Sure",
    time: 10.15,
    star: "⭐"
  },

]

root.render(
  <div>
    <Search></Search>
    {
      person.map(function (whatsapp) {
        return (<Chat dp={whatsapp.dp} name={whatsapp.name} message={whatsapp.message} time={whatsapp.time} star={whatsapp.star}></Chat>)
      })
    }
    {/* {person.map(function(item){
       return(<Name name={item.name} dept={item.dept}></Name>)
    }) 
    }

    {
      Novel.map(function(book){
        return(<Name Book={book.Book} Author={book.Author}></Name>)
      })
    }
    
 <App></App>
 <Parent></Parent> */}

  </div>

);


