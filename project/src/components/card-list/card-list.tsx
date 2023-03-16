import Card from '../card';
import { Offers } from '../../types/offers';
import { useState } from 'react';

type ListCardProps = {
  offers: Offers[];
};

const CardList = ({ offers }: ListCardProps) => {
  const [, setIsShown] = useState<number | null>(null);
  return (
    <>
      {offers.map(({ price, previewImage, title, type, isPremium, id, rating }) => (
        <Card
          key={id}
          price={price}
          previewImage={previewImage}
          title={title}
          type={type}
          isPremium={isPremium}
          id={id}
          rating={rating}
          onMouseEnter={() => setIsShown(id)}
          onMouseLeave={() => setIsShown(null)}
          cardType="home"
        />
      ))}
    </>
  );
};

export default CardList;
