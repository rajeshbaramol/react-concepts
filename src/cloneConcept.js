import React, { useState } from "react";
import "./styles.css";

export default function CloneConcept() {
  return (
    <div>
      <Checkbox>
        <CheckboxInput />
        <Label>Checkbox</Label>
        <LabelasFunction> || function label</LabelasFunction>
      </Checkbox>
    </div>
  );
}
const CheckboxInput = ({ children, checked, setChecked }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};
const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const all = React.Children.map(children, (child) => {
    if (typeof children === "function") {
      return null;
    }
    let clone = React.cloneElement(child, {
      checked,
      setChecked
    });
    return clone;
  });
  return all;
};
class Label extends React.Component {
  render() {
    const { children, checked, setChecked } = this.props;
    return (
      <label checked={checked} onClick={() => setChecked(!checked)}>
        {children}
      </label>
    );
  }
}

const LabelasFunction = ({ children, checked, setChecked }) => {
  return (
    <label checked={checked} onClick={() => setChecked(!checked)}>
      {children}
    </label>
  );
};
