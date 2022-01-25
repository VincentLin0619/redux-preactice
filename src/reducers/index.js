import { combineReducers } from "redux";

const songsReducer = () => {
  return {
    songs: [
      { title: "山海", duration: "4:23" },
      { title: "情歌", duration: "5:15" },
      { title: "醜", duration: "2:40" },
      { title: "大風吹", duration: "3:56" },
      { title: "Intro", duration: "1:30" },
    ],
    favoriteTitle: "All Star",
  };
};

const selectedSongReducer = (songSelect = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return songSelect;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
