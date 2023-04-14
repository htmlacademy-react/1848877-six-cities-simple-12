import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';

export const getOffersNearbyLoading = (state: State): boolean => state[NameSpace.NearOffers].offersNearbyLoading;
