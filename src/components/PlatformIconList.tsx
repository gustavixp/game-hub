import {
    FaWindows,
    FaApple,
    FaLinux,
    FaAndroid,
    FaPlaystation,
    FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        mac: FaApple,
        linux: FaLinux,
        playstation: FaPlaystation,
        android: FaAndroid,
        xbox: FaXbox,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <HStack
            display={"flex"}
            flexWrap={"wrap"}
            maxWidth={"80%"}
            marginY={2}
        >
            {platforms.map((platform) => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color={"gray.500"}
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
