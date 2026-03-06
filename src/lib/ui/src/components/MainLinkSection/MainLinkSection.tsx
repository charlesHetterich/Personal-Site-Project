import { SubTitle } from "../Text/Text";
import { CustomLink, type LinkType, type LinkFlags } from "../Link/Link";
import styles from "./MainLinkSection.module.css";

export function MainLinkSection({
  title,
  color,
  content,
}: {
  title: string;
  color: string;
  content: { text: string; link: string; linkType?: LinkType; flags?: LinkFlags }[];
}) {
  return (
    <div className={styles.container}>
      <SubTitle>{title}</SubTitle>
      {content.map((obj) => (
        <CustomLink
          key={obj.text}
          href={obj.link}
          color={color}
          linkType={obj.linkType ?? "internal"}
          linkStyle="filled"
          flags={obj.flags}
        >
          {obj.text}
        </CustomLink>
      ))}
    </div>
  );
}
