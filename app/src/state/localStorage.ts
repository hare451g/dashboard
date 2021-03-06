import { Reducer } from "redux";
import {
  persistStore as _persistStore,
  persistReducer as _persistReducer,
  Persistor,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web and AsyncStorage for react-native

const blacklist: string[] = [];

export const persistReducer = (reducer: Reducer) =>
  _persistReducer(
    {
      key: "root",
      storage,
      blacklist,
      throttle: 500,
    },
    reducer
  );

/* istanbul ignore next */
export const pause = (persistor: Persistor) => {
  persistor.purge().then(() => persistor.pause());
};

export const persistStore = _persistStore;
