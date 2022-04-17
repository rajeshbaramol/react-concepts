import { useCallback, useEffect, useState } from "react";
import Menu from "./Menu";

const TOC = (props) => {
  const [expanded, setExpanded] = useState(false);

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props.files.expanded) setExpanded(true);
  }, []);

  return props.files.type === "node" ? (
    <div>
      <span>
        {props.files.nodes && (
          <span onClick={(e) => setExpanded(!expanded)}>
            {expanded ? (
              <i className="fa fa-solid fa-caret-down"></i>
            ) : (
              <i className="fa fa-solid fa-caret-right"></i>
            )}
          </span>
        )}
        <i className="fa fa-folder icon"></i>
        <span
          className={selected ? "selected" : ""}
          onClick={(e) => setSelected(!selected)}
        >
          {props.files.name}
        </span>
      </span>
      <div className={expanded ? "expanded" : "collapsed"}>
        {props.files.nodes &&
          props.files.nodes.map((file) => (
            <>
              <Menu files={file} />
              <TOC key={file.name} files={file} />
            </>
          ))}
      </div>
    </div>
  ) : (
    <div>
      <span>
        <i className="fa fa-file leaf"></i>
        <span
          className={selected ? "selected" : ""}
          onClick={(e) => setSelected(!selected)}
        >
          {props.files.name}
        </span>
      </span>
    </div>
  );
};
export default TOC;
