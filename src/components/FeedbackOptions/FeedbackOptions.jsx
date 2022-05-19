import PropTypes from 'prop-types';

import s from '../Feedback/feedback.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.btnBox}>
      <button
        type="button"
        id="good"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        id="neutral"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        id="bad"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
