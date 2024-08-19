import Checkbox from "./Checkbox";
import Textinput from "./Textinput";
import Button from "./Button";

const Form = ({ info }) => {
  const arrayQuestions = info.agreement.forms[0].questions;
  return (
    <>
      <div className="form">
        <p>{info.agreement.forms[0].title}</p>
        {arrayQuestions.map((i, index) => (
          <div key={index}>
            {i.type === "CHECK" ? (
              <div>
                <p>{i.label}</p>
                <Checkbox o={i.options}></Checkbox>
              </div>
            ) : i.type === "TEXT" ? (
              <div>
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
