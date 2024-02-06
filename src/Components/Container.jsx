import propType from "prop-types";
import { children } from "react";
import styles from "./Container.module.css";
const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
Container.propTypes = {
  children: propType.node.isRequired,
};
export default Container;
