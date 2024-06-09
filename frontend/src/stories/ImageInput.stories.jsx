import React from "react";
import ImageInput from "../components/ImageInput";

export default {
  title: "Components/ImageInput",
  component: ImageInput,
};

const Template = (args) => <ImageInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "coverImage",
  label: "Cover Image",
  sublabel: "Select an image",
  invert: false,
};

export const Inverted = Template.bind({});
Inverted.args = {
  id: "coverImage",
  label: "Cover Image",
  sublabel: "Select an image",
  invert: true,
};
