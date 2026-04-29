import React from 'react';
import {Image, List, ListItem, Skeleton, Text} from "@chakra-ui/react";

const GenreSkeleton = () => {
    return (
        <List>
            <Skeleton />
            <ListItem>
                <Skeleton />
                <Image>
                    <Skeleton />
                </Image>
                <Text>
                    <Skeleton />
                </Text>

            </ListItem>
        </List>
    );
};

export default GenreSkeleton;