import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 500px;
  box-shadow: 0 0 2px 2px rgba(21, 21, 21, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div``;
const ImageWrapper = styled.div`
  overflow: hidden;

  border-radius: 50%;
`;
const ProfileImage = styled.img`
  margin: 0;
  border-style: none;
  display: block;
  max-width: 100%;
`;
const NameText = styled.p`
  font-size: 35px;
`;
const TagText = styled.p`
  font-size: 25px;
  font-style: italic;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  text-align: center;
  padding: 15px;
  background-color: #868686;

  &::not(::last-child) {
    margin-right: 2px;
  }
`;

const LocationText = styled.p``;

const Label = styled.span`
  display: block;
`;

const FollowersQuantity = styled.span``;

const ViewsQuantity = styled.span``;

const LikesQuantity = styled.span``;

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <>
      <Container>
        <Description>
          <ImageWrapper>
            <ProfileImage
              src={avatar}
              alt={name}
              className="avatar"
              width="200"
              height="200"
            />
          </ImageWrapper>

          <NameText>{name}</NameText>
          <LocationText>{location}</LocationText>
          <TagText>@{tag}</TagText>
        </Description>

        <List className="stats">
          <ListItem>
            <Label>Followers:</Label>
            <FollowersQuantity>{stats.followers}</FollowersQuantity>
          </ListItem>
          <ListItem>
            <Label>Views:</Label>
            <ViewsQuantity>{stats.views}</ViewsQuantity>
          </ListItem>
          <ListItem>
            <Label>Likes:</Label>
            <LikesQuantity>{stats.likes}</LikesQuantity>
          </ListItem>
        </List>
      </Container>
    </>
  );
}
