import React from "react";
import RadioList from "../components/RadioList";

export default {
  title: "Components/RadioList",
  component: RadioList,
};

const Template = (args) => <RadioList {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "radioList",
  label: "Radio List",
  sublabel: "Select a radio input",
  options: [
    { reactKey: "kCwnIj", value: "mango", display: "Mango" },
    { reactKey: "DnqlBr", value: "apple", display: "Apple" },
    { reactKey: "H7vPfc", value: "oranges", display: "Oranges" },
  ],
  value: "",
  onChange: (value) => console.log(value),
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  id: "radioList",
  label: "Radio List",
  sublabel: "Select a radio input",
  options: [
    { reactKey: "kCwnIj", value: "mango", display: "Mango" },
    { reactKey: "DnqlBr", value: "apple", display: "Apple" },
    { reactKey: "H7vPfc", value: "oranges", display: "Oranges" },
  ],
  value: "apple",
  onChange: (value) => console.log(value),
};
