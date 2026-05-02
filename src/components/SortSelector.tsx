import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import {ReactElement} from "react";

interface SortSelectorProps {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrder: string | null;
}

const orderList = [
  {
    value: '', label: 'Relevance'
  },
  {
    value: '-added', label: 'Date added'
  },
  {
    value: 'name', label: 'Name'
  },
  {
    value: '-released', label: 'Release date'
  },
  {
    value: '-metacritic', label: 'Popularity'
  },
  {
    value: '-rating', label: 'Average rating'
  },
]

const SortSelector = ({onSelectedSortOrder, sortOrder}: SortSelectorProps): ReactElement => {

  const currentSortOrder = orderList.find((order) => order.value === sortOrder)?.label ?? 'Relevance';
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown/>}
        borderRadius={50}
        textAlign="left">
        {`Order by: ` + currentSortOrder}
      </MenuButton>
      <MenuList>
        {orderList.map(({value, label}) =>
          <MenuItem
            key={value}
            value={value}
            onClick={() => onSelectedSortOrder(value)}>
            {label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;