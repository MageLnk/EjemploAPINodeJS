const get = (request, response) => {
    console.log(request.url);
    response.status(200).json({ token: 'xxxxx-xxxx-xxxx-xxxx - segundo' });
};

const postToken = (request, response) => {
    console.log(request.url);
    response.status(200).json({ token: 'xxxxx-xxxx-xxxx-xxxx' });
};

module.exports = {
    get,
    postToken
}