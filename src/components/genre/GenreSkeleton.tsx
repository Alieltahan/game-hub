import {HStack, ListItem, Skeleton, SkeletonCircle} from "@chakra-ui/react";
import { ReactElement } from "react";

const GenreSkeleton: React.FC = (): ReactElement => {
    return (
        <ListItem paddingY="5px">
            <HStack>
                <SkeletonCircle size="32px" />
                <Skeleton height="16px" width="120px" borderRadius="4px" />
            </HStack>
        </ListItem>
    );
};

export default GenreSkeleton;
