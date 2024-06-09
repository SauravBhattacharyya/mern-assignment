import React from "react";
import CheckboxList from "../components/CheckboxList";

export default {
  title: "Components/CheckboxList",
  component: CheckboxList,
};

const Template = (args) => <CheckboxList {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox",
  label: "Checkbox",
  options: [
    { reactKey: "zUO0or", value: "japan", display: "Japan" },
    { reactKey: "yEwXcc", value: "germany", display: "Germany" },
    { reactKey: "0qJSKt", value: "india", display: "India" },
  ],
  values: [],
  onChange: (values) => console.log(values),
};

export const WithSelectedValues = Template.bind({});
WithSelectedValues.args = {
  id: "checkbox",
  label: "Checkbox",
  options: [
    { reactKey: "zUO0or", value: "japan", display: "Japan" },
    { reactKey: "yEwXcc", value: "germany", display: "Germany" },
    { reactKey: "0qJSKt", value: "india", display: "India" },
  ],
  values: ["japan", "germany"],
  onChange: (values) => console.log(values),
};
