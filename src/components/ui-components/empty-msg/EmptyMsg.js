import "./EmptyMsg.css";

const EmptyMsg = (props) => {
  console.log(props);
  return <div className="empty-data">{props.children}</div>;
};

export default EmptyMsg;
