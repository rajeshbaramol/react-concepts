import useContextMenu from "./useContextMenu";

const Menu = (props) => {
  const { axis, show } = useContextMenu();
  const handleClick = (e) => {};
  return (
    <>
      {show ? (
        <ul
          className="menu"
          style={{
            top: axis.y,
            left: axis.x
          }}
        >
          <li onClick={handleClick}>new folder</li>
          <li>new file</li>
          <li>copy</li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};
export default Menu;
