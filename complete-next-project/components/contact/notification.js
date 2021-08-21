import ReactDOM from "react-dom";

const Notification = (props) => {
  return ReactDOM.createPortal(
    <div>
      <h1>{props.status}</h1>
    </div>,
    document.getElementById("notification")
  );
};
export default Notification;
