import styles from "./MediaLinks.module.css";

export function MediaLinks({
  content,
}: {
  content: { src: string; link: string; scale?: number }[];
}) {
  return (
    <div className={styles.container}>
      {content.map((obj, i) => (
        <a href={obj.link} key={i} className={styles.linkItem}>
          <img
            className={styles.img}
            src={obj.src}
            alt=""
            style={{
              transform: obj.scale ? `scale(${obj.scale})` : undefined,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `scale(${obj.scale ? 1.2 * obj.scale : 1.2})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `scale(${obj.scale ? obj.scale : 1})`;
            }}
          />
        </a>
      ))}
    </div>
  );
}
