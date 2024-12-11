import React from "react";

const EventListModal = ({ events }) => {
  if (!events || events.length === 0) return null;

  return (
    <div className="event-list-modal">
      <h3>Events</h3>
      {events.map((event, index) => (
        <div key={index}>
          <p><strong>{event.eventName}</strong></p>
          <p>{event.startTime} - {event.endTime}</p>
          {event.description && <p>{event.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default EventListModal;
