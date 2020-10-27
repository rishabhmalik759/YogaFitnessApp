import React from 'react';
import { IJitsi, initializeJitsi } from './JitsiExternalApi';

const VideoConference = () => {
  const jitsiContainerId = 'jitsi-container-id';
  const [jitsi, setJitsi] = React.useState({});

  React.useEffect(() => {
    const options: IJitsi = {
      options: {
        parentNode: document.getElementById(jitsiContainerId),
        configOverwrite: { startWithAudioMuted: true },
      },
    };
    setJitsi(initializeJitsi(options));

    return () => (jitsi as any)?.dispose?.();
  }, []);

  return (
    <div id={jitsiContainerId} style={{ height: '100%', width: 'auto' }} />
  );
};

export default VideoConference;
