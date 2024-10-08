import React from "react"


/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText= "ONLINE"
  }

  

   /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
    
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.img}`}className="card-image"/>
        
      
      <div className="card-stats">
        <img 
          src="../images/star-1.png" 
          className="card-star"
          alt="Star icon" 
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})&#183;</span>
        <span className="gray">{props.location}</span>
      </div>
      
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span>/ person</p>
      
    </div>
      
  );
}