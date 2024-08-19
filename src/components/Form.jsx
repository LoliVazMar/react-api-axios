import Checkbox from "./Checkbox";
import Textinput from "./Textinput";
import Button from "./Button";

const Form = ({ info }) => {
  const arrayQuestions = info.agreement.forms[0].questions;
  return (
    <>
      <div className="form">
        <p className="form__title">{info.agreement.forms[0].title}</p>
        {arrayQuestions.map((i, index) => (
          <div key={index} className="form__content">
            {i.type === "CHECK" ? (
              <div className="form__content__checkbox">
                <p className="checkbox__label">{i.label}</p>
                <Checkbox o={i.options}></Checkbox>
              </div>
            ) : i.type === "TEXT" ? (
              <div className="form__content__textinput">
                <Textinput o={i.options}></Textinput>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        <Button info={info}></Button>
      </div>
    </>
  );
};

export default Form;
