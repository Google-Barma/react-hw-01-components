import React from "react";
import propTypes from "prop-types";
import {
  Section,
  Wrapper,
  MainTitle,
  StatsList,
  StatsItem,
  Label,
} from "./Statistics.styled";

export default function Statistic({ title, stats }) {
  return (
    <Section>
      <Wrapper>
        <MainTitle>{title}</MainTitle>
        <StatsList>
          {stats.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <Label>{label}</Label>
              <span>{percentage}%</span>
            </StatsItem>
          ))}
        </StatsList>
      </Wrapper>
    </Section>
  );
}

Statistic.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
