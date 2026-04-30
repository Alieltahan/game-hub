import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";

interface PlatformSelectorProps {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: PlatformSelectorProps): ReactElement | null => {
	const {data, error} = usePlatform();

	if (error) {
		return null;
	}
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown/>}
				borderRadius={50}
				textAlign="left">
				{selectedPlatform?.name ?? `Platform`}
			</MenuButton>
			<MenuList>
				{data?.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform)}>
						{platform.name}
					</MenuItem>))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
