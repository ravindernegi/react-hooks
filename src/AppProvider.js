import React, { createContext } from 'react';
export const AppContext = createContext();
const AppProvider = ({ children }) => {
    return (<AppContext.Provider value={{ name: 'Ravinder', no: 7 }}>{children}</AppContext.Provider>)
}
export default AppProvider;