import {HStack, ListItem, Skeleton, SkeletonCircle} from "@chakra-ui/react";

const GenreSkeleton: React.FC = () => {
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
