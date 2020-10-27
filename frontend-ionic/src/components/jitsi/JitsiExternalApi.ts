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

export const initializeJitsi = async (payload: IJitsi) => {
  if (!(window as any).JitsiMeetExternalAPI) {
    await loadJitsiScript();
  }

  const _jitsi = new (window as any).JitsiMeetExternalAPI(
    'live.yogastrava.com',
    payload.options
  );

  return _jitsi;
};

export interface IJitsi {
  domain?: string;
  options?: {
    roomName?: string;
    width?: string;
    height?: string;
    parentNode?: any;
    configOverwrite?: IJitsiCO;
    interfaceConfigOverwrite?: IJitsiICO;
    noSSL?: boolean;
    jwt?: string;
    onload?: any;
    invitees?: any[];
    devices?: any;
    userInfo?: IJitsiUserInfo;
  };
}

export interface IJitsiCO {
  //IJitsiConfigurationOverwrite
  startWithAudioMuted: true;
}

export interface IJitsiICO {
  //IJitsiInterfaceConfigurationOverwrite
  filmStripOnly: true;
}
export interface IJitsiUserInfo {
  email?: string;
  displayName?: string;
}
const jitsiContainerId = 'jitsi-container-id';
