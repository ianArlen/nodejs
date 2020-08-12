const express = require('express');
const test = require('./routes/test');
//const user = require('./routes/user);
const app = express();


//get obtener un usuario
//get obtener todos los usuarios
//post guardar un usuario
//put actualizar informacion de un usuario
//delete de borrar un usuaio

app.use(express.json({extended:false}));


app.use('/pruebita',test);

app.get('/', async (req,res) => {
  res.send('Holiwi bebe')
})

app.get('/test',async (req,res) => {
  res.json({
    mensaje : 'Hola guapo',
    mensaje2: 'aver tu senos bebe'
  })
})

/*
const isNumber = (num) => {
  return (typeof num === 'number') ? true: false;
}
*/

function isNumber(num) {
    if (typeof num == 'number')    return true
    return false
}

/** usar comparacion === en vez de ==*/
function typeOperation(operator, num) {
    if (operator == 'sin')          return  Math.sin(num)
    else if (operator == 'cos')     return Math.cos(num)
    else if (operator == 'ln')      return Math.log2(num)
    else if (operator == 'tan')     return Math.tan(num)
    else if (operator == 'e')       return Math.E
    else if (operator == 'pi')      return Math.PI
    else if (operator == 'sqrt')    return Math.sqrt(num) 
    return num
}


app.post('/sumita',async (req,res) => {
  const body = req.body;
  console.log(body);
  const {numero1,numero2} = body;
  sumita = 0; 
  /**if(!numero1) {
    return res.status(400).json({error: "numero1 es requerido"});
  }
  if(!numero2) {
    return res.status(400).json({error: "numero2 es requerido"});
  }
  if(typeof numero1 !== 'number') {
    return res.status(400).json({error: "numero1 debe de ser un numero"});
  }
  if(typeof numero2 !== 'number') {
    return res.status(400).json({error: "numero2 debe de ser un numero"});
  }*/
  for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            item = req.body[key];
            if (isNumber(item))
                sumita += typeOperation(key, item) 
      /**console.log(typeof key);*/
    }
  }
  return res.status(200).json({sumita: sumita})
});

app.listen(3001, () => console.log(`app listening at http://localhost:${3001}`));