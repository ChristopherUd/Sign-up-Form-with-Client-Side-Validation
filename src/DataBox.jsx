import "./DataBox.css";
import InputBox from "./InputBox";
import TrialButton from "./TrialButton";

function DataBox() {
  return (
    <div className="data-box">
      <InputBox
        value={"First Name"}
        errmsg={"First Name cannot be empty"}
      ></InputBox>
      <InputBox
        value={"Last Name"}
        errmsg={"Last Name cannot be empty"}
      ></InputBox>
      <InputBox
        value={"Email Address"}
        errmsg={"Looks like this is not an email"}
      ></InputBox>
      <InputBox
        value={"Password"}
        errmsg={"Password cannot be empty"}
      ></InputBox>
      <TrialButton></TrialButton>
    </div>
  );
}

export default DataBox;
