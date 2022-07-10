let Entry = [{
        id: 1,
        title: "Debito",
    },
    {
        id: 2,
        title: "Credito",
    },
    {
        id: 3,
        title: "Crypto",
    },
    {
        id: 4,
        title: "Efectivo",
    },
];

const getAll = (filter) => {
    let filtrado = Entry;

    if (filter.title) {
        filtrado = filtrado.filter(e => e.title === filter.title)
    }

    if (filter.multitle) {
        filtrado = filtrado.filter(e => filter.multitle.split(',').includes(e.title))
    }

    if (filter.search) {
        filtrado = filtrado.filter(e => e.title.includes(filter.search) || e.title.includes(filter.search))
    }

    if (filter.multisearch) {
        const palabrasABuscar = filter.multisearch.split(',');
        filtrado = filtrado.filter(entry => {
            const filtro = palabrasABuscar.filter(palabra => entry.title.includes(palabra))
            return filtro.length > 0
        })
    }


    return filtrado
};

const getOne = (id) => { return Entry.find((registro) => registro.id == id); }

const save = (body) => { Entry.push(body); }

const borrar = (id) => {
    const index = Entry.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Entry.splice(index, 1);
        return true
    }
    return false
}

const update = (id) => {
    const index = Entry.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Entry[index] = req.body;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };