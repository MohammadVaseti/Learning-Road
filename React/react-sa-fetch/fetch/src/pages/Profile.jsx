import { useParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();

  return (
    <>
      <h1>this is profile page of {name}</h1>
    </>
  );
};

export default Profile;
