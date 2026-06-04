module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    name: 'Screaming Architecture API',
    status: 'operational',
    documentation: '/api/architecture-analyzer',
    price: '$2 USD per analysis',
    payment: 'BTC: bc1qkt4keavsnj6ny75ccnwy2tmc4gsz7zlqxy3zwn'
  });
};
