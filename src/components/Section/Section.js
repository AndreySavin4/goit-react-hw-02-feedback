import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div>
      <h2>{title && title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
