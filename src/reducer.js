export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBP4UVIa3RrFi8aFVeVYsnZ1xPz6XLYye4KXpLKSscbmHyhZ4FnC73-ID4JtCOQhO_mvou0cHTB1AA-vmdHJNIAc6a7Z5ReNpXgMWAYfHo0EsHOy2rBnDaDZUdt-V9IcmnIPmmBf0bbgr9tGfr4ha1mJ0GG3dIhHOGsWeu72zRsRElz",
  discover_weekly: [],
};

const reducer = (state, action) => {
  console.log("From Reducer: ", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
