import React, { useEffect } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Title from './Title';
import imgDetail from '../assets/02.jpg';
import imgDetail2 from '../assets/01.jpg';

const GetStarted = () => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Grid container spacing={{ xs: 2, sm: 2, md: 4 }} sx={{ py: theme.spacing(5), px: theme.spacing(2), mx: 'auto', overflowX: 'hidden' }}>
            <Grid item xs={12} sm={8} md={6} component='section' data-aos="fade-right">
                <Box component='article' sx={{ px: theme.spacing(2) }}>
                    <Title text={'CRM com WhatsApp integrado'} textAlign={'start'} />
                    <Typography variant='body1' sx={{ py: theme.spacing(1), lineHeight: 1.6, textAlign: 'justify' }}>
                        CRM web com WhatsApp integrado: Gerencie de forma eficiente o relacionamento com seus clientes, agora com a conveniência da integração direta com o WhatsApp. Centralize suas comunicações e simplifique suas operações de vendas e atendimento.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={6} data-aos="fade-left" sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={imgDetail} alt="Detalhe CRM" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: "10px" }} />
            </Grid>

            <Grid item xs={12} sm={4} md={6} data-aos="fade-right" sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={imgDetail2} alt="Detalhe CRM 2" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: "10px" }} />
            </Grid>

            <Grid item xs={12} sm={8} md={6} sx={{ order: { xs: 3, sm: 3, md: 4 } }} component='section' data-aos="fade-left">
                <Box component='article' sx={{ px: theme.spacing(2) }}>
                    <Title text={'O controle da operação na palma da mão.'} textAlign={'start'} />
                    <Typography sx={{ fontSize: '1.1rem', textAlign: 'start', lineHeight: '1.5', color: '#515151', mt: theme.spacing(1.5) }}>
                        WhatsApp Oficial com mensagens. Centralize todos seus atendimentos, históricos e negociações com leads e clientes em uma plataforma.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default GetStarted;
