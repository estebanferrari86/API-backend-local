let Categoria = [{
        id: 1,
        title: "Placas",
        content: "Placas de video, Motherboards, Placas de sonido y mucho mas",
    },
    {
        id: 2,
        title: "Procesadores",
        content: "Pentium, Core, Celeron, Ryzen y mas",
    },
    {
        id: 3,
        title: "Memorias RAM",
        content: "2GB, 4GB, 8GB, 16GB",
    },
    {
        id: 4,
        title: "Coolers y ventiladores",
        content: "Coolers para PC y laptops",
    },
    {
        id: 5,
        title: "Discos y Accesorios",
        content: "Discos Rigidos, SSDs y Accesorios",
    },
    {
        id: 6,
        title: "Fuentes de alimentacion",
        content: "Fuentes, Cables de alimentacion, Testers para Fuentes de Poder y mas",
    },
    {
        id: 7,
        title: "Gabinetes de PC y Soportes",
        content: "Gabinetes y soportes para CPU",
    },
];

const getAll = (filter) => {
    let filtrado = Categoria;

    if (filter.title) {
        filtrado = filtrado.filter(e => e.title === filter.title)
    }

    if (filter.content) {
        filtrado = filtrado.filter(e => e.content.includes(filter.content))
    }

    if (filter.multitle) {
        filtrado = filtrado.filter(e => filter.multitle.split(',').includes(e.title))
    }

    if (filter.search) {
        filtrado = filtrado.filter(e => e.title.includes(filter.search) || e.content.includes(filter.search))
    }

    if (filter.multisearch) {
        const palabrasABuscar = filter.multisearch.split(',');
        filtrado = filtrado.filter(categoria => {
            const filtro = palabrasABuscar.filter(palabra => categoria.title.includes(palabra) || categoria.content.includes(palabra))
            return filtro.length > 0
        })
    }


    return filtrado
};

const getOne = (id) => { return Categoria.find((registro) => registro.id == id); }

const save = (body) => { Categoria.push(body); }

const borrar = (id) => {
    const index = Categoria.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Categoria.splice(index, 1);
        return true
    }
    return false
}

const update = (id) => {
    const index = Categoria.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Categoria[index] = req.body;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };