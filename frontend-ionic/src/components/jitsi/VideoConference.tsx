import React from 'react';

const VideoConference = () => {
  const jitsiContainerId = 'jitsi-container-id';
  const [jitsi, setJitsi] = React.useState({});

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise: any = null;

    const loadJitsiScriptPromise = new Promise((resolve) => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement('script');
    script.src = 'https://live.yogastrava.com/external_api.js';
    script.async = true;
    script.onload = () => resolveLoadJitsiScriptPromise(true);
    document.body.appendChild(script);

    return loadJitsiScriptPromise;
  };

  const initializeJitsi = async () => {
    if (!(window as any).JitsiMeetExternalAPI) {
      await loadJitsiScript();
    }

    const _jitsi = new (window as any).JitsiMeetExternalAPI(
      'live.yogastrava.com',
      {
        parentNode: document.getElementById(jitsiContainerId),
      }
    );

    setJitsi(_jitsi);
  };

  React.useEffect(() => {
    initializeJitsi();

    return () => (jitsi as any)?.dispose?.();
  }, []);

  return (
    <div id={jitsiContainerId} style={{ height: '100%', width: 'auto' }} />
  );
};

export default VideoConference;
