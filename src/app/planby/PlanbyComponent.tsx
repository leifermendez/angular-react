import React from "react";
import { Epg, Layout } from "planby";

// Import hooks

// Import components
import { useApp } from "./PlanbyConfig";
import { Timeline } from "./TimeLine";
import { ChannelItem } from "./ChannelItem";
import { ProgramItem } from "./ProgramItem";

function PlanbyComponent() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div>
      <div style={{ height: "80vh", width: "100%" }}>
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default PlanbyComponent;
