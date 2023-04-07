import { useAppSelector } from '../../hooks';
import './error-message.css';

const ErrorMessage = () => {
  const error = useAppSelector((state) => state.reducer.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
};

export default ErrorMessage;
