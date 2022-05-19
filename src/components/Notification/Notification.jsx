import PropTypes from 'prop-types';

import s from './notification.module.css';

function Notification({ message }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{message}</h2>
    </div>
  );
}

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
