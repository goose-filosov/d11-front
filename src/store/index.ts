import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "./root.reducer";
import { rootSaga } from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { store };
