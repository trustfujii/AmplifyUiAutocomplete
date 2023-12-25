import "./styles.css";
import React from "react";
import { useState } from "react";
import {
  Autocomplete as AmplifyAutocomplete,
  HighlightMatch,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  const [value, setValue] = useState();
  const options = [
    { id: "apple", label: "apple", description: "appleText" },
    { id: "banana", label: "banana", description: "bananaText" },
    { id: "cherry", label: "cherry", description: "cherryText" },
    { id: "grape", label: "grape", description: "grapeText" },
    { id: "kiwis", label: "kiwis", description: "kiwisText" },
    { id: "lemon", label: "lemon", description: "lemonText" },
    { id: "mango", label: "mango", description: "mangoText" },
    { id: "orange", label: "orange", description: "orangeText" },
    { id: "strawberry", label: "strawberry", description: "strawberryText" },
  ];

  const optionFilter = (option, value) => {
    // filter options against description
    return option?.description?.includes(value);
  };

  const renderOptions = (option, value) => {
    return (
      <HighlightMatch style={{ width: "300px" }} query={value}>
        {option?.description}
      </HighlightMatch>
    );
  };

  return (
    <div className="App">
      <div style={{ width: "300px" }}>Amplify UI Autocomplete</div>
      <AmplifyAutocomplete
        value={value ? value.label : ""}
        width={300}
        label="Default autocomplete"
        options={options}
        optionFilter={optionFilter}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onSelect={(option) => {
          console.log(option);
          setValue(option);
        }}
        onClear={() => {
          setValue("");
        }}
        renderOption={renderOptions}
      />
    </div>
  );
}
