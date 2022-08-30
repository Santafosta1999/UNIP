module.exports = app => {
  app.get('/produtos', (req, res) => {
    res.json({ message: 'Rota de produtos' })
  });
}