import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 22px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: rgba(124, 92, 255, 0.4);
    box-shadow: 0 10px 40px rgba(124, 92, 255, 0.18);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 28px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 14px 20px;
  }
`;

const SkillTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 6px;
`;
const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease-in-out;

  &:hover {
    border-color: rgba(124, 92, 255, 0.45);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 7px 11px;
  }
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  line-height: 0;
`;

const FallbackIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: "10px" }}>
          The stack I use to ship GenAI, full-stack and distributed-systems work.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => {
                    const Icon = item.icon;
                    return (
                      <SkillItem key={`skill-x-${index_x}`}>
                        {Icon ? (
                          <IconWrap style={{ color: item.color }}>
                            <Icon />
                          </IconWrap>
                        ) : (
                          <FallbackIcon>{item.name.charAt(0)}</FallbackIcon>
                        )}
                        {item.name}
                      </SkillItem>
                    );
                  })}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
