import styled from "styled-components";

const Section = styled.section`
  padding: 20px;
`;

const Container = styled.div`
  padding-top: 15px;
  margin: 0 auto;
  width: 300px;
  box-shadow: 0 0 2px 2px rgba(39, 39, 39, 0.3);
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
  font-style: italic;
  margin-bottom: 15px;
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

const LocationText = styled.p``;

const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const FollowersQuantity = styled.span``;

const ViewsQuantity = styled.span``;

const LikesQuantity = styled.span``;

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <>
      <Section>
        <Container>
          <Description>
            <ImageWrapper>
              <ProfileImage
                src={avatar}
                alt={name}
                className="avatar"
                width="200"
              />
            </ImageWrapper>

            <NameTitle>{name}</NameTitle>
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
      </Section>
    </>
  );
}
