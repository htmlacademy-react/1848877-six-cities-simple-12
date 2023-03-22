import Card from '../card';
import { Offers } from '../../types/offers';
import { useState } from 'react';

type ListCardProps = {
  offers: Offers[];
  onListItemHover?: (listItemName: number | null) => void;
  cardType: 'home' | 'property';
};

const CardList = ({ offers, cardType }: ListCardProps) => {
  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(
    null
  );
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
          onMouseEnter={() => setSelectedOfferId?.(id)}
          cardType={cardType}
        />
      ))}
    </>);
};


export default CardList;
