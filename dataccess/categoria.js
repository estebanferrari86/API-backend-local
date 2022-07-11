let Categoria = [{
        id: 1,
        title: "Placas"
    },
    {
        id: 2,
        title: "Procesadores"
    },
    {
        id: 3,
        title: "Memorias RAM"
    }
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

const update = (id, body) => {
    const index = Categoria.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Categoria[index] = body;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };