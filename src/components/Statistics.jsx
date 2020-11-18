import React from "react";
import styled from "styled-components";

const Section = styled.section``;
const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 15px 0 0 0;
  box-shadow: 0 0 2px 2px rgba(39, 39, 39, 0.3);
`;
const MainTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;
const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  :nth-child(1) {
    background-color: #4cc6f7;
  }
  :nth-child(2) {
    background-color: #a43cf3;
  }
  :nth-child(3) {
    background-color: #e64c66;
  }
  :nth-child(4) {
    background-color: #20b8c5;
  }
  :nth-child(5) {
    background-color: #fde767;
  }
`;

const Label = styled.span`
  font-size: 24px;
  margin-bottom: 5px;
`;
const Percentage = styled.span``;

export default function Statistic({ title, stats }) {
  return (
    <Section>
      <Wrapper>
        <MainTitle>{title}</MainTitle>
        <StatsList>
          {stats.map((stat) => (
            <StatsItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatsItem>
          ))}
        </StatsList>
      </Wrapper>
    </Section>
  );
}
