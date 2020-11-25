import React from "react";

import propTypes from "prop-types";
import {
  Section,
  List,
  Item,
  Status,
  ImageWrapper,
  Name,
} from "./FriendList.styled";

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
