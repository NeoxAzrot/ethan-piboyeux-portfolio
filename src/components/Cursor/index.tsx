import { useState, useEffect } from 'react';
import styles from './Cursor.module.sass';

const Cursor = (): JSX.Element => {
  // On initialise le curseur en haut à droite en dehors de l'écran
  const [cursorXY, setCursorXY] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [size, setSize] = useState<number>(50);

  // Listener à chaque mouvement de la souris pour mettre à jour le curseur custom
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // On divise par 2 pour mettre la souris au milieu
      const x = e.clientX - size / 2;
      const y = e.clientY - size / 2;
      setCursorXY({ x, y });
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [size]);

  return (
    <div
      className={styles.container}
      style={{
        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        width: size,
        height: size,
      }}
    ></div>
  );
};

export default Cursor;
