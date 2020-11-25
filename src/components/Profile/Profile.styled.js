import styled from "styled-components";

const Section = styled.section`
  padding: 20px;
`;

const Container = styled.div`
  padding-top: 15px;
  margin: 0 auto;
  width: 300px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Description = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const ProfileImage = styled.img`
  margin: 0 auto;
  border-style: none;
  display: block;
  max-width: 100%;
`;
const NameTitle = styled.p`
  margin: 0 0 15px 0;
  font-size: 35px;
`;
const TagText = styled.p`
  font-size: 25px;
  margin-bottom: 15px;
`;

const LocationText = styled.p`
  font-style: oblique;
`;

const List = styled.ul`
  color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  background-color: #a3a3a3;
  width: 100px;
  height: 50px;
  cursor: pointer;

  transition: transform 0.2s linear;

  :hover {
    transform: scale(1.1);
  }

  :not(:last-child) {
    margin-right: 2px;
  }
`;

const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const Quantity = styled.span``;

export {
  Section,
  Container,
  Description,
  ImageWrapper,
  ProfileImage,
  NameTitle,
  TagText,
  LocationText,
  List,
  ListItem,
  Label,
  Quantity,
};
