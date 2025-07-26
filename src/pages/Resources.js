import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Resources() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#f57c00', fontWeight: 'bold' }}>Genetics Resources</Typography>
      <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
        Genetics is the science of heredity, exploring how traits and information are passed from one generation to the next. Understanding your genetic information can unlock insights into your ancestry, health, and even your future. Here are some resources to deepen your knowledge and curiosity:
        <br /><br />
        <Link href="https://www.genome.gov/genetics-glossary" target="_blank" rel="noopener" sx={{ color: '#e65100', fontWeight: 'bold' }}>Genetics Glossary</Link> — A comprehensive glossary of genetic terms from the National Human Genome Research Institute.<br />
        <Link href="https://www.yourgenome.org/facts/what-is-genome" target="_blank" rel="noopener" sx={{ color: '#e65100', fontWeight: 'bold' }}>What is a Genome?</Link> — An accessible introduction to the concept of the genome and its importance.<br />
        <Link href="https://www.nature.com/subjects/genomics" target="_blank" rel="noopener" sx={{ color: '#e65100', fontWeight: 'bold' }}>Genomics Articles (Nature)</Link> — Cutting-edge research and news in genomics from Nature.<br />
        <Link href="https://learn.genetics.utah.edu/" target="_blank" rel="noopener" sx={{ color: '#e65100', fontWeight: 'bold' }}>Learn Genetics (University of Utah)</Link> — Interactive modules and educational resources for all ages.<br />
        <Link href="https://www.ncbi.nlm.nih.gov/genome/guide/human/" target="_blank" rel="noopener" sx={{ color: '#e65100', fontWeight: 'bold' }}>NCBI Human Genome Guide</Link> — Explore the human genome with tools and databases from the National Center for Biotechnology Information.<br />
        <Link href="https://www.23andme.com/gen101/" target="_blank" rel="noopener" sx={{ color: '#e65100', fontWeight: 'bold' }}>Genetics 101 (23andMe)</Link> — Learn the basics of genetics and personal genomics.<br /><br />
        <strong>Did you know?</strong> The human genome contains over 3 billion base pairs of DNA, and every person’s sequence is unique. Advances in genomics are revolutionizing medicine, ancestry research, and our understanding of life itself.
      </Typography>
    </Box>
  );
}
