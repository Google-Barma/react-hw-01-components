import React from "react";
import styled from "styled-components";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import friendsList from "../data/friends.json";
import transactions from "../data/transactions.json";

const { name, tag, location, avatar, stats } = user;

const Background = styled.div`
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/webb.png");
`;

export default function App() {
  return (
    <Background>
      <Profile
        avatar={avatar}
        name={name}
        location={location}
        stats={stats}
        tag={tag}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friendsList} />

      <TransactionHistory items={transactions} />
    </Background>
  );
}
