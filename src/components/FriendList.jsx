import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

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
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2%,
    rgba(203, 255, 183, 1) 64%
  );
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s linear;
  border-radius: 15px;

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
  border: 2px solid #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    })
  ),
};
