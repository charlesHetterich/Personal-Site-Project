import type { ReactNode } from "react";
import { Body } from "../Text/Text";
import styles from "./BulletList.module.css";

const colors = ["#f58b45", "#8763ff", "#00d688", "#ff6463"];

export function BulletList({ content }: { content: ReactNode[] }) {
  return (
    <div className={styles.container}>
      {content.map((child, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div className={styles.bulletContainer} key={i}>
            <div className={styles.bullet} style={{ backgroundColor: randomColor }} />
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function BulletBody({ children }: { children: ReactNode }) {
  return <Body className={styles.bulletBody}>{children}</Body>;
}
