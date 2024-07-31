import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import StatisticsSection from './StatisticCard'; 
import imgDetail2 from '../assets/01.jpg';
import imgLogo1 from '../assets/logo_infotec.png';
import imgLogo2 from '../assets/Logo Inpulse - Negativo Horizontal Fundo Transparente.png';
import imgLogo3 from '../assets/logo.png';
import imgmokup from '../assets/mokup2.png';
import imgmokup3 from '../assets/imgmokup2.jpg';
import celular_inpulse from '../assets/celular_inpulse.png';


import logoCliente1 from '../assets/Imagem1.jpg';
import logoCliente3 from '../assets/Imagem3.png';
import logoCliente4 from '../assets/Imagem4.jpg';
import logoCliente5 from '../assets/Imagem5.png';
import logoCliente6 from '../assets/Imagem6.png';
import logoCliente7 from '../assets/exatron.jpeg';
import logoCliente8 from '../assets/Imagem8.jpg';
import logoCliente9 from '../assets/kappesberg.png';
import logoCliente10 from '../assets/xalingo.png';
import logoCliente11 from '../assets/brilia.png';
import logoCliente12 from '../assets/herc.jpeg';

const Header = () => {
    const [textToShow, setTextToShow] = useState('');
    const [index, setIndex] = useState(0);
    const theme = useTheme();
    const logos = [
        { src: logoCliente1, alt: "Cliente 1" },
        { src: logoCliente3, alt: "Cliente 3" },
        { src: logoCliente4, alt: "Cliente 4" },
        { src: logoCliente5, alt: "Cliente 5" },
        { src: logoCliente6, alt: "Cliente 6" },
        { src: logoCliente7, alt: "Cliente 7" },
        { src: logoCliente8, alt: "Cliente 8" },
        { src: logoCliente9, alt: "Cliente 9" },
        { src: logoCliente10, alt: "Cliente 10" },
        { src: logoCliente11, alt: "Cliente 11" },
        { src: logoCliente12, alt: "Cliente 12" },

        // Adicione mais logos conforme necessário
    ];

    const texts = [
        "Bem-vindo(a) à Infotec!\n\nAumente a performance da sua equipe de vendas e melhore o atendimento dos seus clientes",
        "CRM + Processos + Pessoas + Treinamentos\n\nNossas soluções e ferramentas irão te auxiliar a aumentar a venda e melhorar o contato com seus clientes.\n\n• Consultoria para implantação de um canal de vendas diretas.\n• CRM com tecnologia voltada para vendas on-line, sem a necessidade de visitas presenciais.\n• Estratégias e processos estruturados para aumentar o vínculo e diminuir a distância entre a empresa e seus clientes ou potenciais clientes.",
        `Somos <strong>pioneiros</strong> no desenvolvimento de um sistema CRM sob medida para operações de vendas em indústrias. \n\nSomos a <strong>única</strong> com consultoria especializada na implantação deste setor. \n\nNossa <strong>metodologia</strong> foi desenvolvida e aperfeiçoada <strong>em mais de 15 anos de atuação</strong>.\n\n<strong>+200</strong> Projetos Implantados\n\n<strong>+3 mil</strong> Pessoas Treinadas e Selecionadas\n\n<strong>+1 mil</strong> Treinamentos Executados de ponta a ponta`,
        "É a entrega do sistema aliado à estratégia do seu negócio!"
    ];
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        if (index < texts[0].length) {
            const interval = setInterval(() => {
                setTextToShow((prevText) => prevText + texts[0][index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 25);

            return () => clearInterval(interval);
        }
    }, [index]);

    return (
        <>

            <Box
            sx={{
                background: `linear-gradient(rgba(73, 108, 163, 0.8), rgba(73, 108, 163, 0.8)), url(${imgDetail2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '20vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme.spacing(8),
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 0,
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    width: '100%',
                    marginBottom: theme.spacing(4),
                    top: '-40px'
                }}
            >
                <img src={imgLogo1} alt="Logo 1" style={{ height: '40px', marginRight: theme.spacing(2) }} />
                <img src={imgLogo2} alt="Logo 2" style={{ height: '40px' }} />
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ position: 'relative', zIndex: 2 }}>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant='h3'
                        sx={{
                            fontWeight: 700,
                            color: '#fff',
                            mb: 2,
                            mt: { xs: 4, sm: 0 },
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
                        }}
                    >
                        Bem-vindo(a) à Infotec!
                    </Typography>
                    <Typography variant='body1' sx={{ color: '#fff', mb: 3 }}>
                        Aumente a performance da sua equipe de vendas e melhore o atendimento dos seus clientes.
                    </Typography>
                    <Typography variant='h4' sx={{ marginTop: '30px', fontWeight: 700, color: '#fff', mb: 2 }}>
                        CRM + Processos + Pessoas + Treinamentos
                    </Typography>
                    <Typography variant='body1' sx={{ color: '#fff' }}>
                        • CRM com tecnologia voltada para vendas on-line sem necessidade de visitas presenciais<br />
                        • Consultoria para implantação de um canal de vendas diretas<br />
                        • Estratégias e processos estruturados para aumentar o vínculo e diminuir a distância entre empresa e seus clientes ou potenciais clientes
                    </Typography>
                </Grid>
            </Grid>
            </Box>
            <Box
                bgcolor="#fff"
                color='#496ca3'
                minHeight='20vh'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                padding={theme.spacing(18)}
                position="relative"
                overflow="hidden"
                data-aos="fade-up"
                
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        padding: theme.spacing(4),
                        marginTop:theme.spacing(-4),
                    }
                }}
            >
                <Typography 
                    variant='h3' 
                    sx={{ 
                        marginTop:theme.spacing(-4),

                        fontWeight: 700, mb: 2,
                        [theme.breakpoints.down('sm')]: {
                            marginTop:theme.spacing(-2),
    
                        }
                        }}>
                          Quem somos  
                </Typography>
                <Typography
                    variant='h5'
                    sx={{
                        color: '#000000',
                        textAlign: 'justify',
                        zIndex: 1, whiteSpace: 'pre-line'

                    }}
                >
                    Somos<span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive', fontSize: '1.1em', fontWeight: 600 }}> pioneiros </span>no desenvolvimento de um sistema CRM sob medida para operações de vendas em indústrias. E, a<span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive', fontSize: '1.1em', fontWeight: 600 }}> única </span> com consultoria especializada na implantação deste setor. {'\n\n'}
                    Nossa<span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive', fontSize: '1.1em', fontWeight: 600 }}> metodologia </span>foi desenvolvida e aperfeiçoada <span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive', fontSize: '1.1em', fontWeight: 600 }}>em mais de 15 anos de atuação</span> . {'\n\n'}
                    </Typography>
                <StatisticsSection />
                <Typography variant='h5' sx={{ fontWeight: 700, color: '#496ca3', textAlign: 'justify', zIndex: 1, whiteSpace: 'pre-line', marginTop: '30px' }}>

                    <span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive', fontSize: '1.2em' }}>{texts[3]}</span>

                </Typography>
            </Box>

            <Box
                sx={{
                    marginTop: theme.spacing(-18), // Reduzindo espaço acima da lista
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: 'white',
                    color: 'black',
                    padding: theme.spacing(14),
                    overflow: 'hidden',
                    [theme.breakpoints.down('sm')]: {
                        padding: theme.spacing(2), // Ajustes para dispositivos móveis
                        paddingLeft: theme.spacing(1),
                        marginTop: theme.spacing(-2), // Reduzindo espaço acima da lista
                        // Menor padding à direita em dispositivos móveis
                    }
                }}
            >
                <Typography variant='h3' data-aos="fade-up" sx={{
                    fontWeight: 500,
                    mb: 4,
                    color: 'black',
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginTop: '20px'
                }}>
                    Soluções sob medida:
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '1.5rem',  // Menor tamanho de fonte em dispositivos pequenos
                        }
                    }}
                    data-aos="zoom-in"
                >
                    O In.Pulse foi criado para facilitar o atendimento e a venda aos seus clientes.
                    Sua equipe fazendo ligações diretamente do CRM com a solução integrada à telefonia.
                </Typography>

                <Grid container>
                    <Grid item xs={12} md={5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            [theme.breakpoints.down('sm')]: {
                                padding: theme.spacing(1), // Ajustes para dispositivos móveis
                                paddingLeft: theme.spacing(1), // Menor padding à direita em dispositivos móveis
                            }
                        }}
                        data-aos="fade-right"
                    >
                        <ul style={{
                            listStyleType: 'disc',
                            marginTop: theme.spacing(1), // Reduzindo espaço acima da lista
                            fontSize: '1.25rem', // Aumentando o tamanho da fonte
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem', // Um pouco menor em dispositivos móveis, mas ainda maior que o original
                            }
                        }}>
                            <li>Mais produtividade e controle para a equipe</li>
                            <li>Visão total da operação com gestão da carteira ativas de clientes</li>
                            <li>Gravação de chamadas</li>
                            <li>Informações e contatos em um único ambiente</li>
                            <li>Agenda inteligente e automática</li>
                            <li>Relatório de gestão em diversos formatos</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            backgroundImage: `url(${imgmokup})`,
                            backgroundSize: 'contain',  // Mantém a imagem inteira visível
                            backgroundRepeat: 'no-repeat',  // Evita a repetição da imagem
                            backgroundPosition: 'center',  // Centraliza a imagem no espaço disponível
                            minHeight: '400px',  // Ajuste a altura mínima conforme necessário
                            width: '100%',  // Garante que o Grid item ocupe toda a largura disponível
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                                [theme.breakpoints.down('sm')]: {
                                    marginTop: theme.spacing(-3), // Reduzindo espaço acima da lista
                                }
                            
                            // Centraliza o conteúdo verticalmente
                        }}
                        data-aos="fade-left"
                    >
                        <Typography variant='h4' data-aos="fade-left" sx={{ color: '#000000', textAlign: 'center', zIndex: 999, whiteSpace: 'pre-line', marginTop: theme.spacing(25) }}>
                        {'\n'}{'\n'} {'\n'} {'\n'}<strong>Um sistema simples e eficiente!</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box
                bgcolor="#fff"
                color='#496ca3'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                marginTop={ theme.spacing(-14)} // Reduzindo espaço acima da lista
                padding={theme.spacing(14)}
                position="relative"
                overflow="hidden"
                data-aos="fade-up"
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        padding: theme.spacing(4), 
                        marginTop: theme.spacing(1), // Reduzindo espaço acima da lista
                        // Ajustes para dispositivos móveis
                    }
                }}
                
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        width: '100%',
                        marginBottom: theme.spacing(4),
                        [theme.breakpoints.down('sm')]: {
                            padding: theme.spacing(2), // Ajustes para dispositivos móveis
                            paddingLeft: theme.spacing(1), // Menor padding à direita em dispositivos móveis
                        }
                    }}
                >
                    <img src={imgLogo3} alt="Logo 2" style={{ height: '100px', width: 'auto' }} />
                </Box>
                <Typography data-aos="zoom-in" variant='h5' sx={{ color: '#000000', textAlign: 'justify', zIndex: 1, whiteSpace: 'pre-line' }}>
                    Gerencie de forma <strong>eficiente</strong> o relacionamento com seus clientes com a <strong>integração direta</strong> com o aplicativo de mensagens instantâneas.
                    <br />                <br />


                    <strong>Centralize a sua comunicação</strong> e <strong>simplifique suas operações</strong> de vendas e atendimento - históricos, negociações com leads e clientes em um único ambiente.
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '100%',  // Garante que a imagem preencha o espaço verticalmente
                                width: '100%',
                                borderRadius: '12px',
                            }}
                            data-aos="fade-right"

                        >
                            <img src={celular_inpulse} alt="Mokup" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
                        </Box>
                        <Typography variant='h4' data-aos="zoom-int" sx={{ color: '#000000', textAlign: 'center', zIndex: 1, whiteSpace: 'pre-line' }}>
                            {'\n'}<strong>O controle na palma da mão!</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Typography data-aos="fade-left" variant='body1' sx={{ color: '#000000', textAlign: 'justify', mt: 2, whiteSpace: 'pre-line' }}>
                            <ul style={{
                                paddingLeft: theme.spacing(2), // Ajuste de espaçamento à esquerda
                                listStyleType: 'disc',
                                marginTop: theme.spacing(1), // Reduzindo espaço acima da lista
                                fontSize: '1.25rem', // Aumentando o tamanho da fonte
                                [theme.breakpoints.down('sm')]: {
                                    padding: theme.spacing(1), // Ajustes para dispositivos móveis
                                    paddingLeft: theme.spacing(1),
                                    fontSize: '1rem', // Um pouco menor em dispositivos móveis, mas ainda maior que o original
                                    // Menor padding à direita em dispositivos móveis
                                }
                            }}>
                                <li>Único número de WhatsApp</li>
                                <li>Usuários ilimitados independente do setor da empresa</li>
                                <li>Personalização do atendimento conforme o setor</li>
                                <li>Dashboard e monitoramento das conversas em tempo real</li>
                                <li>Cadastro personalizado dos clientes</li>
                                <li>Mensagens prontas</li>
                                <li>Atendimento simultâneo</li>
                            </ul>
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Box
                bgcolor="#fff"
                color='#496ca3'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                marginTop={theme.spacing(-14)}
                padding={theme.spacing(16)}
                position="relative"
                overflow="hidden"
                data-aos="fade-up"
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        padding: theme.spacing(4),
                        marginTop: theme.spacing(2), // Reduzindo espaço acima da lista
                        // Ajustes para dispositivos móveis
                    }
                }}
            >
                <Typography variant='h4' sx={{ color: '#000', textAlign: 'center', mb: 4, fontWeight: 700 }}>
                    Consultoria Especializada
                </Typography>
                <Typography data-aos="zoom-in" variant='h5' sx={{ color: '#000000', textAlign: 'justify', zIndex: 1, whiteSpace: 'pre-line', mb: 2 }}>
                    Ao longo de toda trajetória implantando operações de vendas na indústria, uma metodologia cada vez mais clara, foi se desenhando e aprimorando. Então, hoje é muito fácil descrever quais são os principais fundamentos que embasam essa metodologia:
                </Typography>
                <Typography data-aos="zoom-in" variant='h5' sx={{ color: '#000000', textAlign: 'center', zIndex: 1, whiteSpace: 'pre-line', mb: 2 }}>
                    <strong>PESSOAS – PROCESSOS - INFRAESTRUTURA</strong>
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            data-aos="fade-right"
                            variant='body1'
                            sx={{
                                color: '#000000',
                                textAlign: 'justify',
                                mt: 2, whiteSpace: 'pre-line'
                            }}>
                            <ul style={{
                                paddingLeft: theme.spacing(2), // Ajuste de espaçamento à esquerda
                                listStyleType: 'disc',
                                marginTop: theme.spacing(1), // Reduzindo espaço acima da lista
                                fontSize: '1.25rem', // Aumentando o tamanho da fonte
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '1rem',
                                    // Um pouco menor em dispositivos móveis, mas ainda maior que o original
                                }

                            }}>
                                <li>Para implantação ou reestruturação do canal de vendas (televendas ou inside sales) ou setor de atendimento</li>
                                <li>Planejamento detalhado do setor com cronograma de ações</li>
                                <li>Sugestões de metas e indicadores de performance</li>
                                <li>Gerenciamento de processo seletivo de supervisores, vendedores e atendentes</li>
                                <li>Treinamentos: supervisão, backoffice, vendedores e/ou atendentes</li>
                                <li>Implantação de Indicadores</li>
                                <li>Campanhas motivacionais mensais e sugestões de bonificações</li>
                                <li>Monitorias de qualidade</li>
                                <li>Sugestão e auxílio na montagem da infraestrutura do setor</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundImage: `url(${imgmokup3})`,
                                backgroundSize: 'contain',  
                                height: '100%',
                                minHeight: '400px',  
                                width: '100%',
                                overflow: 'hidden',  
                                borderRadius: '12px', 
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                justifyContent: 'center', 
                                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${imgmokup3}) center/cover`
                            }}
                            data-aos="fade-left"
                        >
                        

                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                bgcolor="#1e4364"
                color="#496ca3"
                minHeight="80vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={theme.spacing(4)}
                position="relative"
                overflow="hidden"
                data-aos="fade-up"
            >
                <Typography variant='h4' sx={{ fontWeight: 400, mb: 4, marginTop: '-30px', color: '#fff' }}>
                    Clientes que potencializaram seus canais de vendas:
                </Typography>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    {logos.map((logo, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: 200,
                                    height: 'auto',
                                    aspectRatio: '1 / 1',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#fff',
                                    overflow: 'hidden',
                                    p: 1,
                                }}
                            >
                                <img src={logo.src} alt={logo.alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </>
    );
};

export default Header;
