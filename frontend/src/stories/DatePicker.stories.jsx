import React from "react";
import DatePicker from "../components/DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "datePicker",
  label: "Date Picker",
  sublabel: "Select Date",
  value: "",
  onChange: (value) => console.log(value),
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "datePicker",
  label: "Date Picker",
  sublabel: "Select Date",
  value: "2024-06-08",
  onChange: (value) => console.log(value),
};
