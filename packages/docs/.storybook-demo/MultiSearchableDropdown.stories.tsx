// Fork-only demo story: a multi + searchable Dropdown, as in the docs example.
import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { Dropdown } from "@vibe/core";

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" }
];

const meta: Meta<typeof Dropdown> = {
  title: "Demo/Dropdown",
  component: Dropdown
};

export default meta;

export const MultiSearchable: StoryObj<typeof Dropdown> = {
  render: () => (
    <div style={{ width: "420px", padding: "16px" }}>
      <Dropdown
        id="multi-searchable-dropdown"
        aria-label="Multi searchable dropdown"
        label="Label"
        placeholder="Placeholder text here"
        clearAriaLabel="Clear"
        options={options}
        multi
        searchable
      />
    </div>
  )
};
