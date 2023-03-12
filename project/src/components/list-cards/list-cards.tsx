import Card from '../card';
import { Offers } from '../../types/offers';

type ListCardProps = {
  offers: Offers[];
};

const ListCards = ({ offers }: ListCardProps) => {
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          cardType="home"
        />
      ))}
    </>
  );
};

export default ListCards;
