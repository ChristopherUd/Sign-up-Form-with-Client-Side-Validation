import "./InputBox.css";

function InputBox({ value, errmsg }) {
  return (
    <>
      <input className="user-input" placeholder={value}></input>
      <label className="label-show">{errmsg}</label>
    </>
  );
}

export default InputBox;
