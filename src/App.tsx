import React, { useState } from "react";
import Link from "./Link";
import VideoLink from "./VideoLink";
import "./App.css";
export const BASE_URL = "https://cdn.tasn.ir/hamrafigh/";

function App() {
  const [guestName, setGuestName] = useState("abedzade");
  const [backStageImagesCount, setBackStageImagesCount] = useState(10);
  const [peopleVideosCount, setPeopleVideosCount] = useState(5);
  const [guestNumber, setGustNumber] = useState(14);
  const backStageVideo = () => {
    return <VideoLink href={`backstage/${guestName}/videos/1`} />;
  };
  const backStageImages = () => {
    const images: any = [];
    for (let index = 1; index <= backStageImagesCount; index++) {
      images.push(
        <Link
          key={index}
          href={`backstage/${guestName}/images/${index}/${index}.jpg`}
        />
      );
    }
    return images;
  };
  const peopleVideos = () => {
    const videos: any = [];
    for (let index = 1; index <= peopleVideosCount; index++) {
      videos.push(
        <VideoLink key={index} href={`peoples/${guestName}/${index}`} />
      );
    }
    return videos;
  };

  const guestImage = () => {
    return <Link href={`guests/${guestName}/1.jpg`} />;
  };

  const sliderLink = () => {
    return <Link href={`slider/${guestNumber}/${guestNumber}.jpg`} />;
  };

  return (
    <div>
      <div>
        نام مهمان
        <input
          type="text"
          placeholder="enter guest name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>
      <div>
        تعداد عکس های پشت صحنه
        <input
          type="number"
          placeholder="how many back stage images you have for this guest?"
          value={backStageImagesCount}
          onChange={(e) => setBackStageImagesCount(parseInt(e.target.value))}
        />
      </div>
      <div>
        تعداد ویدئو های مردمی
        <input
          type="number"
          value={peopleVideosCount}
          onChange={(e) => setPeopleVideosCount(parseInt(e.target.value))}
        />
      </div>
      <div>
        چندمین مهمان برنامه
        <input
          type="number"
          value={guestNumber}
          onChange={(e) => setGustNumber(parseInt(e.target.value))}
        />
      </div>
      <h3> back stage video </h3>
      {backStageVideo()}
      <h3> back stage images </h3>
      {backStageImages()}
      <h3> people videos</h3>
      {peopleVideos()}
      <h3>guest image</h3>
      {guestImage()}
      <h3>slider link</h3>
      {sliderLink()}
    </div>
  );
}

export default App;
