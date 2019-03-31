import React from 'react';
import styled from 'styled-components';

const EventLink = styled.a``;

const Event = (props) => {
  const { id, name, cover, start_time } = props.data;
  return (
    <EventLink href={`https://www.facebook.com/events/${id}`} target="_blank">
      <img src={cover.source} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{start_time}</p>
      </div>
    </EventLink>
  );
};

export default Event;
