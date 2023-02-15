import React,{useState}  from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar'

import Home from './pages/Home';
import Blocks from './pages/Blocks';
import BlockDetails from "./pages/BlockDetails";
import Transaction from "./pages/Transaction";
import { AppContext } from "./components/AppContext";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/blocks",
    element: <Blocks />,
  },
  {
    path: "/blockDetails",
    element: <BlockDetails/>,
  },
  {
    path: "/transaction",
    element: <Transaction/>,
  },
  {
    path: "/user",
    element: <UserDetails/>,
  },
]);

function App() {

  const [blockNumberContext, setBlockNumberContext] = useState();

  return (
    <div className="h-full bg-[#030214]">
      <AppContext.Provider value= {{blockNumberContext, setBlockNumberContext}}>
      <Navbar/>
      <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
