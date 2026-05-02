import logo from '../assets/logo.webp'
import {HStack, Image} from '@chakra-ui/react'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
    onSearch: (searchValue: string) => void;
}

const NavBar = ({onSearch}: NavBarProps) => {
    return (
      <HStack padding="20px">
          <Image src={logo} boxSize="60px" borderRadius="full"/>
          <SearchInput onSearch={onSearch}/>
          <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;