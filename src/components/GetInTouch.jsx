import React from 'react';
import { Box, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import logoCliente5 from '../assets/Imagem5.png';
import logoCliente6 from '../assets/Imagem6.png';
const CustomerAvatar = ({ src, alt, sx }) => (
  <Box
    sx={{
      width: sx.width,  // Usa a largura definida no sx prop
      height: sx.height, // Usa a altura definida no sx prop
      borderRadius: '50%', // Torna o avatar redondo
      overflow: 'hidden', // Impede que a imagem exceda os limites do círculo
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <img src={src} alt={alt} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
  </Box>
);

const CustomerCarousel = () => {
  const theme = useTheme();

  const customers = [
    {
      name: 'Oxford Porcelanas S.A.',
      comment: 'Implantamos o SGR (InPulse), à 06 anos atrás, um sistema ideal para o nosso Televendas. Onde conseguimos colocar o maior número de informações, compras, históricos, as ligações ficam todas gravadas, contribuindo para o sucesso, segurança  e agilidade na operação diariamente. É ótimo também, na geração de relatórios, pois conseguimos gerar com muita rapidez e precisão.',
      avatar: logoCliente6,  // Substitua com o caminho correto se necessário
    },
    {
      name: 'Karsten S.A.',
      comment: 'O sistema é bastante completo, e as customizações efetuadas na última atualização deixou o sistema bem mais prático e versátil atendendo melhor a nossa necessidade. As configurações são práticas e ajustáveis o que nos permite fazer alterações conforme a necessidade, bem como gerar relatórios que auxiliam na gestão e no melhoramento da eficiência da operação.',
      avatar: logoCliente5,  // Substitua com o caminho correto se necessário
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, bgcolor: 'black' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {/* Seção de texto */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: theme.spacing(4) }}>
          <Typography variant="h1" component="div" gutterBottom sx={{ color: 'white', fontWeight: 'bold', fontSize: '4.7rem' }}>
            O QUE FALAM SOBRE A <span style={{color: '#496ca3'}}>INFOTEC</span>
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', fontSize: '2.2rem' }}>
            Veja o que nossos clientes têm a dizer sobre nossos serviços...
          </Typography>
        </Grid>
        {/* Seção de comentários */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            {customers.map((customer, index) => (
              <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' }}>
                <Card sx={{ width: '100%', marginTop: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <CustomerAvatar src={customer.avatar} alt={customer.name} sx={{ width: 200, height: 200, mb: 2 , }} />
                    <Typography gutterBottom variant="h5" component="div">
                      {customer.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '1.1rem', fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive' }}>
                      "{customer.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerCarousel;
