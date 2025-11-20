function NavLink(props) {
  return (
    <div className="col-4 text-center">
      <a href={props.href}>
        <button
          className="py-2 px-4"
          style={{
            border: "0",
            borderRadius: "0.5rem",
            fontSize: "2rem",
          }}
        >
          {props.text}
        </button>
      </a>
    </div>
  );
}
export default NavLink;
