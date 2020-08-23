import React from "react";
import PropTypes from "prop-types";

export const ChatMessage = ({ name, message }) => (
  <p>
    <strong>{name}</strong> <em>{message}</em>
  </p>
)

ChatMessage.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
}

export default ChatMessage;
