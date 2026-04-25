import logo from '../assets/logo.webp'
import {HStack, Image, Text} from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justify="space-between" padding="10px">
            <Image src={logo} boxSize="60px" borderRadius="full"/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;