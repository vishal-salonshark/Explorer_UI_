import {createContext} from "react";

export const AppContext = createContext(null);

// export const AppContextProvider = ({ child }) => {

//     // const value = { blockNumberContext,
//     //                 setBlockNumberContext,}

//     return(
//         <AppContext.Provider value={value}>{child}</AppContext.Provider>
//     )
// }

export default AppContext;