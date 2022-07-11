let Pedido = [
  {
    id: 1,
    usuario: {
      id: 1,
      usuario: "Esteban",
      apellido: "Ferrari",
      mail: "EstebanF@gmail.com",
      contrasenia: ""
  },
    producto:  {
      id: 1,
      usuario: "Procesador Intel Core i5 1135",
      Pedido: 45000,
      activo: true,
      descripcion: "El Intel Core i5-1135G7 es un SoC de cuatro núcleos de bajo consumo para portátiles y Ultrabooks basado en la generación Tiger Lake-U (UP4) que se introdujo en septiembre de 2020. Integra cuatro núcleos de procesador Willow Cove (8 hilos gracias a HyperThreading).",
      modelo: "Intel Core i5 1135",
      foto: "https://http2.mlstatic.com/D_NQ_NP_822961-MLA49909328666_052022-O.webp"
    },
    
    descripcion: "Pedido realizado",
    total: "30000",
    mediopago: {
      id: 1,
      title: "Debito"
    }
  },

  {
    id: 2,
    usuario: {
      id: 2,
      nombre: "Jesus",
      apellido: "Arias",
      mail: "jesus@jesus.com",
      contrasenia: ""
  },
    producto: {
      id: 2,
      nombre: "Procesador AMD Ryzen 7 5700G",
      precio: 55880,
      activo: true,
      descripcion: "El procesador AMD Ryzen™ 7 5700G incluye ocho núcleos de CPU, una velocidad de reloj base de 3,8 GHz y ocho núcleos de GPU.",
      modelo: "AMD Ryzen 7 5700G",
      foto: "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"
    },
    
    descripcion: "Pedido realizado",
    total: "30000",
    mediopago: {
      id: 3,
      title: "Crypto",
  }
  },

  {
    id: 3,
    usuario: {
      id: 3,
      nombre: "maxi",
      apellido: "Bounnet",
      mail: "maxi@yahoo.com",
      contrasenia: ""
  },
    producto: {
      id: 3,
      nombre: "Placa De Video GeForce GT 1030 2Gb Msi",
      precio: 28999,
      activo: true,
      descripcion: "La conclusión que debemos sacar de esta comparativa es que la GeForce GT 1030 puede ser una opción interesante para actualizar un PC antiguo o para montar un equipo de bajo consumo si vamos a jugar en 720p, una resolución en la que la GT 1030 se siente mucho más cómoda",
      modelo: "Msi GeForce GT 1030 2Gb",
      foto: "https://mexx-img-2019.s3.amazonaws.com/34555_1.jpeg"
    },
    
    descripcion: "Pedido realizado",
    total: "30000",
    mediopago: {
      id: 2,
      title: "Credito",
  }
  },

];
   

const getAll = (filter) => { 
  let filtrado = Pedido;

  if(filter.Pedido){
    filtrado = filtrado.filter(p => p.Pedido.search(filter.Pedido)> -1)
  }

  if(filter.usuario){
    filtrado = filtrado.filter(p => p.usuario.search(filter.usuario) > -1)
  }

  if(filter.descripcion){
    filtrado = filtrado.filter(p => p.descripcion.search(filter.descripcion) > -1)
  }

  if(filter.mediopago){
    filtrado = filtrado.filter(p => p.mediopago.search(filter.mediopago) > -1)
  }

  if(filter.total){
    filtrado = filtrado.filter(p => p.total == filter.total)
  }
  if(filter.search){
    filtrado = filtrado.filter(p => p.usuario.search(filter.search) > -1 || p.descripcion.search(filter.search) > -1)
  }

  if(filter.multisearch){
    const palabrasABuscar = filter.multisearch.split(',');
    filtrado = filtrado.filter(entry => { 
      const filtro = palabrasABuscar.filter(palabra => p.usuario.includes(palabra) || p.modelo.includes(palabra) || p.descripcion.includes(palabra) || p.Pedido.includes(Number(palabra)))
      return filtro.length > 0      
    })
  }
  
  return filtrado
}

const getOne = (id) => { return Pedido.find((registro) => registro.id == id);}

const save = (body) => { Pedido.push(body);}

const borrar = (id) => {
  const index = Pedido.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Pedido.splice(index, 1);
    return true
  }
  return false
}

const update = (id, body) => { 
  const index = Pedido.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Pedido[index] = body;
    return true
  } 
  return false
}

module.exports = { getAll, getOne, save, borrar, update};
