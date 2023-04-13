import "./App.css";
import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}

export default App;
