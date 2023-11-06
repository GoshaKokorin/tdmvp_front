import React from "react";
import TextsList from "@/UI/TextsList/TextsList";
import { aboutPageData } from "@/lib/mock/aboutPageData";
import { H2SC } from "@/UI/H2SC";
import { ParagraphSC } from "@/UI/ParagraphSC";
import TitleLayout from "@/layout/TitleLayout";
import Questions from "@/components/Questions";
import { styles } from "@/styles/pages/about.styles";
import ImgPage from "@/components/ImgPage";
import Certificate from "@/components/Certificate";

const About = () => {
  return (
    <TitleLayout title="О НАС">
      <div className="padding">
        <ContainerInfoSC className="container-two">
          <H2SC sx={{ marginBottom: "16px" }} className="content-title">
            {aboutPageData.list.title}
          </H2SC>
        </ContainerInfoSC>
        <Questions />
      </div>
    </TitleLayout>
  );
};

const {
  ContainerImageSC,
  TitleSC,
  ContainerInfoSC,
  BottomImageSC,
  FigcaptionSC,
} = styles;

export default React.memo(About);
