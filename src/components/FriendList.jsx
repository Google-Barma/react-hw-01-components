import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 20px;
`;
const List = styled.ul`
  width: 500px;
  margin: 0 auto;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #cbffb7;
  box-shadow: 0 0 2px 2px rgba(39, 39, 39, 0.2);

  transition: transform 0.2s linear;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  :hover {
    transform: translate(0, -10px) scale(1.03);
  }
`;
const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
  margin-right: 20px;
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin-right: 30px;
  overflow: hidden;
`;
const Name = styled.p`
  font-size: 35px;
`;

export default function FriendList({ friends }) {
  return (
    <Section>
      <List>
        {friends.map((friend) => (
          <Item key={friend.id}>
            <Status isOnline={friend.isOnline}></Status>
            <ImageWrapper>
              <a href={friend.avatar} target="_blank" rel="noreferrer">
                <img src={friend.avatar} width="100" alt={friend.name} />
              </a>
            </ImageWrapper>
            <Name>{friend.name}</Name>
          </Item>
        ))}
      </List>
    </Section>
  );
}
