import { legacy_createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from '../config/reactotron';

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;