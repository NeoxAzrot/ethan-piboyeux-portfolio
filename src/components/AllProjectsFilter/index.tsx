import styles from './AllProjectsFilter.module.sass';

type AllProjectsFilterType = {
  projects: ProjectFilterType[];
  filter?: string;
};

const AllProjectsFilter = (props: AllProjectsFilterType): JSX.Element => {
  // Props avec tous les projets et le filtre
  const { projects, filter = 'all-projects' } = props;

  return (
    <div className={styles.container}>
      {/* On fait une boucle sur tous les projets */}
      {projects.map((project, index) => {
        return (
          // style={{backgroundImage: `url(${project.image})`}}
          // On met la classe indiqué dans la props et on met la classe active que si le filtre considère ce projet ou si on ne filtre pas --> tous les projets
          <div
            key={index}
            className={`${project.class} ${styles.project__item} ${
              project.filter == filter ? styles.active : ''
            } ${filter == 'all-projects' ? styles.active : ''}`}
          >
            <img src={project.image} className={styles.project__image} />
            {/* <p className={styles.project__services}>{project.services}</p>
            <p className={styles.project__year}>{project.year}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default AllProjectsFilter;
