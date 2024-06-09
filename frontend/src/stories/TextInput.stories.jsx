import React from "react";
import TextInput from "../components/TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "main.title",
  label: "Title",
  sublabel: "Title",
  value: "",
  placeholder: "Enter title",
  onChange: (e) => console.log(e.target.value),
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "main.title",
  label: "Title",
  sublabel: "Title",
  value: "Initial value",
  placeholder: "Enter title",
  onChange: (e) => console.log(e.target.value),
};
