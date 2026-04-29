import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import {GenresList} from "./components/genre";
import {GameGrid} from "./components/game";

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base: "1fr",
    lg: "200px 1fr"
  }}>
    <GridItem area="nav">
      <NavBar/>
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX="5px">
        <GenresList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <GameGrid/>
    </GridItem>
  </Grid>
}

export default App
