import express from 'express';
const app = express(); 

app.get("/", (req, res) => {
  res.send("Server rodando! 🚀");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});

app.get("/status", (req, res) => {
    res.json( {status: "Online", sprint: 1 } );
});

app.get("/sobre", (req, res) => {
    res.json( `mensageiro local - criado no SENAI ` );
});