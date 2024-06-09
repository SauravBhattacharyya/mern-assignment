import React from "react";
import VideoInput from "../components/VideoInput";

export default {
  title: "Components/VideoInput",
  component: VideoInput,
};

const Template = (args) => <VideoInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "videoInput",
  label: "Video Input",
  sublabel: "Select a video",
};
