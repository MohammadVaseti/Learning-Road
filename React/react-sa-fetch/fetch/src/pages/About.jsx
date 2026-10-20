import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  return (
    <>
      <h2>این صفحه درباره ما است</h2>;
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default About;
