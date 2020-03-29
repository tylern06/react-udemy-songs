import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Macarena",
      duration: "3:10"
    },
    {
      title: "All Stars",
      duration: "2:15"
    },
    {
      title: "I Want it That Way",
      duration: "5:24"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
