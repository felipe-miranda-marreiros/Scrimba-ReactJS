import "../../Sass/Hero.scss";
import heroImg from "../../images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImg} alt="Airbnb places" className="hero-img" />
      <div className="hero__content">
        <h1 className="hero__content-title">Online Experiences</h1>
        <p className="hero__content-paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
