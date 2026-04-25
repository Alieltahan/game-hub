import {FaWindows, FaXbox, FaPlaystation, FaLinux, FaAndroid, FaOsi, FaApple} from 'react-icons/fa';
import {Platform} from "../hooks/useGames";
import {HStack, Icon, Text} from '@chakra-ui/react';
import {BsGlobe} from "react-icons/bs";
import {SiNintendo} from "react-icons/si";
import {MdPhoneIphone} from "react-icons/md";
import {IconType} from "react-icons";

interface PlatformIconListProps {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: PlatformIconListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        mac: FaApple,
        web: BsGlobe,
    }
    return (
        <HStack>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color="gray.500"/>)}
        </HStack>
    );
};

export default PlatformIconList;