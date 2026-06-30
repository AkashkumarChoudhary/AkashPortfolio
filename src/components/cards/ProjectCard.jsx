import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(10px);
  cursor: pointer;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 18px;
  gap: 12px;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(124, 92, 255, 0.4);
    box-shadow: 0 16px 50px rgba(124, 92, 255, 0.22);
  }
`;

const CardArt = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  background: linear-gradient(135deg, #1b2236 0%, #0d1117 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(59, 130, 246, 0.45) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 85% 80%,
        rgba(139, 92, 246, 0.45) 0%,
        transparent 45%
      );
  }
`;

const ArtImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
`;

const ArtTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 6px;
  padding: 4px 8px;
  z-index: 1;
`;

const ArtTitle = styled.div`
  position: relative;
  z-index: 1;
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent2};
  background: rgba(124, 92, 255, 0.12);
  border: 1px solid rgba(124, 92, 255, 0.25);
  padding: 3px 8px;
  border-radius: 6px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: "JetBrains Mono", monospace;
  color: ${({ theme }) => theme.text_secondary};
`;
const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 4px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 6px;
`;
const PrimaryLink = styled.a`
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 9px 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  transition: all 0.25s ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
`;
const GhostLink = styled.a`
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 9px 0;
  border-radius: 10px;
  border: 1px solid rgba(124, 92, 255, 0.4);
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.25s ease-in-out;
  &:hover {
    background: rgba(124, 92, 255, 0.12);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      {project.image ? (
        <ArtImage src={project.image} alt={project.title} />
      ) : (
        <CardArt>
          <ArtTag>{project.category === "ai" ? "AI / GenAI" : "Full-Stack"}</ArtTag>
          <ArtTitle>{project.title}</ArtTitle>
        </CardArt>
      )}

      <Tags>
        {project.tags?.slice(0, 4).map((tag, i) => (
          <Tag key={`tag-${i}`}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>

      <Actions>
        <PrimaryLink href={project.github} target="_blank">
          View Code
        </PrimaryLink>
        {project.webapp ? (
          <GhostLink href={project.webapp} target="_blank">
            Live Demo
          </GhostLink>
        ) : null}
      </Actions>
    </Card>
  );
};

export default ProjectCard;
