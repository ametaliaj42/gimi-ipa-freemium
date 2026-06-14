import app from './src/index.js';
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ GIMI IPA API running on port ${PORT}`);
  console.log(`   Claude: ${process.env.ENABLE_CLAUDE === 'true' ? 'REAL' : 'MOCK'}`);
  console.log(`   Stripe: ${process.env.ENABLE_STRIPE === 'true' ? 'REAL' : 'MOCK'}`);
});
