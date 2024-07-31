import React from 'react';
import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import './WhatsAppButton.css'; // Estilo para o botão flutuante

const WhatsAppButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=555131346499" target="_blank" className="whatsapp-button" rel="noopener noreferrer">
      <Fab style={{ backgroundColor: '#25D366', color: '#fff' }} aria-label="whatsapp">
        <WhatsApp />
      </Fab>
    </a>
  );
}

export default WhatsAppButton;
