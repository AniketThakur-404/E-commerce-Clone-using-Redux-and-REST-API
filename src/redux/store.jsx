import { createStoreHook } from 'react-redux';
import reducer from './reducers/index';

const store = createStoreHook(reducer,{});

export default store;