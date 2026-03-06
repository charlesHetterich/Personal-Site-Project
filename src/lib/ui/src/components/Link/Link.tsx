import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./Link.module.css";

export type LinkType = "external" | "internal" | "download";
export type LinkStyle = "underline" | "filled";
export type LinkFlags = "inactive"[];

export function CustomLink({
  href,
  downloadName,
  color,
  linkType,
  linkStyle,
  flags = [],
  className,
  children,
}: {
  href: string;
  downloadName?: string;
  color: string;
  linkType: LinkType;
  linkStyle: LinkStyle;
  flags?: LinkFlags;
  className?: string;
  children: ReactNode;
}) {
  const isFilled = linkStyle === "filled";
  const isInactive = flags.includes("inactive");

  const style = isFilled
    ? {
        backgroundColor: color,
        color: isInactive ? "#ffffff44" : "var(--color-bg)",
      }
    : {
        color: color,
        borderBottomColor: "var(--color-shadow)",
      };

  const cls = `${isFilled ? styles.filled : styles.underlined} ${className ?? ""}`;

  if (linkType === "internal") {
    return (
      <RouterLink to={href} className={cls} style={style}>
        {children}
      </RouterLink>
    );
  }

  if (linkType === "download") {
    return (
      <a href={href} download={downloadName} className={cls} style={style}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
      {children}
    </a>
  );
}

export function BackButton({ color, className }: { color: string; className?: string }) {
  return (
    <div className={`${styles.backButton} ${className ?? ""}`}>
      <CustomLink href="/" color={color} linkStyle="filled" linkType="internal">
        <ArrowLeft size={16} />
      </CustomLink>
    </div>
  );
}

export function InlineLink({
  href,
  type,
  color,
  children,
}: {
  href: string;
  type: LinkType;
  color: string;
  children: ReactNode;
}) {
  return (
    <CustomLink href={href} color={color} linkStyle="underline" linkType={type}>
      {children}
    </CustomLink>
  );
}
