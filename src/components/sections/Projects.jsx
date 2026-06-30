import React, { useState } from "react";
import styled from "styled-components";
import { projects, Bio } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
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

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid rgba(124, 92, 255, 0.5);
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const ToggleButton = styled.div`
  padding: 10px 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(124, 92, 255, 0.15);
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.gradient};
    color: #fff;
  `}
`;
const Divider = styled.div`
  width: 1.5px;
  background: rgba(124, 92, 255, 0.5);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

const MoreButton = styled.a`
  margin-top: 40px;
  text-decoration: none;
  padding: 14px 30px;
  border-radius: 12px;
  border: 1px solid rgba(124, 92, 255, 0.5);
  background: rgba(124, 92, 255, 0.1);
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    border-color: transparent;
    color: #fff;
    transform: translateY(-2px);
  }
`;

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / GenAI" },
  { key: "fullstack", label: "Full-Stack" },
];

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const visibleProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc style={{ marginBottom: "10px" }}>
          A selection of my work — leading with GenAI, then full-stack product builds.
        </Desc>

        <ToggleButtonGroup>
          {filters.map((f, i) => (
            <React.Fragment key={f.key}>
              {i > 0 && <Divider />}
              <ToggleButton
                active={toggle === f.key}
                onClick={() => setToggle(f.key)}
              >
                {f.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </CardContainer>

        <MoreButton href={Bio.github} target="_blank">
          More on GitHub →
        </MoreButton>
      </Wrapper>
    </Container>
  );
};

export default Projects;
