import Heroimg from "../../assets/Hero.webp"

function Hero() {
  return (
    <section className="hero">
      <div className="hero__layout">
        <div className="hero__container">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__subtitle">Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies dictum lacus id condimentum. </p>
          <a href="/">Reserve a table</a>
        </div>
        <div className="hero__img">
          <img src={Heroimg} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  )
}

export default Hero;