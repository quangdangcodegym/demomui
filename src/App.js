import React from "react";
import ThemeProvider from "./theme/index";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <DetailPage /> */}

        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
