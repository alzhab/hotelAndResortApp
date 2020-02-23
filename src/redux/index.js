import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { HomeReducer } from "screens/Tabs/Home/duck";
import { PagesNavReducer } from "screens/Tabs/PagesNav/duck";
import { ProfileReducer } from "screens/Tabs/Profile/duck";
import { ReservedRoomsReducer } from "screens/Tabs/ReservedRooms/duck";
import { RoomsReducer } from "screens/Tabs/Rooms/duck";
import { RoomDetailsReducer } from "screens/RoomDetails/duck";
import { AboutusReducer } from "screens/Aboutus/duck";


const rootReducer = combineReducers({
  home: HomeReducer,
  pages: PagesNavReducer,
  profile: ProfileReducer,
  reservedRooms: ReservedRoomsReducer,
  rooms: RoomsReducer,
  roomDetails: RoomDetailsReducer,
  aboutus: AboutusReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store