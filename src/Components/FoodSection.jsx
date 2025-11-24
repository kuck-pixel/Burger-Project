function FoodSection() {
  return (
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
  );
}

export default FoodSection;
