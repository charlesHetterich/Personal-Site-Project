import { Github, Gitlab, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

function FooterLink({ icon: Icon, link }: { icon: typeof Github; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <Icon size={20} />
    </a>
  );
}

export function Footer() {
  return (
    <div className={styles.container}>
      <FooterLink icon={Github} link="https://github.com/charlesHetterich" />
      <FooterLink icon={Gitlab} link="https://gitlab.com/cHetterich" />
      <FooterLink icon={Linkedin} link="https://www.linkedin.com/in/chetterich/" />
    </div>
  );
}
