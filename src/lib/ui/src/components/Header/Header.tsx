import { Title } from "../Text/Text";
import { CustomLink, BackButton, type LinkType } from "../Link/Link";
import styles from "./Header.module.css";

export function Header({
  title,
  links,
  color,
}: {
  title: string;
  links: { text: string; href: string; linkType?: LinkType; downloadName?: string }[];
  color: string;
}) {
  return (
    <div className={styles.container}>
      <BackButton color={color} />
      <Title>{title}</Title>
      {links.map((obj) => (
        <CustomLink
          key={obj.text}
          href={obj.href}
          color={color}
          downloadName={obj.downloadName}
          linkType={obj.linkType ?? "external"}
          linkStyle="filled"
        >
          {obj.text}
        </CustomLink>
      ))}
    </div>
  );
}
