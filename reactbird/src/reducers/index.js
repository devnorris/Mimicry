let defaultState = {
  voices: [],
  utterances: [],
  audio: [],
  asyncStatus: []
};

export default function(state = defaultState, action) {
 switch(action.type) {
  case 'LIST_VOICES':
    return {
      ...state,
      voices: action.payload
    };
  case 'CREATE_UTTERANCE':
    return {
      ...state,
      audio: action.payload
    };
  case 'LIST_UTTERANCES':
    return {
      ...state,
      utterances: action.payload
    };
  case 'ASYNC_STATUS':
    return {
      ...state,
      asyncStatus: action.payload
    };
  default:
    return state;
 }
}