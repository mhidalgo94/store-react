import { RouterProvider } from "react-router-dom";
import Routers from './Routers';


function App() {
  return (
    <div className="App">
      <RouterProvider router={Routers} />
    </div>
  );
}

export default App;
