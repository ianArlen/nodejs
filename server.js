const express = require('express');
const test = require('./routes/test');
const bodyParser = require('body-parser');
//const user = require('./routes/user);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({extended:false}));


let usuario = {
  name:'',
  password: ''
 };

 let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };
//get obtener un usuario
//get obtener todos los usuarios
//post guardar un usuario
//put actualizar informacion de un usuario
//delete de borrar un usuaio

app.use('/pruebita',test);

app.get('/', async (req,res) => {
  respuesta = {
    error: true,
    codigo: 200,
    mensaje: 'Punto de inicio'
   };
   res.send(respuesta);
})

app.get('/test',async (req,res) => {
  res.json({
    mensaje : 'Hola guapo',
    mensaje2: 'aver tu senos bebe'
  })
})

app.route('/usuario')
.get(async (req,res) => {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
   };
   if(usuario.name === '' || usuario.password === '') {
    respuesta = {
     error: true,
     codigo: 501,
     mensaje: 'El usuario no ha sido creado'
    };
   } else {
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'respuesta del usuario',
     respuesta: usuario
    };
   }
   res.send(respuesta);
})

.post(async (req,res) => {
  if(!req.body.name || !req.body.password) {
    respuesta = {
     error: true,
     codigo: 502,
     mensaje: 'El campo name y password son requeridos'
    };
   } else {
    if(usuario.name !== '' || usuario.password !== '') {
     respuesta = {
      error: true,
      codigo: 503,
      mensaje: 'El usuario ya fue creado previamente'
     };
    } else {
     usuario = {
      name: req.body.name,
      password: req.body.password
     };
     respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Usuario creado',
      respuesta: usuario
     };
    }
   }
   
   res.send(respuesta);
})

.put(async (req,res) => {
  if(!req.body.name || !req.body.password) {
    respuesta = {
     error: true,
     codigo: 502,
     mensaje: 'El campo name y password son requeridos'
    };
   } else {
    if(usuario.name === '' || usuario.password === '') {
     respuesta = {
      error: true,
      codigo: 501,
      mensaje: 'El usuario no ha sido creado'
     };
    } else {
     usuario = {
      name: req.body.name,
      password: req.body.password
     };
     respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Usuario actualizado',
      respuesta: usuario
     };
    }
   }
   
   res.send(respuesta);
})

.delete(async (req,res) => {
  if(usuario.name === '' || usuario.password === '') {
    respuesta = {
     error: true,
     codigo: 501,
     mensaje: 'El usuario no ha sido creado'
    };
   } else {
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Usuario eliminado'
    };
    usuario = { 
     name: '', 
     password: '' 
    };
   }
   res.send(respuesta);
});

app.use(async (req,res, next) => {
  respuesta = {
    error: true, 
    codigo: 404, 
    mensaje: 'URL no encontrada'
   };
   res.status(404).send(respuesta);
});

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

app.listen(3000, () => console.log(`app listening at http://localhost:${3000}`));