import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

/*
Challenge1: Build the Navbar component.
Check the Figma file for the design specifics.
*/

/*
Challenge2: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

/*
Challenge3:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/


export default function App() {
          // <Hero />
  const cards = data.map(item => {
    return(
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location= {item.location}
        title= {item.title}
        price= {item.price}
        openSpots={item.openSpots}
        
        
        />
    )
  })

    
    return (
        <div>
          <Navbar />
         <section className="cards-list">
          {cards}
         </section>
          
          
        </div>
    )
}
