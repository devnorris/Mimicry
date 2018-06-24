import React from 'react';

export default function VoicesListVoice(props) {
  return <div>
    <h3>{ props.name }</h3>
    <div>{ props.description }</div>
  </div>
}