import { LIST_VOICES, CREATE_AUDIO, LIST_UTTERANCES, ASYNC_STATUS, ASYNC_JOBS, DOWNLOAD_UTTERANCE } from '../actions/types'

let defaultState = {
  voices: [],
  audio: [],
  utterances: []
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case 'LIST_VOICES':
    return {
      ...state,
      voices: action.payload
    };
  case 'CREATE_AUDIO':
    return {
      ...state,
      audio: action.payload
    };
  case 'LIST_UTTERANCES':
    return {
      ...state,
      utterances: action.payload
    };
  case 'ASYNC_JOBS':
    return {
      ...state,
      jobs: action.payload
    };
  case 'ASYNC_STATUS':
    return {
      ...state,
      asyncStatus: action.payload
    };
  case 'DOWNLOAD_UTTERANCE':
    return {
      ...state,
      download: action.payload
    };
  default:
    return state;
 }
}