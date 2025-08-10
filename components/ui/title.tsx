import styles from "./title.module.css";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
  reactRef?: React.Ref<HTMLHeadingElement>;
}

const Title = ({ className, children, reactRef }: TitleProps) => {
  return (
    <h1 ref={reactRef} className={styles.title}>
      {children}
    </h1>
  );
};

export default Title;
