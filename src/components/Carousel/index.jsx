import React, { useCallback, useEffect, useState } from 'react';

import { Container, Image } from './styles';

const imgs = [
  {
    url: '/images/img1.jpg',
    additionalClass: 'previous',
  },
  {
    url: '/images/img2.jpg',
    additionalClass: '',
  },
  {
    url: '/images/img3.jpg',
    additionalClass: '',
  },
  {
    url: '/images/img4.jpg',
    additionalClass: '',
  },
  {
    url: '/images/img5.jpg',
    additionalClass: '',
  },
];

function Carousel() {
  const [images, setImages] = useState(imgs);

  const changeImagesClasses = useCallback(() => {
    const newImages = [...images];
    const previousIndex = newImages.findIndex(
      (image) => image.additionalClass === 'previous'
    );
    const currentIndex = newImages.findIndex(
      (image) => image.additionalClass === 'current'
    );

    if (currentIndex < 0) {
      newImages[1].additionalClass = 'current';
      setTimeout(() => setImages(newImages), 6000);
      return;
    }

    newImages[currentIndex].additionalClass = 'previous';
    newImages[previousIndex].additionalClass = '';

    if (currentIndex === 4) {
      newImages[0].additionalClass = 'current';
    } else {
      newImages[currentIndex + 1].additionalClass = 'current';
    }

    setTimeout(() => setImages(newImages), 5000);
  }, [images]);

  useEffect(() => {
    changeImagesClasses();
  }, [changeImagesClasses]);

  return (
    <Container>
      {images.map((image, index) => (
        <Image
          key={index}
          className={image.additionalClass}
          src={image.url}
          alt=""
        />
      ))}
    </Container>
  );
}

export default Carousel;
