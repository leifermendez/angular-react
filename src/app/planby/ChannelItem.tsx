import { ChannelBox, ChannelLogo } from "planby";
import * as React from "react";

export const ChannelItem = ({ channel }: any) => {
  const { position, logo } = channel;
  return (
    <ChannelBox {...position}>
      <ChannelLogo src={logo} alt="Logo" />
    </ChannelBox>
  );
};
