import React from "react";

export const Message = ({ id }) => {
  return (
    <article className="message is-success">
      <div className="message-header">
        <p>Message Sent</p>
      </div>
      <div className="message-body">
        Your Message ID is <strong>{id}</strong>
      </div>
    </article>
  );
};
