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
  background-color: #ffed9a;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  margin-right: 20px;
`;
const Image = styled.img``;
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
            <Status>{friend.isOnline}</Status>
            <ImageWrapper>
              <Image src={friend.avatar} width="100" />
            </ImageWrapper>
            <Name>{friend.name}</Name>
          </Item>
        ))}
      </List>
    </Section>
  );
}
