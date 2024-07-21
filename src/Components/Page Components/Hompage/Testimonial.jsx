import React from 'react';
import '../../../Styles/HomepageStyle/Testimonial.css';


// Array of testimonials
const testimonials = [
  {
    author: "John Doe",
    feedback: "Food for All has made a significant impact on our community. We're able to support more people with the help of surplus food donations.",
    image: "https://via.placeholder.com/150",
    designation: "Nonprofit Organization",
  },
  {
    author: "Jane Smith",
    feedback: "As a restaurant owner, Food for All has provided us with a seamless way to ensure our leftover food reaches those who need it.",
    image: "https://via.placeholder.com/150",
    designation: "Restaurant Owner",
  },
  {
    author: "Emily Johnson",
    feedback: "This platform is a game-changer. It's heartwarming to see our excess food being used to feed people instead of going to waste.",
    image: "https://via.placeholder.com/150",
    designation: "Satisfied Customer",
  },
  {
    author: "Michael Brown",
    feedback: "The impact of Food for All on reducing food waste and supporting local communities is incredible. Highly recommend this initiative!",
    image: "https://via.placeholder.com/150",
    designation: "Nonprofit Volunteer",
  }
];


function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial_container">
        <h1 className="head">Testimonials</h1>
        <div className="testimonial_cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <img src={testimonial.image} alt={`${testimonial.author}`} className="author_image" />
              <div className="card_body">
                <p className="feedback">"{testimonial.feedback}"</p>
                <h3 className="author">{testimonial.author}</h3>
                <p className="designation">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;


