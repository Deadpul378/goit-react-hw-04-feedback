import { NotifyMessage } from './Notification.styled';
import { PropTypes } from 'prop-types';
export const Notification = ({ message }) => {
  return <NotifyMessage>{message}</NotifyMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
