import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  profile: profileReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
