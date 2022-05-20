import PropTypes from 'prop-types';

import s from './statistic.module.css';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  const className = total ? `${s.container}` : `${s.hidden}`;
  return (
    <div className={className}>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral} </p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>Positive Feedback: {positivePercentage} %</p>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
