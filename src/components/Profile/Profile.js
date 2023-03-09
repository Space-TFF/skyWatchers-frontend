import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import MediaCard from "../Eclipse/SelectEventCard";
import './Profile.css'
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (

      isAuthenticated && (

   

<>
<div className="wrapped">
          <div className="user">
          <img src={user.picture} alt={user.name} />
          <div className="userInfo">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          </div>
          </div>
          <div className="eventDiv">
          <h2>My Events:</h2>
          <ul>
            <li>Date, Location,  Name of Event</li>
            <li>Date, Location, Name of Event</li>
          </ul>
        {/* <MediaCard /> */}
        </div>
        </div>
                <div className="profileBackground">
        </div>
        </>
      )

  );
};

export default Profile;

