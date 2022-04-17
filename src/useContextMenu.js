import { useEffect, useCallback, useState } from "react";
const useContextMenu = () => {
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const handleContectMenu = useCallback(
    (e) => {
      e.preventDefault();
      setAxis({ x: e.pageX, y: e.pageY });
      setShow(true);
    },
    [axis, show]
  );
  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);
  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContectMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContectMenu);
    };
  });
  return { axis, show };
};
export default useContextMenu;
