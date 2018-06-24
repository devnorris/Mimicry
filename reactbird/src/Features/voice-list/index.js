import React from 'react';
import VoicesListVoice from './voices-list-voice';

export default function VoicesList(props) {
  return <div>
    {
      props.voices.map( voice =>
        <VoicesListVoice voice={voice} />)
    }
  </div>
}