import s from './notification.module.css';

function Notification({ message, total }) {
  const className = !total ? `${s.container}` : `${s.hidden}`;
  return (
    <div className={className}>
      <h2 className={s.title}>{message}</h2>
    </div>
  );
}

export default Notification;
