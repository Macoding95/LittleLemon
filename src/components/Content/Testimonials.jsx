import Avatar1 from "../../assets/avatar1.webp";
import Avatar2 from "../../assets/avatar2.webp";
import Avatar3 from "../../assets/avatar3.webp";
import Avatar4 from "../../assets/avatar4.webp";

function Testimonials() {
  return (
    <section className="testimonials">
      <h1 className="testimonials__title">Testimonials</h1>
      <div className="testimonials__container">
        <div className="testimonials__card">
          <h2>Rating</h2>
          <img src={Avatar1} alt="Avatar" />
          <p>review</p>
          <p className="name">Name</p>
        </div>
        <div className="testimonials__card">
          <h2>Rating</h2>
          <img src={Avatar2} alt="Avatar" />
          <p>review</p>
          <p className="name">Name</p>
        </div>
        <div className="testimonials__card">
          <h2>Rating</h2>
          <img src={Avatar3} alt="Avatar" />
          <p>review</p>
          <p className="name">Name</p>
        </div>
        <div className="testimonials__card">
          <h2>Rating</h2>
          <img src={Avatar4} alt="Avatar" />
          <p>review</p>
          <p className="name">Name</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;