import {createContext, FC, ReactNode, useContext, useEffect, useState,} from 'react';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducers from '../store';
import {Provider} from 'react-redux';
import {MicroFrontendContext} from '.';


const _store = configureStore({
  reducer: reducers,
});
export const ReduxContext = createContext<any>(null);

export const ReduxProvider: FC<ReactNode> = ({children}) => {
  const {microFrontends} = useContext(MicroFrontendContext);
  const [store, setStore] = useState<any>(_store);

  useEffect(() => {
    if (Object.keys(microFrontends.slices).length === 0) return;
    const _reducers = combineReducers({
      ...reducers,
      ...microFrontends.slices,
    });
    store.replaceReducer(_reducers);
  }, [microFrontends, store]);

  return (
    <ReduxContext.Provider value={{store, setStore}}>
      <Provider store={store}>{children}</Provider>
    </ReduxContext.Provider>
  );
};

export default ReduxProvider;
