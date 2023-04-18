import { Offers } from '../../types/offers';
import ImagesOfOffers from '../images-of-offers';

const Gallery = ({ room }: { room: Offers }) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {room.images.map((img) => (<ImagesOfOffers key={img} img={img} />))}
    </div>
  </div>
);

export default Gallery;
