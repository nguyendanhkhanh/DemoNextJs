import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./saga/rootSaga";
import { rootReducer, RootState } from "./reducer/rootReducer";
import { logger } from "redux-logger";

export interface SagaStore extends Store {
  sagaTask?: Task;
}
const sagaMiddleware = createSagaMiddleware();

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, applyMiddleware(logger, sagaMiddleware));

export const makeStore = (context: Context) => {
  const isServer = typeof window === "undefined";
  if (isServer) {

    return makeConfiguredStore(rootReducer);

  } else {

    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "nextjs",
      whitelist: ["client"], // make sure it does not clash with server keys
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer);
    store.__persistor = persistStore(store); // Nasty hack
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;

  }
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});
