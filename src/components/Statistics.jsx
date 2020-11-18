import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const MainTitle = styled.h2`
  text-align: center;
`;

export default function Statistic() {
  return (
    <Section>
      <MainTitle>{title}</MainTitle>
    </Section>
  );
}
