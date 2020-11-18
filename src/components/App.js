import React from "react";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";

import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friendsList from "../friends.json";

const { name, tag, location, avatar, stats } = user;

console.log(friendsList);

export default function App() {
  return (
    <>
      <Profile
        avatar={avatar}
        name={name}
        location={location}
        stats={stats}
        tag={tag}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friendsList} />
    </>
  );
}
