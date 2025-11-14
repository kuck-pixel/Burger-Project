import "./app.css";

function App() {
  return (
    <>
      <h1 id="best-burger">Best Burger Berlin</h1>
      <h2 id="plant-based">100% Plant Based</h2>
      <h2 id="really-yummy">Really Yummy!</h2>

      {/* Two images */}
      <div id="images">
        <div className="image-with-caption">
          <img src="/Boy image.webp" alt="" />
          <p>Yum Yum</p>
        </div>
        <div className="image-with-caption">
          <img src="/burger image.jpg" alt="" />
          <p>Yum Yum</p>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-4 text-center">
            <a className="fs-1" href="#">
              Food
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="fs-1" href="#">
              Place
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="fs-1" href="#">
              People
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
