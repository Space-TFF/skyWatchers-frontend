import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import MediaCard from "../Eclipse/SelectEventCard";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <MediaCard />
      </div>
    )
  );
};

export default Profile;