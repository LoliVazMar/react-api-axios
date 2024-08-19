const Textinput = ({ o }) => {
  const arrayCheckbox = o;
  return (
    <>
      <div className="textinput">
        {arrayCheckbox.map((o, index) => (
          <div className="textinput__content" key={index}>
            <label className="textinput__content__label" for={o.label}>
              {o.label}
            </label>
            <input
              className="textinput__content__input"
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
