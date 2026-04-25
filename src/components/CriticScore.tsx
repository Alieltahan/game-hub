import React from 'react';
import {Badge} from "@chakra-ui/react";

const CriticScore = ({score}: { score: number }) => {
    const badgeColor = score > 75 ? "green" : score > 60 ? 'yellow' : "gray";
    return (
        <Badge size="14px" borderRadius='5px' colorScheme={badgeColor}>{score}</Badge>
    );
};

export default CriticScore;