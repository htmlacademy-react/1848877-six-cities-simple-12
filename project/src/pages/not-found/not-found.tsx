import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => (
  <section className = "not_found">
    <h1>404. Page not found</h1>
    <Link to="/">Вернуться на главную</Link>
  </section>
);

export default NotFound;
