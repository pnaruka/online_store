// Product.js
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Product = ({ product }) => {
    const { name, price, image } = product;

    return (
        <Box borderWidth="1px" borderRadius="lg" p="4">
            <Image src={image} alt={name} w="20%" h="50%" objectFit="cover" />
            <Text fontWeight="semibold">{name}</Text>
            <Text>${price}</Text>
        </Box>
    );
};

export default Product;