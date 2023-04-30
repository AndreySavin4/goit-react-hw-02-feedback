import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <button key={item} name={item} onClick={onLeaveFeedback}>
        {item}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
