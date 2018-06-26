import axios from 'axios';
const API_KEY = process.env.REACT_APP_LYREBIRD_API_KEY;
const apiConfig = {
  headers: { Authorization: API_KEY }
}

export const listVoices = () => dispatch => {
  axios.get('https://custom.lyrebird.ai/api/v0/voices?offset=0&limit=10', apiConfig )
  .then(res => {
    dispatch({
      type: LIST_VOICES,
      payload: res.data.results
    });
  })
  .catch(error => {
    console.log("LIST VOICES error", error);
  });
}

export const createUtterance = (text, voiceId) => dispatch => {
  axios({
    method: 'post',
    url: `https://custom.lyrebird.ai/api/v0/voices/${voiceId}/generate_async`,
    apiConfig,
    data: [
      {
        text: text,
        'metadata': {
          'emotion': 'calm'
        }
      }
    ]
  )}
  .then(audio => {
    console.log("utterance crated: ", audio)// delete later
    dispatch({
      type: CREATE_UTTERANCE,
      payload: audio
    });
  })
  .catch(error => {
    console.log("CREATE UTTERANCE error", error);
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