import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/AKASHKUMARCHOUDHARY .png";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import { GitHub, LinkedIn } from "@mui/icons-material";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Eyebrow = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.accent1};
  margin-bottom: 14px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 13px;
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 64px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  font-family: "JetBrains Mono", monospace;
  color: ${({ theme }) => theme.accent2};
`;

const SubTitle = styled.div`
  font-size: 19px;
  line-height: 32px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const StatChip = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(124, 92, 255, 0.4);
  background: rgba(124, 92, 255, 0.08);
  border-radius: 8px;
  padding: 7px 12px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  text-align: center;
  padding: 15px 28px;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 8px 30px rgba(124, 92, 255, 0.35);
  border-radius: 12px;
  font-weight: 600;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(124, 92, 255, 0.5);
  }

  @media (max-width: 640px) {
    padding: 13px 22px;
    font-size: 16px;
  }
`;

const OutlineButton = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.02);
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.accent2};
    color: ${({ theme }) => theme.accent2};
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    padding: 12px 18px;
    font-size: 15px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  border-radius: 50%;
  padding: 4px;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 0 60px rgba(124, 92, 255, 0.35);
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  display: block;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.bg};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Eyebrow>{"// software engineer · genai · distributed systems"}</Eyebrow>
                <Title>
                  Hi, I am <br /> <GradientText>{Bio.name}</GradientText>
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
                <StatRow>
                  {Bio.stats?.map((stat, i) => (
                    <StatChip key={`stat-${i}`}>{stat}</StatChip>
                  ))}
                </StatRow>
              </motion.div>

              <ButtonRow>
                <ResumeButton href={Bio.resume} target="_blank">
                  Check Resume
                </ResumeButton>
                <OutlineButton href={Bio.github} target="_blank">
                  <GitHub style={{ fontSize: "18px" }} /> GitHub
                </OutlineButton>
                <OutlineButton href={Bio.linkedin} target="_blank">
                  <LinkedIn style={{ fontSize: "18px" }} /> LinkedIn
                </OutlineButton>
              </ButtonRow>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <ImgWrap>
                    <Img src={HeroImg} alt="Akash Kumar Choudhary" />
                  </ImgWrap>
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
