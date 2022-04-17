import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>Passing properties by cloning the element</li>
        <li>click on checkbox or label it get selected</li>
      </ul>
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
