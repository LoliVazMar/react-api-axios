const Textinput = ({ o }) => {
  const arrayCheckbox = o;
  return (
    <>
      <div className="textinput">
        {arrayCheckbox.map((o, index) => (
          <div key={index}>
            <label for={o.label}>{o.label}</label>
            <input
              type="text"
              id={o.label}
              minlength={o.input.min}
              maxlength={o.input.max}
            ></input>
          </div>
        ))}
      </div>
    </>
  );
};

export default Textinput;
