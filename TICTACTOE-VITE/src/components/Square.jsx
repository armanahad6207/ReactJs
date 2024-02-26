const Square = ({ value, children }) => {
  console.log(children);
  return (
    <>
      <div>hi this is another component {value}</div>
      <br />
    </>
  );
};
export default Square;
