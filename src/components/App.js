import React from "react";
import Profile from "./Profile";
import Statistics from "./Statistics";

import user from "../user.json";
import statisticalData from "../statistical-data.json";

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

      <Statistics title="Upload stats" />
    </>
  );
}
