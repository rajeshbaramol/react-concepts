import React from "react";
import CloneConcept from "./cloneConcept";
import { files } from "./data/files";
import "./styles.css";
import TOC from "./TOC";

export default function App() {
  return (
    <div>
      <h2>React clone concept</h2>
      <h4>
        Passing properties by cloning the element, click on checkbox or label it
        get selected
      </h4>
      <CloneConcept />
      ==================================================================
      <h2>TOC folder View</h2>
      <TOC files={files} />
    </div>
  );
}
