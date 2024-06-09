import React from "react";
import DropdownSingle from "../components/DropdownSingle";

export default {
  title: "Components/DropdownSingle",
  component: DropdownSingle,
};

const Template = (args) => <DropdownSingle {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "dropdown",
  label: "Dropdown",
  options: [
    { reactKey: "l2OnzF", value: "india", display: "India" },
    { reactKey: "VVpN7t", value: "japan", display: "Japan" },
    { reactKey: "FLMPvq", value: "germany", display: "Germany" },
  ],
  value: "",
  onChange: (e) => console.log(e.target.value),
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  id: "dropdown",
  label: "Dropdown",
  options: [
    { reactKey: "l2OnzF", value: "india", display: "India" },
    { reactKey: "VVpN7t", value: "japan", display: "Japan" },
    { reactKey: "FLMPvq", value: "germany", display: "Germany" },
  ],
  value: "japan",
  onChange: (e) => console.log(e.target.value),
};
