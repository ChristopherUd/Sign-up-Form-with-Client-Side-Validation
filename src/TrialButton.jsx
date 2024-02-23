import "./TrialButton.css";

function TrialButton() {
  function handleClick() {
    const element = document.getElementsByClassName("label");

    element.classList.add("label-show");
  }
  return (
    <button className="trial" onClick={handleClick}>
      CLAIM YOUR FREE TRIAL
    </button>
  );
}

export default TrialButton;
