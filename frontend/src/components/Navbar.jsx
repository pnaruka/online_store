// Navbar.js
import React from 'react';
import { Badge, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getCart } from '../contexts_store/reducer/cart';

const Navbar = () => {
    const cart = useSelector(getCart);

  return (
    <Flex
      align="center"
      justify="space-between"
      py="4"
      px="6"
      borderBottom="1px"
      borderColor='gray.700'
    >
      <Heading as="h1" size="md">
        Store
      </Heading>
      <Flex align="center">
        <IconButton
          aria-label="Cart"
          icon={<FiShoppingCart />}
          variant="ghost"
          size="md"
          colorScheme="teal"
        />
        
        {cart.length > 0 && (
          <Badge ml="1" colorScheme="red">
            {cart.length}
          </Badge>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;