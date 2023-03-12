type PropertyImageProps = {
  img: string;
};

const PropertyImages = ({ img }: PropertyImageProps) => (
  <div className="property__image-wrapper">
    <img className="property__image" src={img} alt="Photo studio" />
  </div>
);

export default PropertyImages;
