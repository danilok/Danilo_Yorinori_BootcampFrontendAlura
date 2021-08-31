import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function NotFoundScreen() {
  const animation404 = 'https://assets9.lottiefiles.com/packages/lf20_kjvmebo5.json';
  return (
    <Box
      display="flex"
      flex="1"
      justifyContent="start"
      flexDirection="column"
      alignItems="center"
      width="100vw"
      height="100vh"
      paddingTop="5%"
    >
      <Lottie
        width="95vw"
        height="50vh"
        config={{ path: animation404, loop: true, autoplay: true }}
      />
      <Text
        tag="p"
        variant="title"
        color="primary.main"
        margin="0"
      >
        Página não encontrada
      </Text>
    </Box>
  );
}
