import React, { useMemo } from 'react';



function loadComponent(scope: any, module: any) {
  return async () => {
    // @ts-ignore Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');

    const container = window[scope]; // or get the container somewhere else
    // @ts-ignore Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args: any) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement('script');

    element.src = args.url;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };
};

const Microfrontend = (props: {
  url: string;
  scope: string;
  module: string;
  props?: any;
}) => {
  const { ready, failed } = useDynamicScript({
    url: props && props.url,
  });

  if (!props) {
    return <p className="info">Not props specified</p>;
  }

  if (!ready) {
    return <p className="info">Loading dynamic script: {props.url}</p>;
  }

  if (failed) {
    return <p className="info">Failed to load dynamic script: {props.url}</p>;
  }

  const Component = React.lazy(loadComponent(props.scope, props.module));

  return (
    <React.Suspense fallback="">
      <Component {...props.props} />
    </React.Suspense>
  );
};

export default Microfrontend;