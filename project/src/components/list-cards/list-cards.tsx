import Card from '../card';
import { Offers } from '../../types/offers';
import { useState } from 'react';

type ListCardProps = {
  offers: Offers[];
};

const ListCards = ({ offers }: ListCardProps) => {
  const [, setIsShown] = useState<number | null>(null);
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setIsShown(offer.id)}
          onMouseLeave={() => setIsShown(null)}
          cardType="home"
        />
      ))}
    </>
  );
};

export default ListCards;
