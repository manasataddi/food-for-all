import React from "react";
import "../../../Styles/HomepageStyle/Feature.css";


// Data for focus points cards
const focusPoints = [
  {
    title: "Reduce Food Waste",
    description: "Ensuring that perfectly good food doesn't go to waste and instead reaches people who can benefit from it.",
  },
  {
    title: "Support Nonprofits",
    description: "Empowering nonprofit organizations by providing them with an easy way to access donated food.",
  },
  {
    title: "Foster Community Connections",
    description: "Connecting local restaurants and nonprofits, fostering a community spirit and encouraging mutual support.",
  },
  {
    title: "Promote Sustainability",
    description: "Contributing to a more sustainable environment by diverting food from landfills to plates.",
  },
  {
    title: "Enhance Food Security",
    description: "Making a positive impact on food security by ensuring that excess food is distributed to those who need it most.",
  },
];


// The Feature component showcases the core focus areas of the "Food for All" platform
function Feature() {
  return (
    <>
      {/* Main section for the feature component */}
      <section className="feature">
        <div className="feature_container">
          {/* Container for the section heading */}
          <div className="container_head">
            <h1 className="head">Our Focus</h1>
          </div>
          {/* Container for the section body */}
          <div className="container_body">
            {/* Introduction paragraph */}
            <p>
              At Food for All, our primary focus is to tackle the issue of food
              waste while providing support to those in need. We aim to:
            </p>
            {/* List of focus areas */}
            <ul>
              <li>
                <strong>Reduce Food Waste:</strong> By creating a platform where
                restaurants can post surplus food, we ensure that perfectly good
                food doesn't go to waste and instead reaches people who can
                benefit from it.
              </li>
              <li>
                <strong>Support Nonprofits:</strong> We empower nonprofit
                organizations by providing them with an easy way to access
                donated food, helping them focus their resources on other
                critical areas.
              </li>
              <li>
                <strong>Foster Community Connections:</strong> Our platform
                connects local restaurants and nonprofits, fostering a community
                spirit and encouraging mutual support.
              </li>
              <li>
                <strong>Promote Sustainability:</strong> By diverting food from
                landfills to plates, we contribute to a more sustainable
                environment, reducing the carbon footprint associated with food
                waste.
              </li>
              <li>
                <strong>Enhance Food Security:</strong> We strive to make a
                positive impact on food security by ensuring that excess food is
                distributed to those who need it most.
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* Section for scrollable cards */}
      <section className="scrollable_cards">
        <div className="cards_container">
          {focusPoints.map((point, index) => (
            <div className="card" key={index}>
              <h2>{point.title}</h2>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


export default Feature;

