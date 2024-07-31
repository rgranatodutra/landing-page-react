import React from 'react';
import { Box, Typography } from '@mui/material';

 import logoCliente1 from 'caminho/para/logoCliente1.png';
 import logoCliente2 from 'caminho/para/logoCliente2.png';
import logoCliente3 from 'caminho/para/logoCliente3.png';

const ClientLogosBox = ({ theme }) => (
  <Box
    bgcolor="#fff"
    color="#496ca3"
    minHeight="20vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    padding={theme.spacing(8)}
    position="relative"
    overflow="hidden"
    data-aos="fade-up"
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        width: '100%',
        marginBottom: theme.spacing(4),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: theme.spacing(1),
        }}
      >
        <img src={logoCliente1 } alt="Logo Cliente 1" style={{ width: 'auto', height: '100%' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: theme.spacing(1),
        }}
      >
        <img src={ logoCliente2 } alt="Logo Cliente 2" style={{ width: 'auto', height: '100%' }} />
      </Box>

      {/* E assim por diante para os outros logos */}
    </Box>
    <Typography variant='body1' sx={{ color: '#000000', textAlign: 'justify', zIndex: 1, whiteSpace: 'pre-line' }}>
      Aqui você pode adicionar uma descrição ou algum texto relevante sobre os seus clientes ou sobre como você trabalha com eles.
    </Typography>
  </Box>
);

export default ClientLogosBox;
