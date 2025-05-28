import "./style.css";
export default function Button({ isCancle }) {
  return (
    <button className={isCancle ? "cancelStyle" : "saveStyle"}>
      {isCancle ? "Cancle" : "Save"}
    </button>
  );
}
