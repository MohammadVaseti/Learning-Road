type HelloworldProps = {
  name: string;
  color: string;
};

const HelloWorld = (props: HelloworldProps) => {
  return (
    <>
      <div>
        <h1>hello i am {props.name}</h1>
      </div>
    </>
  );
};

export default HelloWorld;
