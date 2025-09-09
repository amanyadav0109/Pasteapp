import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/Viewpaste";
import Navbar from "./components/Navbar";
import './App.css';
 const styles = {
  pageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
};

const router = createBrowserRouter([
  {
   
    path: "/",
    element: (
      <div style={styles.pageContainer}>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div style={styles.pageContainer}>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div style={styles.pageContainer}>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/* Inline styles object */
