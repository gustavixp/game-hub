import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoadng, error } = useGenres();

    if (error) return null;

    if (isLoadng) return <Spinner />;

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={".5rem"} marginLeft={"5px"}>Genres</Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id}>
                        <HStack padding={"5px"}>
                            <Image
                                objectFit={"cover"}
                                boxSize={"32px"}
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace={"normal"}
                                textAlign={"left"}
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => onSelectGenre(genre)}
                                fontSize="lg"
                                variant={"link"}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
