import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, CircularProgress, Alert, Link } from '@mui/material';

// Placeholder for fetching user's files from backend or blockchain
const fetchUserFiles = async (wallet) => {
  // TODO: Replace with actual backend or smart contract call
  // Simulate with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          cid: 'bafybeicbpllqfrjfygcdwkz2q5prdtu4q7obmsqr2fkk5byn45rs24ypcu',
          name: 'genome1.fasta',
          date: '2025-07-20',
        },
        {
          cid: 'bafybeihdwdw2q5prdtu4q7obmsqr2fkk5byn45rs24ypcu',
          name: 'exome2.vcf',
          date: '2025-07-22',
        },
      ]);
    }, 1000);
  });
};

export default function MyFiles({ wallet }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!wallet) return;
    setLoading(true);
    fetchUserFiles(wallet)
      .then(setFiles)
      .catch(() => setError('Failed to fetch files.'))
      .finally(() => setLoading(false));
  }, [wallet]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#1976d2', fontWeight: 'bold' }}>My Uploaded Files</Typography>
      {!wallet && <Alert severity="info">Connect your wallet to view your uploaded files.</Alert>}
      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {files.length > 0 && (
        <List>
          {files.map((file) => (
            <ListItem key={file.cid} divider>
              <ListItemText
                primary={<Link href={`https://dweb.link/ipfs/${file.cid}`} target="_blank" rel="noopener">{file.name}</Link>}
                secondary={`CID: ${file.cid} | Uploaded: ${file.date}`}
              />
            </ListItem>
          ))}
        </List>
      )}
      {wallet && !loading && files.length === 0 && (
        <Alert severity="info" sx={{ mt: 2 }}>No files found for this wallet.</Alert>
      )}
    </Box>
  );
}
