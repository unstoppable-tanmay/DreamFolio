import "./flexbutton.css";

const FlexButton = () => {
  return (
    <button className="button">
      <svg
        className="button__shape"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="button__path"
          d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0 z"
        />
      </svg>
      <span className="button__content">Hello world</span>
    </button>
  );
};

export default FlexButton;
