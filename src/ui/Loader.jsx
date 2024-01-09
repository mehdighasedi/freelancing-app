import { ThreeDots } from "react-loader-spinner";

function Loader({ width = 52, height = 40 }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default Loader;
