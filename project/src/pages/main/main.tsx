import Cities from '../../components/cities';
import MainPageContent from '../../components/main-page-content';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityChange } from '../../store/action';

const Main = () => {
  const dispatch = useAppDispatch();
  const curentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const onChangeCity = (city: string) => {
    dispatch(cityChange(city));
  };

  const currentOffers = offers.filter(
    (offer) => offer.city.name === curentCity
  );
  return (
    < main className="page__main page__main--index" >
      <h1 className="visually-hidden">Cities</h1>
      <Cities currentCity={curentCity} onChangeCity={onChangeCity} />
      <MainPageContent placesCount={currentOffers.length} currentCity={curentCity} offers={currentOffers} />
    </main >
  );
};


export default Main;
