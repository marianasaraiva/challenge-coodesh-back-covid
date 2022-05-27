module.exports = (err, _req, res, _next) => {
  console.log('GERAL', err.message, err.stack);
  return res.status(500).json({ message: 'SERVER ERROR'});
};