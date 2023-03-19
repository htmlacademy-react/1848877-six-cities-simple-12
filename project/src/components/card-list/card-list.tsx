import Card from '../card';
import { Offers } from '../../types/offers';

type ListCardProps = {
	offers: Offers[];
	onListItemHover?: (listItemName: number | null) => void;
};

const CardList = ({ offers, onListItemHover }: ListCardProps) => (
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
				onMouseLeave={() => onListItemHover?.(null)}
				cardType="home"
			/>
		))}
	</>
);


export default CardList;
