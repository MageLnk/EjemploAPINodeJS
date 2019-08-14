const get = (request, response) => {
    console.log(request.url);
    response.status(200).json({ user: 'Cuenta ola k ase' });
};

module.exports = {
    get
}