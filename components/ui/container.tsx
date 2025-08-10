"use client";
import styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>{children}</div>
  );
};

export default Container;
