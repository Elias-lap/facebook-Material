import { useMemo, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, Stack, Divider } from "@mui/material";
import getDesignTokens from "styles/Mytheme";
import AppBarr from "components/AppBarr";
import Listt from "components/Listt";
import Cardd from "components/Cardd";
import RightSide from "components/RightSide";
import AddPosts from "components/AddPosts";

function App() {
  const [showList , setshowList]=useState("none")
  const changeMood = () => {
    localStorage.setItem(
      "curentMood",
      theme.palette.mode === "light" ? "dark" : "light"
    );
    settoggleModd(theme.palette.mode === "light" ? "dark" : "light");
  };

  // handel Mood
  const [mode, settoggleModd] = useState(
    localStorage.getItem("curentMood") === null
      ? "light"
      : localStorage.getItem("curentMood") === "light"
      ? "light"
      : "dark"
  );

  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBarr setshowList={setshowList} showList={showList}/>
        <Stack divider={<Divider orientation="vertical" flexItem />} direction="row" >
        <Listt
          // @ts-ignore
          changeMood={changeMood}
          mode={mode}
          showList={showList}
        />
        <Cardd/>
        <RightSide/>
        <AddPosts/>
        </Stack>
    
      </div>
    </ThemeProvider>
  );
}

export default App;
