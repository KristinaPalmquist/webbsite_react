import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="styles.contactContainer">
      <table className={styles.contactTable}>
        <tr>
          <td className={styles.contactHeader}>Phone</td>
          <td className={styles.contactDetails}>+46 739 500 790</td>
        </tr>
        <tr>
          <td className={styles.contactHeader}>Email</td>
          <td className={styles.contactDetails}>
            kristina.palmquist@gmail.com
          </td>
        </tr>
        <tr>
          <td className={styles.contactHeader}>LinkedIn</td>
          <td className={styles.contactDetails}>
            <a
              href="https://www.linkedin.com/in/kristinapalmquist/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              https://www.linkedin.com/in/kristinapalmquist/
            </a>
          </td>
        </tr>
        <tr>
          <td className={styles.contactHeader}>GitHub</td>
          <td className={styles.contactDetails}>
            <a
              href="https://github.com/KristinaPalmquist"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              https://github.com/KristinaPalmquist
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Contact;
