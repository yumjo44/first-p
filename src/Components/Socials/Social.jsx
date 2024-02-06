import LinkImg from "..//../assets/avatar-jessica.jpeg";
import Badge from "../Badge/Badge";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.Social}>
      <div className={styles.Box}>
        <img className={styles.Img} src={LinkImg} width="40" height="40" />

        <h4>Jessica Randall</h4>

        <h6>London,United Kingdom</h6>
        <p>" Front-end devloper and avid reader"</p>
      </div>

      <div className={styles.Button}>
        <button className={styles.C}> GitHub</button>
        <button className={styles.C}> FrontendMentor</button>
        <button className={styles.C}>Linkedin</button>
        <button className={styles.C}>Twitter</button>
        <button className={styles.C}>Instagrm</button>
      </div>
    </div>
  );
};
export default Social;
