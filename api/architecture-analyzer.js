// API endpoint for architecture analysis service
// Paid: $2 via BTC/Lightning
export default async function handler(req, res) {
  const { action, code } = req.body || {};
  
  if (req.method === 'GET') {
    return res.status(200).json({
      service: 'Architecture Analysis',
      price: '$2 (BTC: bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn)',
      endpoints: {
        'POST /api/analyze': 'Submit code for architecture review',
        'GET /api/sample': 'Get sample analysis',
        'GET /api/buy': 'Payment instructions'
      }
    });
  }
  
  if (action === 'buy') {
    return res.json({
      product: 'Screaming Architecture Field Guide (PDF)',
      price: '$2 USD',
      methods: {
        btc: 'bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn',
        lightning: 'Coming soon'
      },
      instructions: 'Send $2 equivalent in BTC, email tx to promptpolish@ai.dev with your email → receive PDF'
    });
  }
  
  res.status(400).json({ error: 'Unknown action' });
}
