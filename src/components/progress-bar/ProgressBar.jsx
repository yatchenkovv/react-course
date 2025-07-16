import { useProgressBar } from "./use-progress-bar";

export const ProgressBar = () => {
  const progress = useProgressBar();

  return (
    <div
      style={{
        width: progress,
        position: "fixed",
        top: 0,
        left: 0,
        height: "7px",
        backgroundColor: "rgba(22, 214, 48, 0.87)",
      }}
    />
  );
};
