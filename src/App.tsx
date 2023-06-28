import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            gridTemplateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"`,
                lg: `"nav nav" "aside main"`,
            }}
            gridTemplateColumns={{
                base: "1fr",
                md: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="md">
                <GridItem area="aside" padding={"1rem"}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={"1rem"}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginBottom={".5rem"}>
                        <Box marginRight={"1rem"}>
                            <PlatformSelector
                                selectedPlatform={gameQuery.platform}
                                onSelectedPlatform={(platform) =>
                                    setGameQuery({ ...gameQuery, platform })
                                }
                            />
                        </Box>
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
