import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar'

import Home from './pages/Home';
import Blocks from './pages/Blocks';
import BlockDetails from "./pages/BlockDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/blocks",
    element: <Blocks/>,
  },
  {
    path: "/blockDetails",
    element: <BlockDetails/>,
  },
]);

function App() {

  return (
    <div className="h-full bg-[#030214]">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
