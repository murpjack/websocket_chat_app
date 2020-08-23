import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const ChatInput = ({ onSubmitMessage }) => {
  const [ message, setMessage ] = useState("");

    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault();
          onSubmitMessage(message);
          setMessage("");
        }}
      >
        <input
          type="text"
          placeholder={'Enter message...'}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input type="submit" value={'Send'} />
      </form>
    )
}

ChatInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
}

export default ChatInput;
