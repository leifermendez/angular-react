import { epg } from './epg';
import * as React from 'react';

import { useEpg } from 'planby';
import { channels } from './channels';
const theme = {
  primary: {
    600: '#1a202c',
    900: '#171923',
  },
  grey: { 300: '#d1d1d1' },
  white: '#fff',
  green: {
    300: '#2c7a7b',
  },
  scrollbar: {
    border: '#ffffff',
    thumb: {
      bg: '#e1e1e1',
    },
  },
  loader: {
    teal: '#5DDADB',
    purple: '#3437A2',
    pink: '#F78EB6',
    bg: '#171923db',
  },
  gradient: {
    blue: {
      300: '#002eb3',
      600: '#002360',
      900: '#051937',
    },
  },

  text: {
    grey: {
      300: '#a0aec0',
      500: '#718096',
    },
  },

  timeline: {
    divider: {
      bg: '#718096',
    },
  },
};
const fetchChannels = async () =>
  new Promise((res) => setTimeout(() => res(channels), 400));

const fetchEpg = async () =>
  new Promise((res) => setTimeout(() => res(epg), 500));

// Import theme

export function useApp() {
  const [channels, setChannels] = React.useState([]);
  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: '2022-05-25T00:00:00',
    endDate: '2022-05-25T24:00:00',
    isBaseTimeFormat: true,
    theme,
  });

  const handleFetchResources = React.useCallback(async () => {
    setIsLoading(true);
    const epg: any = await fetchEpg();
    const channels: any = await fetchChannels();
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
