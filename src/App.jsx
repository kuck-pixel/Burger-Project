import "./app.css";

import ImageWithCaption from "./Components/ImageWithCaption/ImageWithCaption";

import NavLink from "./Components/NavLink/NavLink";

function App() {
  return (
    <>
      <h1 id="best-burger">Best Burger Berlin</h1>

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
          <ImageWithCaption src="/Boy image.webp" caption="Yum" />
          <ImageWithCaption src="/burger image.jpg" caption="Yum" />
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
            <NavLink text="Food" href="#food" />
            <NavLink text="Place" href="#place" />
            <NavLink text="People" href="#people" />
          </div>
        </div>
      </section>

      {/* Food section */}
      <div
        style={{
          background: "white",
          color: "orangered",
        }}
      >
        <section
          className="container py-5"
          id="food"
          style={{
            minHeight: "100dvh",
          }}
        >
          <h2>Our menu</h2>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Soy Hamburger: €7.50</li>
                <li>Seitan Hamburger: €7.50</li>
                <li>Bean Hamburger: €7.50</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>coffee:</li>
                <li>latte macchiatto:</li>
                <li>matcha:</li>
                <li>mineral water:</li>
                <li>lemonade:</li>
              </ul>
            </div>
          </div>{" "}
          {/* End of row */}
          <p></p>
        </section>
      </div>

      {/* Place section */}
      <section
        className="container py-5"
        id="place"
        style={{
          minHeight: "100dvh",
        }}
      >
        <h2>Find us</h2>
        <img src="https://i.imgur.com/vMVNwBM.png" alt="" />
      </section>

      {/* People section */}
      <div
        style={{
          background: "white",
          color: "orangered",
        }}
      >
        <section
          className="container py-5"
          id="people"
          style={{
            minHeight: "100dvh",
          }}
        >
          <h2>This is the people section</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            blanditiis numquam quas cupiditate. Optio ipsam unde ipsa sit
            pariatur. Nesciunt eveniet quibusdam possimus, fuga aliquam ad? Odit
            impedit doloribus modi!Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque blanditiis numquam quas cupiditate.
            Optio ipsam unde ipsa sit pariatur. Nesciunt eveniet quibusdam
            possimus, fuga aliquam ad? Odit impedit doloribus modi!Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Doloremque blanditiis
            numquam quas cupiditate. Optio ipsam unde ipsa sit pariatur.
            Nesciunt eveniet quibusdam possimus, fuga aliquam ad? Odit impedit
            doloribus modi!
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
