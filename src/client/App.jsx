import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Layout from "./layout/layout";
import { useEffect } from "react";
import { setToggleTheme } from "./AppSlice";

function App() {
  const toggleTheme = useSelector((state) => state.app.toggleTheme);

  const dispatch = useDispatch();

  const handleModeChange = () =>{
    dispatch(setToggleTheme())
  }

  useEffect(() => {
    if (toggleTheme) {
      document.body.style.background = "#fff";
      console.log("theme dark");
    } else {
      document.body.style.background = "#000";
      console.log("theme white");
    }
  }, [toggleTheme]);

  return (
    <main
      className={`${
        toggleTheme ? "dark" : "light"
      } bg-background text-foreground`}
    >
      <div className="w-full min-h-[100vh] ">
        <Layout />
      </div>
    </main>
  );
}

export default App;
