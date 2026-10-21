import { useParams } from "react-router-dom";

const Profile = (props) => {
  const { name } = useParams();

  return (
    <>
      <h1>
        this is profile page of {name} - username is {props.username}
      </h1>
    </>
  );
};

export default Profile;
