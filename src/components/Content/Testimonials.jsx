import Avatar1 from "../../assets/avatar1.webp";
import Avatar2 from "../../assets/avatar2.webp";
import Avatar3 from "../../assets/avatar3.webp";
import Avatar4 from "../../assets/avatar4.webp";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__layout">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__container">
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 5⭐</h3>
              <img src={Avatar1} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Mark</p>
              <p>Exquisite flavors, impeccable service. Unforgettable experience.</p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.8⭐</h3>
              <img src={Avatar2} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Rufus</p>
              <p>Hidden gem with cozy ambiance. Memorable dishes.</p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.9⭐</h3>
              <img src={Avatar3} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Hailey</p>
              <p>Incredible fusion cuisine. Innovative and delicious.</p>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__card__container">
              <h3>Rating 4.7⭐</h3>
              <img src={Avatar4} alt="Avatar" />
            </div>
            <div className="testimonials__card__info">
              <p className="name">Alice</p>
              <p>Authentic comfort food. Satisfying and great value.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;