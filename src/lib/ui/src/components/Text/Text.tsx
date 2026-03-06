import type { ReactNode } from "react";
import styles from "./Text.module.css";

export function Title({ children, className }: { children: ReactNode; className?: string }) {
  return <h1 className={`${styles.title} ${className ?? ""}`}>{children}</h1>;
}

export function SubTitle({
  children,
  className,
  variant,
}: {
  children: ReactNode;
  className?: string;
  variant?: "h3";
}) {
  if (variant === "h3") {
    return <h3 className={`${styles.subTitleH3} ${className ?? ""}`}>{children}</h3>;
  }
  return <h2 className={`${styles.subTitle} ${className ?? ""}`}>{children}</h2>;
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`${styles.body} ${className ?? ""}`}>{children}</p>;
}

export function Whisper({ children }: { children: ReactNode }) {
  return <span className={styles.whisper}>{children}</span>;
}

export function Emoji({ symbol, label }: { symbol: string; label?: string }) {
  return (
    <span
      role="img"
      aria-label={label ?? ""}
      aria-hidden={label ? "false" : "true"}
      style={{ fontStyle: "normal" }}
    >
      {symbol}
    </span>
  );
}
