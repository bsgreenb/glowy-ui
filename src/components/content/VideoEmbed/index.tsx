import React from "react";
import styled from "styled-components";

type VideoEmbedProps = {
  url: string;
};

// Note: Youtube embeds have a 16:9 aspect ratio.
// Technique for fluid video iframes taken from https://css-tricks.com/fluid-width-video/#iframe-video-youtube-vimeo-etc
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// Note: this is only YouTube to begin, but could potentially be expanded to other services.
const VideoEmbed = ({ url }: VideoEmbedProps) => {
  return (
    <VideoWrapper>
      <VideoIframe
        src={url}
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </VideoWrapper>
  );
};

export default VideoEmbed;
