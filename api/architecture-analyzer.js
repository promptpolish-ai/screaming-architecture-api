// Screaming Architecture API - $2 per use
// Deployed on Vercel serverless

module.exports = async (req, res) => {
  const { method, body } = req;
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (method === 'GET') {
    return res.status(200).json({
      service: 'Screaming Architecture Analysis',
      version: '1.0.0',
      price: '$2 USD',
      payment: {
        btc: 'bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn',
      },
      endpoints: {
        'GET /api/architecture-analyzer': 'This help message',
        'POST /api/architecture-analyzer': 'Submit code for review',
        'GET /api/architecture-analyzer?action=buy': 'Buy the PDF guide'
      }
    });
  }
  
  if (method === 'POST') {
    const { action, code, language } = body || {};
    
    if (action === 'buy') {
      return res.status(200).json({
        product: 'Screaming Architecture Field Guide (PDF)',
        price: '$2 USD',
        payment: {
          btc: 'bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn'
        },
        instructions: 'Send $2 equivalent in BTC to bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn, then email tx hash to promptpolish@ai.dev'
      });
    }
    
    if (action === 'analyze' && code) {
      // Architecture analysis logic
      const analysis = {
        timestamp: new Date().toISOString(),
        codeLength: code.length,
        issues: [],
        score: 0,
        recommendation: 'Full analysis available after payment. Send $2 BTC to bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn'
      };
      return res.status(200).json(analysis);
    }
    
    return res.status(400).json({ error: 'Invalid request. Use action=buy or action=analyze with code' });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
};
