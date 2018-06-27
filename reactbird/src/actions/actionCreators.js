import { LIST_VOICES, CREATE_AUDIO, LIST_UTTERANCES, ASYNC_STATUS } from './types'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_LYREBIRD_API_KEY;
const apiConfig = {
  headers: { Authorization: API_KEY }
}

export const listVoices = () => dispatch => {
  axios.get('https://custom.lyrebird.ai/api/v0/voices?offset=0&limit=10', apiConfig )
  .then(res => {
    let voices = res.data.results;
    dispatch({
      type: LIST_VOICES,
      payload: voices
    });
  })
  .catch(error => {
    console.log("LIST VOICES error", error);
  });
}

export const createAudio = (text, voiceId) => dispatch => {
  axios({
    method: 'post',
    url: `https://custom.lyrebird.ai/api/v0/voices/${voiceId}/generate_async`,
    headers: {
      Authorization: 'Bearer ' + API_KEY
    },
    data: [
      {
        text: text,
        'metadata': {
          'emotion': 'calm'
        }
      }
    ]
  })
  .then(audio => {
    console.log("audio crated: ", audio);// delete later
    dispatch({
      type: CREATE_AUDIO,
      payload: audio
    });
  })
  .catch(error => {
    console.log("CREATE AUDIO error", error);
  });
}

export const listUtterances = () => dispatch => {
  axios.get('https://custom.lyrebird.ai/api/v0/utterances?offset=0&limit=10', apiConfig )
  .then(utterances => {
    dispatch({
      type: LIST_UTTERANCES,
      payload: utterances
    });
  })
  .catch(error => {
    console.log("LIST UTERANCES error", error);
  });
}

export const asyncStatus = (asyncJobId) => dispatch => {
  axios.get(`https://custom.lyrebird.ai/api/v0/async_jobs/${asyncJobId}`, apiConfig )
  .then(asyncStatus => {
    dispatch({
      type: ASYNC_STATUS,
      payload: asyncStatus
    });
  })
  .catch(error => {
    console.log("ASYNC STATUS error", error);
  })
}