import React from "react";
import PDFInput from "../components/PDFInput";

export default {
  title: "Components/PDFInput",
  component: PDFInput,
};

const Template = (args) => <PDFInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "pdf",
  label: "PDF Input",
  sublabel: "Add a PDF here",
};
