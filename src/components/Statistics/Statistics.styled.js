import styled from "styled-components";

const Section = styled.section`
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 15px 0 0 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MainTitle = styled.h2`
  text-transform: uppercase;
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

  transition: transform 0.2s linear;

  :hover {
    transform: scale(1.1);
  }

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

export { Section, Wrapper, MainTitle, StatsList, StatsItem, Label };
