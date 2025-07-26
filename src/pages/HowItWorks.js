import React from 'react';
import { Box, Typography } from '@mui/material';

export default function HowItWorks() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#1976d2', fontWeight: 'bold' }}>How GeneBank Works</Typography>
      <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
        1. Upload your genetic information file (FASTA, FASTQ, VCF, etc.)<br />
        2. Pay a small fee in ETH to incentivize IPFS users to pin your file<br />
        3. The IPFS hash is stored on the blockchain and linked to your wallet<br />
        4. Your data is preserved and accessible from anywhere, anytime
      </Typography>
    </Box>
  );
}
