import styles from "./Subtitle.module.css";

interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <h2 className={`${styles.subtitle} ${className ?? ""}`}>{children}</h2>
  );
};

export default Subtitle;
