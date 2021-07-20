import { combineReducers } from "redux";
const songReducer = () => {
  return [
    {
      title: "vanam pola",
      duration: "4.6",
    },
    {
      title: "blaster master",
      duration: "4.10",
    },
    {
      title: "kanna enga va",
      duration: "6.4",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
