const Button = ({ info }) => {
  return (
    <>
      <div className="button">
        <button>{info.agreement.accept_button_text}</button>
      </div>
    </>
  );
};

export default Button;
