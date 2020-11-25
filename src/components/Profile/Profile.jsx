import React from "react";
import propTypes from "prop-types";
import {
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
} from "./Profile.styled";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <>
      <Section>
        <Container>
          <Description>
            <ImageWrapper>
              <ProfileImage src={avatar} alt={name} width="200" />
            </ImageWrapper>

            <NameTitle>{name}</NameTitle>
            <LocationText>{location}</LocationText>
            <TagText>@{tag}</TagText>
          </Description>

          <List>
            <ListItem>
              <Label>Followers:</Label>
              <Quantity>{stats.followers}</Quantity>
            </ListItem>
            <ListItem>
              <Label>Views:</Label>
              <Quantity>{stats.views}</Quantity>
            </ListItem>
            <ListItem>
              <Label>Likes:</Label>
              <Quantity>{stats.likes}</Quantity>
            </ListItem>
          </List>
        </Container>
      </Section>
    </>
  );
}

Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number.isRequired),
};
