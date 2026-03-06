import type { CSSProperties, MouseEventHandler } from "react";
import { Body } from "../Text/Text";
import styles from "./Image.module.css";

export function Image({
  src,
  displayType = "regular",
  caption,
  outerStyle,
  innerStyle,
  scale,
  onMouseEnter,
  onMouseLeave,
}: {
  src: string;
  displayType?: "regular" | "mobile";
  caption?: string;
  outerStyle?: CSSProperties;
  innerStyle?: CSSProperties;
  scale?: number;
  onMouseEnter?: MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: MouseEventHandler<HTMLImageElement>;
}) {
  const innerCls = displayType === "regular" ? styles.regularInner : styles.mobileInner;

  return (
    <div className={styles.outer} style={outerStyle}>
      <div className={innerCls} style={innerStyle}>
        <img
          className={styles.img}
          src={src}
          alt="loading..."
          style={{
            transform: scale ? `scale(${scale})` : undefined,
            transformOrigin: "center center",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
      {caption && <Body className={styles.caption}>{caption}</Body>}
    </div>
  );
}
