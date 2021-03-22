import React from "react";
import Link from "./Link";

const VideoLink = (props: any) => {
  const { href } = props;
  return (
    <div>
      <Link href={`${href}/video.mp4`} />
      <Link href={`${href}/poster.jpg`} />
    </div>
  );
};

export default VideoLink;
