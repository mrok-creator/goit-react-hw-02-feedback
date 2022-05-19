import PropTypes from 'prop-types';

import s from '../Feedback/feedback.module.css';

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

export default Statistic;
