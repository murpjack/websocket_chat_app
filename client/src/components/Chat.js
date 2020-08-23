import React, { useEffect, useState } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://localhost:3030';

export const Chat = () => {
  const [ws, setWs] = useState(new WebSocket(URL));
  const [name, setName] = useState("Jack");

  const [latest, setLatest] = useState({ timeStamp: 0 });
  const [messages, setMessages] = useState([]);

  // Append to start of messages list
  const addMessage = message => setMessages([ message, ...messages ])

  const submitMessage = message => {
    // Send message to messages list and reset input
    const timeStamp = new Date().getTime();
    ws.send(JSON.stringify({name, message, timeStamp }));
    addMessage({name, message, timeStamp});
  }

  useEffect(() => {
    addMessage(latest);
},[latest.timeStamp]);


  useEffect(() => {
    // This useEffect is called only once, so messages = [] when onMessage is called
    ws.onopen = () => console.log('connected');
    // set Latest using a hook and watch for changes
    ws.onmessage = e => setLatest(JSON.parse(e.data));
    // automatically try to reconnect on connection loss
    ws.onclose = () => { console.log('disconnected'); setWs(new WebSocket(URL))}
  }, []);


  return (
    <div>
      <label htmlFor="name">
        Name:&nbsp;
        <input
          type="text"
          id={'name'}
          placeholder={'Enter your name...'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <ChatInput
        ws={ws}
        onSubmitMessage={submitMessage}
      />
      {messages.map((m, index) =>
        <ChatMessage key={m.timeStamp} message={m.message} name={m.name}/>,
      )}
    </div>
  )

}

export default Chat
