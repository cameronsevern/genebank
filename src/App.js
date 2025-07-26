import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { Container, Typography, Box, Button, LinearProgress, Alert, AppBar, Toolbar, Link, Divider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import HowItWorks from './pages/HowItWorks';
import Benefits from './pages/Benefits';
import Resources from './pages/Resources';
import MyFiles from './pages/MyFiles';


function App() {
  const [file, setFile] = useState(null);
  const [wallet, setWallet] = useState('');
  const [fee, setFee] = useState('0.01'); // Example fee
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus('');
  };

  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };

  const handleConnectWallet = async () => {
    setStatus('');
    const provider = await detectEthereumProvider();
    if (provider) {
      try {
        await provider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setWalletConnected(true);
          setStatus('Wallet connected!');
        } else {
          setStatus('No accounts found.');
        }
      } catch (err) {
        setStatus('Wallet connection failed.');
      }
    } else {
      setStatus('MetaMask not detected. Please install MetaMask.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !wallet) {
      setStatus('Please select a file and connect your wallet.');
      return;
    }
    setLoading(true);
    setStatus('Uploading file and processing payment...');
    // Simulate upload/payment
    setTimeout(() => {
      setLoading(false);
      setStatus('Success! Your file will be stored on IPFS after payment confirmation.');
    }, 2000);
  };

  return (
    <Router>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', fontFamily: 'Roboto Slab, serif', mr: 3 }}>
              GeneBank
            </Typography>
            <Link component={RouterLink} to="/" sx={{ mr: 2, fontWeight: 'bold', color: '#1976d2' }}>Home</Link>
            <Link component={RouterLink} to="/my-files" sx={{ mr: 2, fontWeight: 'bold', color: '#1976d2' }}>My Files</Link>
            <Link component={RouterLink} to="/benefits" sx={{ mr: 2, fontWeight: 'bold', color: '#1976d2' }}>Benefits</Link>
            <Link component={RouterLink} to="/resources" sx={{ fontWeight: 'bold', color: '#1976d2' }}>Genetics Resources</Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            <Button
              variant="outlined"
              color={walletConnected ? 'success' : 'primary'}
              onClick={handleConnectWallet}
              disabled={walletConnected}
              sx={{ mr: 2 }}
            >
              {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </Button>
            {walletConnected && (
              <Typography variant="body2" sx={{ fontWeight: 'bold', bgcolor: '#f5f5f5', px: 2, py: 0.5, borderRadius: 1 }}>
                {wallet}
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={
            <Box sx={{ mt: 8, p: 0, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 0 }}>
              {/* Title at top center */}
              <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2, fontFamily: 'Roboto Slab, serif', textAlign: 'center' }}>
                GeneBank
              </Typography>
                <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', fontFamily: 'Roboto Slab, serif', textAlign: 'center' }}>
                  Preserve Your Genetic Information Forever
              </Typography>
              {/* Sleek upload/payment widget */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box component="form" onSubmit={handleSubmit} sx={{
                  p: 3,
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: 4,
                  minWidth: 340,
                  maxWidth: 400,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#1976d2', fontWeight: 'bold', textAlign: 'center' }}>Upload Genetic Sequence</Typography>
                  <Button variant="contained" component="label" sx={{ mb: 2, width: '100%' }}>
                    Select File
                    <input type="file" hidden onChange={handleFileChange} />
                  </Button>
                  {file && (
                    <Typography
                      sx={{
                        mb: 2,
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        cursor: 'pointer',
                        textAlign: 'center',
                      }}
                      title={file.name}
                    >
                      {file.name}
                    </Typography>
                  )}
                  <Typography sx={{ mb: 2, textAlign: 'center' }}>Fee: <strong>{fee} ETH</strong></Typography>
                  <Button type="submit" variant="contained" color="primary" sx={{ mb: 2, width: '100%' }} disabled={loading}>
                    Submit & Pay
                  </Button>
                  {loading && <LinearProgress sx={{ mb: 2, width: '100%' }} />}
                  {status && <Alert severity={status.startsWith('Success') ? 'success' : status.includes('failed') || status.includes('not detected') ? 'error' : 'info'} sx={{ mb: 2, width: '100%' }}>{status}</Alert>}
                </Box>
              </Box>
              {/* Info text sections below */}
              <Container maxWidth="md">
                <Typography variant="body1" sx={{ mb: 3, color: 'text.primary', fontSize: 18 }}>
                  GeneBank is a pioneering platform designed to safeguard your genetic information for the long term. By utilizing the InterPlanetary File System (IPFS), a distributed and peer-to-peer storage network, your genome is not stored in a single location or server, but is instead replicated and pinned by a global network of independent nodes. This approach dramatically reduces the risk of data loss due to hardware failure, natural disaster, or institutional collapse.
                  <br /><br />
                  To further ensure the permanence of your data, GeneBank leverages blockchain technology. When you upload your genetic information, the unique IPFS hash of your file is immutably recorded on the blockchain and associated with your wallet address. This public, tamper-proof record guarantees that your data can always be located and verified, regardless of changes in technology or organizations.
                  <br /><br />
                  The ETH fee you pay is used to incentivize IPFS users to pin your file, creating a robust economic incentive for long-term storage. This decentralized, incentive-driven model means your genetic information is not only secure and private, but also preserved for future generations, scientific research, and personal legacy.
                </Typography>
                <Divider sx={{ my: 3 }} />
                {/* How It Works section on main page */}
                <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 2, mb: 2 }}>
                  <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 'bold', mb: 1 }}>How GeneBank Works</Typography>
                  <Typography variant="body2" sx={{ fontSize: 16, color: '#1565c0' }}>
                    <strong>1. Upload Your Genetic Information:</strong> GeneBank supports standard formats such as FASTA, FASTQ, and VCF. Your file is encrypted and prepared for distributed storage.<br /><br />
                    <strong>2. Decentralized Storage on IPFS:</strong> Your file is uploaded to IPFS, where it is split into content-addressed blocks and distributed across a global network. The IPFS hash acts as a permanent, unique fingerprint for your data.<br /><br />
                    <strong>3. Economic Incentives for Longevity:</strong> The ETH fee you pay is used to incentivize IPFS node operators to "pin" your file, ensuring it remains available and replicated over time. This market-driven approach means your data is not dependent on any single company or server.<br /><br />
                    <strong>4. Blockchain Anchoring:</strong> The IPFS hash is recorded on the blockchain and linked to your wallet address. This creates a public, immutable record of your data’s existence and ownership, which can be verified by anyone, anytime.<br /><br />
                    <strong>5. Global Accessibility & Verification:</strong> Your genetic information can be retrieved from anywhere in the world using the IPFS hash and your wallet. The blockchain record ensures authenticity and provenance, even decades into the future.<br /><br />
                    <strong>Why This Matters:</strong> By combining distributed storage, economic incentives, and blockchain anchoring, GeneBank offers a future-proof solution for genetic data preservation. Your genome is protected against loss, censorship, and obsolescence, ensuring your legacy endures.
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 4 }}>
                  "Your genome, your legacy. Secure it for the future."
                </Typography>
              </Container>
            </Box>
          } />
          <Route path="/my-files" element={<MyFiles wallet={wallet} />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Container>
      <Box sx={{ width: '100%', py: 3, bgcolor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: '#1976d2', fontWeight: 'bold', textAlign: 'center' }}>
          Molecular Me Inc.
        </Typography>
      </Box>
    </Router>
  );
}

export default App;
