import { useProgressBar } from "./use-progress-bar";
import styles from "./Progress-bar.module.css";

export const ProgressBar = () => {
  const progress = useProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{
        width: progress,
      }}
    />
  );
};
