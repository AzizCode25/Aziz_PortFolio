import app from './app.js'


// app.listen(process.env.PORT, ()=>{
//     console.log(`Server listening at port ${process.env.PORT}`)
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
