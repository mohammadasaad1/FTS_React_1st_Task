export default function Button({isCancle}) {
  return (
      <button style={isCancle ?  cancelStyle : saveStyle}>{isCancle ? 'Cancle' : 'Save'}</button>
  );
}

const cancelStyle = {
  padding: "10px 40px",
  backgroundColor: "white",
  color: "#ccc",
  border: "1px solid #eee",
  borderRadius: "8px",
  fontWeight: "bold"
};

const saveStyle = {
  padding: "10px 40px",
  background: "linear-gradient(to right, #67D1FB, #7C70F9)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  boxShadow: "0 4px 8px rgba(124, 112, 249, 0.3)",
  cursor: "pointer"
};