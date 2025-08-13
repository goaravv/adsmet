import { useEffect } from "react";

export const ElevenLabsWidget = () => {
  useEffect(() => {
    const scriptId = "elevenlabs-convai-widget-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      s.async = true;
      s.type = "text/javascript";
      s.id = scriptId;
      document.body.appendChild(s);
    }
  }, []);

  return (
    // @ts-ignore - Custom web component provided by external script
    // eslint-disable-next-line react/no-unknown-property
    <elevenlabs-convai agent-id="agent_1401k2fdctkgf62a9p0an3ykg6vm"></elevenlabs-convai>
  );
};

export default ElevenLabsWidget;
