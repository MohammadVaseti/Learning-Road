type HelloworldProps = {
  name: string;
  color: string;
};

const HelloWorld = (props: HelloworldProps) => {
  const containerStyles: React.CSSProperties = {
    color: props.color,
    backgroundColor: "blue",
  };

  return (
    <>
      <div style={containerStyles}>
        <h1>hello i am {props.name}</h1>
      </div>
    </>
  );
};

export default HelloWorld;
