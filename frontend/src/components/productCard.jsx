import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { appendCart } from '../contexts_store/reducer/cart';

const ProductCard = ({ product }) => {
  const { image, name, description, price } = product;
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(appendCart(product));
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} w="75%" h="40%" objectFit="cover" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            ${price}
          </Text>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {name}
        </Box>

        <Box>
          <Text color="gray.500" fontSize="sm">
            {description}
          </Text>
        </Box>

        <Button mt="2" colorScheme="teal" onClick={addToCart}>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
