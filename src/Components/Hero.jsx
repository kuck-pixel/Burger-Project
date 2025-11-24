import ImageWithCaption from "./ImageWithCaption/ImageWithCaption";
import NavLink from "./NavLink/NavLink";
import boyImage from "../assets/Boy image.webp";
import burgerImage from "../assets/burger image.jpg";
import navItems from "../data/nav";

function Hero() {
  return (
    <section id="hero">
      <img
        id="backdrop"
        src="https://thumbs.dreamstime.com/b/cartoon-burger-shop-restaurant-customers-vector-design-generative-ai-lively-illustration-fast-food-large-sign-top-393446832.jpg"
        alt=""
      />
      <h2 id="plant-based">100% Plant Based</h2>
      <h2 id="family-friendly">Family-friendly</h2>
      <h2 id="really-yummy">Really Yummy!</h2>
      {/* Two images */}
      <div id="images">
        <ImageWithCaption src={boyImage} caption="Yum" />
        <ImageWithCaption src={burgerImage} caption="Yum" />
      </div>
      {/* Bottom Nav Links */}
      <div
        className="container"
        style={{
          marginTop: "3rem",
          marginBottom: "20rem",
        }}
      >
        <div className="row">
          {navItems.map(({ text, href }) => (
            <NavLink text={text} href={href} key={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
