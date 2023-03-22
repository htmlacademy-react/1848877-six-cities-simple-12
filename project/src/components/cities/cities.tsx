import cn from 'classnames';
import { CITIES } from './constants';

type CitiesProps = {
  currentCity: string;
};

const Cities = ({ currentCity }: CitiesProps) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => {
          const className = cn('locations__item-link tabs__item', {
            'tabs__item--active': currentCity === city,
          });
          return (
            <li className="locations__item" key={city}>
              <a className={className} href="/#">
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  </div>
);


export default Cities;
