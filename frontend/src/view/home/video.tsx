import * as React from "react";
import YouTube from "react-youtube";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { SectionML } from "../../mangoLy";

import {
  VideoContainerTitle,
  TextContainer,
  VideoContainer
} from "./videoStyled";
//Image
import iconCheck from "../img/video/check.svg";
import bgNormal from "../img/bgNormal.svg";
export interface VideoComponentProps {}

const IconCheck = () => <img src={iconCheck} alt="icon" />;
const VideoYoutube = () => (
  <VideoContainer>
    <YouTube videoId="CxVLsqpcioM" />
  </VideoContainer>
);

const VideoComponent: React.SFC<VideoComponentProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let video = languageConfig[language].home.video;
  const TitleSectionVideo = () => (
    <VideoContainerTitle>
      <h3>{video.title1}</h3>
      <h2>
        {video.title2}
        <span>{video.titleSpan}</span>
      </h2>
    </VideoContainerTitle>
  );
  return languageConfig[language] ? (
    <SectionML.type2
      no100vh={true}
      reverse={true}
      // bgImgM={bgNormal}
      // bgImgD={bgNormal}
      title={<TitleSectionVideo />}
      component={<VideoYoutube />}
    >
      <TextContainer>
        <h2>
          {video.title3}
          <br />
          {video.title4}
        </h2>
        <ul>
          <li>
            <IconCheck />
            <p>
              {video.li[0].text} <span> {video.li[0].text}span</span>
            </p>
          </li>
          <li>
            <IconCheck />
            <p>
              {video.li[1].text} <span> {video.li[1].text}span</span>
            </p>
          </li>
          <li>
            <IconCheck />
            <p>
              {video.li[2].text1}
              <span>{video.li[2].span1}</span>
              {video.li[2].text2}
              <span>{video.li[2].span2}</span>
            </p>
          </li>
          <li>
            <IconCheck />
            <p>
              {video.li[3].text} <span> {video.li[3].text}span</span>
            </p>
          </li>
        </ul>
      </TextContainer>
    </SectionML.type2>
  ) : null;
};

export default VideoComponent;
