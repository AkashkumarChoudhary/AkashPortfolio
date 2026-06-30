import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
  align-items: center;
`;
const LogoCircle = styled.div`
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
    min-width: 40px;
    font-size: 12px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent2};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: "JetBrains Mono", monospace;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;
const SkillsLabel = styled.b`
  color: ${({ theme }) => theme.text_primary};
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Skill = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent2};
  background: rgba(124, 92, 255, 0.12);
  border: 1px solid rgba(124, 92, 255, 0.25);
  padding: 3px 8px;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: "13px",
            color: "#fff",
          }}
        >
          {experience?.logoText}
        </div>
      }
      iconStyle={{
        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        boxShadow: "0 0 0 4px #0d1117, 0 0 20px rgba(124,92,255,0.4)",
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(13, 17, 23, 0.85)",
        color: "#fff",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(124, 92, 255, 0.4)",
      }}
      date={experience?.date}
    >
      <Top>
        <LogoCircle>{experience?.logoText}</LogoCircle>
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      {experience?.desc && <Description>{experience.desc}</Description>}
      {experience?.skills && (
        <Skills>
          <SkillsLabel>Skills</SkillsLabel>
          <ItemWrapper>
            {experience?.skills?.map((skill, index) => (
              <Skill key={`skill-${index}`}>{skill}</Skill>
            ))}
          </ItemWrapper>
        </Skills>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
