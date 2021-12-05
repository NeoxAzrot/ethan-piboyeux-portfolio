import styles from './ModalImage.module.sass';

type PropsType = {
  image: string;
  alt: string;
  display: boolean;
};

const ModalImage = (props: PropsType): JSX.Element => {
  // Props pour changer l'image en fonction
  const { image, alt, display } = props;

  return (
    <div
      className={`${styles.container} ${styles.animation__opacity} ${display ? styles.active : ''}`}
    >
      <img src={image} alt={alt} />
    </div>
  );
};

export default ModalImage;
