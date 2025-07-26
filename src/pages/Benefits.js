import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Benefits() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#689f38', fontWeight: 'bold' }}>Benefits of Backing Up Your Genes</Typography>
      <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
        <strong>Longevity:</strong> Your genetic information is more than just data—it's a record of your biological heritage. By storing your genome on a distributed network, you ensure that your unique genetic signature is preserved for future generations, immune to the risks of hardware failure, institutional collapse, or technological obsolescence.<br /><br />
        <strong>Security:</strong> Unlike centralized databases, GeneBank leverages the power of decentralized storage. Your information is split, encrypted, and distributed across a global network, making it virtually impossible for any single entity to compromise, censor, or lose your information.<br /><br />
        <strong>Privacy:</strong> You retain full control over your genetic information. Only you possess the keys to access your information, and the blockchain record ensures that your ownership and privacy are cryptographically protected.<br /><br />
        <strong>Accessibility:</strong> Whether you are a researcher, a medical professional, or simply curious about your ancestry, your genetic information is always accessible—anywhere, anytime. The IPFS hash and blockchain record guarantee that your information can be retrieved and verified, even decades into the future.<br /><br />
        <strong>Legacy:</strong> By backing up your genes, you contribute to a new era of personal and scientific legacy. Your genome can become a resource for future research, family heritage, and medical innovation, helping to unlock the mysteries of human biology for generations to come.<br /><br />
        <strong>Resilience:</strong> GeneBank’s model is designed to withstand the test of time. By incentivizing a global network to pin and replicate your information, your genetic information is protected against natural disasters, political upheaval, and the unpredictable tides of history.<br /><br />
        <strong>Empowerment:</strong> Take charge of your biological future. With GeneBank, you are not just a passive participant in the digital age—you are an active steward of your own genetic legacy.
      </Typography>
    </Box>
  );
}
