const express = require('express');
const path = require('path');

const app = express();
const PORT = 8099;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'acces_utilisateur.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portail Accès démarré sur http://0.0.0.0:${PORT}`);
});
