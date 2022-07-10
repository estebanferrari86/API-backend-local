let Producto = [
  {
    id: 1,
    nombre: "Procesador Intel Core i5 1135",
    precio: 45000,
    activo: true,
    descripcion: "El Intel Core i5-1135G7 es un SoC de cuatro núcleos de bajo consumo para portátiles y Ultrabooks basado en la generación Tiger Lake-U (UP4) que se introdujo en septiembre de 2020. Integra cuatro núcleos de procesador Willow Cove (8 hilos gracias a HyperThreading).",
    modelo: "Intel Core i5 1135",
    foto: "https://http2.mlstatic.com/D_NQ_NP_822961-MLA49909328666_052022-O.webp"
  },
  {
    id: 2,
    nombre: "Procesador AMD Ryzen 7 5700G",
    precio: 55880,
    activo: true,
    descripcion: "El procesador AMD Ryzen™ 7 5700G incluye ocho núcleos de CPU, una velocidad de reloj base de 3,8 GHz y ocho núcleos de GPU.",
    modelo: "AMD Ryzen 7 5700G",
    foto: "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"
  },
  {
    id: 3,
    nombre: "Placa De Video GeForce GT 1030 2Gb Msi",
    precio: 28999,
    activo: true,
    descripcion: "La conclusión que debemos sacar de esta comparativa es que la GeForce GT 1030 puede ser una opción interesante para actualizar un PC antiguo o para montar un equipo de bajo consumo si vamos a jugar en 720p, una resolución en la que la GT 1030 se siente mucho más cómoda",
    modelo: "Msi GeForce GT 1030 2Gb",
    foto: "https://mexx-img-2019.s3.amazonaws.com/34555_1.jpeg"
  },
  {
    id: 4,
    nombre: "Motherboard 1200 10°Gen - Asus Prime B460M-A R2.0",
    precio: 15109,
    activo: true,
    descripcion: "Intel® LGA 1200 socket: Ready for 11th and 10th gen Intel® Core™ processors. Enhanced power solution: 8 power stages, alloy chokes and durable capacitors for stable power delivery",
    modelo: "Asus Prime B460M-A R2.0",
    foto: "https://mexx-img-2019.s3.amazonaws.com/40417_1.jpeg"
  }
];

const getAll = (filter) => { 
  let filtrado = Producto;

  if(filter.precio){
    filtrado = filtrado.filter(p => p.precio == filter.precio)
  }

  if(filter.nombre){
    filtrado = filtrado.filter(p => p.nombre.search(filter.nombre) > -1)
  }

  if(filter.modelo){
    filtrado = filtrado.filter(p => p.modelo.search(filter.modelo) > -1)
  }

  if(filter.descripcion){
    filtrado = filtrado.filter(p => p.descripcion.search(filter.descripcion) > -1)
  }

  if(filter.search){
    filtrado = filtrado.filter(p => p.nombre.search(filter.search) > -1 || p.descripcion.search(filter.search) > -1)
  }

  if(filter.multisearch){
    const palabrasABuscar = filter.multisearch.split(',');
    filtrado = filtrado.filter(entry => { 
      const filtro = palabrasABuscar.filter(palabra => p.nombre.includes(palabra) || p.modelo.includes(palabra) || p.descripcion.includes(palabra) || p.precio.includes(Number(palabra)))
      return filtro.length > 0      
    })
  }
  
  return filtrado
}

const getOne = (id) => { return Producto.find((registro) => registro.id == id);}

const save = (body) => { Producto.push(body);}

const borrar = (id) => {
  const index = Producto.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Producto.splice(index, 1);
    return true
  }
  return false
}

const update = (id, body) => { 
  const index = Producto.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Producto[index] = body;
    return true
  } 
  return false
}

module.exports = { getAll, getOne, save, borrar, update};
