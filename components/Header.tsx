import { Avatar } from '@chakra-ui/avatar';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Center, Divider, Link, Spacer, Stack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { SkeletonCircle } from '@chakra-ui/skeleton';
import { Tooltip } from '@chakra-ui/tooltip';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import points from '../constants/points';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  user,
  isLoading,
  buyPoints,
}): JSX.Element => {
  return (
    <Stack
      alignItems={'center'}
      direction='row'
      height='90px'
      padding={3}
      width='100%'
    >
      <Link href='/'>
        <Image src='/aerolab-logo.svg' w={7} />
      </Link>
      <Spacer />
      {!isLoading ? (
        <ScaleFade in={!isLoading} initialScale={0.9}>
          <Stack direction='row'>
            <Center flexDirection='row'>
              <Avatar
                size='sm'
                src='https://cdn.icon-icons.com/icons2/1736/PNG/512/4043240-avatar-bad-breaking-chemisrty-heisenberg_113279.png'
              />
              <Text align='right' as='h4' fontSize={20} ml={7}>
                <Link href='/transactions'>{user?.name}</Link>
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
                <Image src='/icons/coin.svg' w={5} h={5} />
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
        <SkeletonCircle noOfLines={2} mr={2} w={28} />
      )}
    </Stack>
  );
};
