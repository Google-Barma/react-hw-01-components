import React from "react";
import Profile from "./Profile";
import user from "../user.json";

console.log(user);

const { name, tag, location, avatar, stats } = user;

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
    </>
  );
}
