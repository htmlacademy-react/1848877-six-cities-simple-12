import Card from '../card';
import { Offers } from '../../types/offers';

type ListCardProps = {
  offers: Offers[];
  onListItemHover?: (listItemName: number | null) => void;
  cardType: 'home' | 'property';
};

const CardList = ({ offers, onListItemHover, cardType }: ListCardProps) => (
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
        onMouseEnter={() => onListItemHover?.(id)}
        cardType={cardType}
      />
    ))}
  </>
);


export default CardList;
