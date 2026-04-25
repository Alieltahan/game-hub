import {HStack, Switch, Image, useColorMode} from "@chakra-ui/react";
import darkMode from '../assets/darkMode.webp'
import lightMode from '../assets/lightMode.webp'

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
    const isDarkMode = colorMode === 'dark'
    return (
        <HStack>
            <Switch isChecked={isDarkMode} onChange={toggleColorMode}/>
            <Image src={isDarkMode ? lightMode : darkMode} boxSize="20px"/>
        </HStack>
    );
};

export default ColorModeSwitch;