import Avatar1 from "../../assets/avatar1.webp";
import Avatar2 from "../../assets/avatar2.webp";
import Avatar3 from "../../assets/avatar3.webp";
import Avatar4 from "../../assets/avatar4.webp";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__layout">
        <h1 className="testimonials__title">Testimonials</h1>
        <div className="testimonials__container">
          <div className="testimonials__card">
            <h2>Rating 5⭐</h2>
            <img src={Avatar1} alt="Avatar" />
            <p>Exquisite flavors, impeccable service. Unforgettable experience.</p>
            <p className="name">Mark</p>
          </div>
          <div className="testimonials__card">
            <h2>Rating 4.8⭐</h2>
            <img src={Avatar2} alt="Avatar" />
            <p>Hidden gem with cozy ambiance. Memorable dishes.</p>
            <p className="name">Rufus</p>
          </div>
          <div className="testimonials__card">
            <h2>Rating 4.9⭐</h2>
            <img src={Avatar3} alt="Avatar" />
            <p>Incredible fusion cuisine. Innovative and delicious.</p>
            <p className="name">Hailey</p>
          </div>
          <div className="testimonials__card">
            <h2>Rating 4.7⭐</h2>
            <img src={Avatar4} alt="Avatar" />
            <p>Authentic comfort food. Satisfying and great value.</p>
            <p className="name">Alice</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;