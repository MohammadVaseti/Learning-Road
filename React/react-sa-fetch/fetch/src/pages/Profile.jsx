import { useParams } from "react-router-dom";
import Changeprofile from "../components/Changeprofile";
import { useContext } from "react";
import { profileContext } from "../App";

const Profile = () => {
  const { username } = useContext(profileContext);

  const { name } = useParams();

  return (
    <>
      <h1>
        this is profile page of {name} - username is {username}
      </h1>

      <Changeprofile />
    </>
  );
};

export default Profile;
