import React from 'react';
import { CssBaseline, Grid, Typography, Box } from '@mui/material';

const StatisticCard = ({ value, label }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        width: '100%', // Ocupa toda a largura disponível do Grid item
        padding: '20px',
        boxSizing: 'border-box',
        minHeight: '100px', // Altura mínima para garantir consistência
      }}>
      <Typography variant="subtitle1" style={{
          fontWeight: 400,
          textAlign: 'center',
          fontSize: 'calc(0.6rem + 0.8vw)', // Reduzindo o tamanho da fonte
        }}>
        {label}
      </Typography>
      <Typography variant="h4" component="p" style={{
          fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive',
          fontWeight: 600,
          textAlign: 'center',
          fontSize: 'calc(0.8rem + 1vw)', // Reduzindo o tamanho da fonte
        }}>
        {value}
      </Typography>
    </Box>
  );
};

const StatisticsSection = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box bgcolor="#1e4363" color="white" padding={3} style={{ 
          width: '100%',
          maxWidth: '80%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Grid container spacing={0} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={4} style={{ padding: 0, display: 'flex' }}>
            <StatisticCard value="+200" label="Projetos Implantados" />
          </Grid>
          <Grid item xs={12} sm={4} style={{ padding: 0, display: 'flex' }}>
            <StatisticCard value="+3mil" label="Pessoas Treinadas e Selecionadas" />
          </Grid>
          <Grid item xs={12} sm={4} style={{ padding: 0, display: 'flex' }}>
            <StatisticCard value="+1mil" label="Treinamentos Executados de ponta a ponta" />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default StatisticsSection;
