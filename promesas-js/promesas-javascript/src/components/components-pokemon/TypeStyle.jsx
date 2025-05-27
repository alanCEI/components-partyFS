const TypeStyle = ({ name }) => {
  return (
    <span className="Type">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
  );
};

export default TypeStyle;
