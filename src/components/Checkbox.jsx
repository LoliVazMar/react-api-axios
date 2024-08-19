const Checkbox = ({ o }) => {
  const arrayCheckbox = o;
  return (
    <>
      <div className="checkbox">
        {arrayCheckbox.map((o, index) => (
          <div key={index}>
            <input type="checkbox" id={o.label} checked={o.selected}></input>
            <label for={o.label}>{o.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
