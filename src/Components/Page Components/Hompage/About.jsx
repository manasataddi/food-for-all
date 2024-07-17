import React from "react";
//import styles
import "../../../Styles/About/About.css"
//import mui libraries
import { Button } from "@mui/material";

function About() {
  return (
    <>
      <section className="about_us">
        <div className="image_container">
          <img
            src="https://img.freepik.com/free-vector/fruit-salad-bowl-concept_23-2148505162.jpg?t=st=1720937734~exp=1720941334~hmac=446c0a6404b99b98aee5c0e63a9c310ad6dc7f522590f403cef87d3c3ba86238&w=740"
            alt=""
            srcset=""
          />
        </div>
        <div className="about_container">
          <div>
          <h1>About Us</h1>
          <p>
            At Food for All, our mission is to bridge the gap between surplus
            and need. In a world where food waste is a growing concern, and many
            still go hungry, we believe in harnessing the power of community and
            technology to make a positive impact. Our platform is dedicated to
            connecting restaurants with nonprofit organizations to ensure that
            leftover food reaches those who need it most.
          </p>
          </div>
          <div className="button_group">
            <Button
              variant="contained"
              color="success"
            >
              Take Food
            </Button>
            <Button
              variant="contained"
              color="success"
            >
              Give Food
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
