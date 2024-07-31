import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const GetStart = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >, 
      <StackColumn>
        <FooterTitle text={'Endereço'} />
        <FooterLink 
        text={'São Leopoldo > Rio Grande do Sul > Brasil'} 
        />
        <FooterLink 
        text={'(51) 3134-6499'} 
        />
        <FooterLink 
        text={'info@contec.inf.br'} 
        />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Infotec'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
<Link href="https://www.instagram.com/infotec_solutionp/" target="_blank" rel="noopener noreferrer" variant="body2" 
  sx={{
    color: '#414141',
    "&:hover": {
      color: '#1c2859',
    }
  }}
>
  <InstagramIcon />  
</Link> 
<Link href="https://www.facebook.com/infotecsolutionrs" target="_blank" rel="noopener noreferrer" variant="body2" 
  sx={{
    color: '#414141',
    "&:hover": {
      color: '#1c2859',
    }
  }}
>
  <FacebookIcon />
</Link> 
<Link href="https://www.linkedin.com/company/infotecsolution-provider/" target="_blank" rel="noopener noreferrer" variant="body2" 
  sx={{
    color: '#414141',
    "&:hover": {
      color: '#1c2859',
    }
  }}
>
  <LinkedInIcon />
</Link>

        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 Infotec Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default GetStart