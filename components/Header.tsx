//React
import React from 'react';

//Chakra UI Components
import { Avatar } from '@chakra-ui/avatar';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Center,
  Divider,
  Link,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { SkeletonCircle } from '@chakra-ui/skeleton';
import { Tooltip } from '@chakra-ui/tooltip';
import { ScaleFade } from '@chakra-ui/transition';

//Constant used to render the points available for purchase.
import points from '../constants/points';

//TypeScript interface
import { HeaderProps } from '../types';

/**
 * Header component used in the HomePage component, containing the user's username, as well as their current balance.
 */
export const Header: React.FC<HeaderProps> = ({
  user,
  isLoading,
  buyPoints,
}): JSX.Element => {
  return (
    <Box
      maxWidth={'100%'}
      mb={{ base: 10, '2xl': 16 }}
      borderBottomWidth={2}
      mx='auto'
      position='sticky'
      top='0'
      zIndex={3}
      bgColor='white'
      px={{ base: 0, lg: 150 }}
    >
      <Stack
        alignItems={'center'}
        direction='row'
        height='90px'
        padding={3}
        width='100%'
      >
        <Link href='/'>
          <Image
            src='/aerolab-logo.svg'
            w={7}
            _hover={{
              w: 10,
              transition: 'width .3s',
            }}
            transition='width .3s'
            m={4}
            alt={'Logo'}
          />
        </Link>
        <Spacer />
        {!isLoading ? (
          <ScaleFade in={!isLoading} initialScale={0.9}>
            <Stack direction='row'>
              <Center
                flexDirection='row'
                _hover={{
                  transform: 'translate(0, -5px)',
                  transition: 'transform .2s',
                }}
                transition='transform .3s'
              >
                <Avatar size='sm' src='/profile.svg' />
                <Text align='right' as='h4' fontSize={20} ml={7}>
                  <Link style={{ textDecoration: 'none' }} href='/transactions'>
                    {user?.name}
                  </Link>
                </Text>
              </Center>

              <Center alignSelf='center' h='20px' w={10}>
                <Divider orientation='vertical' />
              </Center>

              <ButtonGroup isAttached>
                <Button size='md'>
                  <Text mr={2} fontFamily='monospace'>
                    {user?.points}
                  </Text>
                  <Image src='/icons/coin.svg' w={5} h={5} alt='Coin' />
                </Button>

                <Tooltip label='Get more points!'>
                  <Menu isLazy={true} lazyBehavior='unmount'>
                    <MenuButton as={Button}>
                      <PlusSquareIcon h={15} w={15} />
                    </MenuButton>
                    <MenuList>
                      {points.map((point) => (
                        <MenuItem
                          key={point.id}
                          id={point.id}
                          onClick={() => buyPoints(point.amount)}
                        >
                          {point.amount} points
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Tooltip>
              </ButtonGroup>
            </Stack>
          </ScaleFade>
        ) : (
          <Stack direction='row'>
            <SkeletonCircle noOfLines={2} mr={2} w={10} />
            <SkeletonCircle noOfLines={2} mr={2} w={28} />
            <Center alignSelf='center' h='20px' w={10}>
              <Divider orientation='vertical' />
            </Center>
            <SkeletonCircle noOfLines={2} mr={2} w={28} borderRadius='md' />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};
