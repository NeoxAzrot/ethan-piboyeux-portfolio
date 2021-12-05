import { useEffect, useState, createRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './CreativeCV.module.sass';
import Header from 'components/Header';
import { ReactSVG } from 'react-svg';
import Button from 'components/Button';

type StickersPositionType = {
  top: number;
  left: number;
  zIndex: number;
  isDragging: boolean;
  transformTop: number;
  transformLeft: number;
  cursor: 'grab' | 'grabbing';
  ref: React.RefObject<HTMLDivElement>;
};

const CreativeCV = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [stickers, setStickers] = useState<StickersPositionType[]>([]);

  // Il faut modifier ce chiffre si tu rajoutes des stickers
  const NUMBER_OF_STICKERS = 35;

  const MAX_TOP_PERCENT = 80;
  const MAX_LEFT_PERCENT = 80;

  // Fonction pour avoir un nombre aléatoire
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Création du tableau avec les stickers
  useEffect(() => {
    const stickersArray: StickersPositionType[] = [];
    for (let i = 0; i < NUMBER_OF_STICKERS; i++) {
      stickersArray.push({
        top: getRandomInt(5, MAX_TOP_PERCENT),
        left: getRandomInt(0, MAX_LEFT_PERCENT),
        zIndex: 1,
        isDragging: false,
        transformTop: 0,
        transformLeft: 0,
        cursor: 'grab',
        ref: createRef(),
      });
    }
    setStickers(stickersArray);
  }, []);

  // Fonction pour calculer le centre de l'élément
  const calcCenter = (element: HTMLElement) => {
    const { offsetHeight, offsetWidth, offsetTop, offsetLeft } = element;

    const center = {
      top: offsetTop + offsetHeight / 2,
      left: offsetLeft + offsetWidth / 2,
    };

    return center;
  };

  // Fonction qui s'execute quand la souris est enfoncée sur un sticker
  const handleMouseDown = (index: number) => {
    const stickersArray = [...stickers];
    // On update le z-index de tous à 1 et de ce sticker à 2
    stickersArray.map((sticker) => {
      sticker.zIndex = 1;
    });
    stickersArray[index].zIndex = 2;

    stickersArray[index].isDragging = true;
    stickersArray[index].cursor = 'grabbing';

    setStickers(stickersArray);
  };

  // Fonction qui s'execute quand la souris arrête de s'enfoncer sur un sticker
  const handleMouseUp = (index: number) => {
    const stickersArray = [...stickers];
    stickersArray[index].isDragging = false;
    stickersArray[index].cursor = 'grab';

    setStickers(stickersArray);
  };

  useEffect(() => {
    // Fonction qui s'execute quand la souris bouge sur un sticker
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (e: any) => {
      const mousePosition = {
        x: e.clientX,
        y: e.clientY,
      };

      // On récupère l'élément à dragger et on l'update
      const draggingSticker = stickers.find((sticker) => sticker.isDragging === true);

      if (draggingSticker) {
        const { top, left } = calcCenter(draggingSticker.ref.current as HTMLElement);

        const transformTop = mousePosition.y - top;
        const transformLeft = mousePosition.x - left;

        const stickersArray = [...stickers];
        stickersArray[stickersArray.indexOf(draggingSticker)].transformTop = transformTop;
        stickersArray[stickersArray.indexOf(draggingSticker)].transformLeft = transformLeft;

        setStickers(stickersArray);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [stickers]);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | CV créatif</title>
        <meta name="description" content="CV créatif d'Ethan Piboyeux." />
      </Helmet>

      <Header url="/cv-créatif" />
      <div className={styles.container}>
        {stickers.map((_, index) => (
          <div
            key={index}
            className={styles.sticker}
            onMouseDown={() => handleMouseDown(index)}
            onMouseUp={() => handleMouseUp(index)}
            ref={stickers[index].ref}
            // onMouseMove={(e) => handleMouseMove(index, e)}
            style={{
              top: `${stickers[index].top}%`,
              left: `${stickers[index].left}%`,
              zIndex: stickers[index].zIndex,
              transform: `translate(${stickers[index].transformLeft}px, ${stickers[index].transformTop}px)`,
              cursor: stickers[index].cursor,
            }}
          >
            <ReactSVG
              src={`images/stickers/sticker-${index + 1}.svg`}
              style={{
                transform: stickers[index].isDragging ? 'scale(1.1) rotate(8deg)' : '',
              }}
            />
          </div>
        ))}

        <div className={styles.button}>
          <Button url="/creative-cv-2">Page 2</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreativeCV;
