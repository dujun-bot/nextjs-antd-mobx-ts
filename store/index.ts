import React from 'react';
import OriginData from './originData';

const stores = {
  originData: new OriginData(),
};

const storeContext = React.createContext(stores);

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
export default stores;
