import styles from "./CoursesList.module.css";

const CoursesList = () => {
  const coursesItems = [
    {
      name: "HTML/CSS",
      link: "/courses/htmlcss",
    },
    {
      name: "Native JavaScript",
      link: "/courses",
    },
    {
      name: "UX / UI Design",
      link: "/contact",
    },
    {
      name: "Agile Development",
      link: "/about",
    },
    {
      name: "Databases",
      link: "/about",
    },
    {
      name: "React Native",
      link: "/about",
    },
    {
      name: "Testing / TypeScript",
      link: "/about",
    },
  ];
  return (
    <ul className={styles.coursesList}>
      {coursesItems.map((item, index) => {
        return (
          <li key={index} className={styles.coursesListItem}>
            <a href={item.link} className={styles.coursesLink}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CoursesList;
