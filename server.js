
const hapi = require('hapi');
const server = hapi.server({
    port: 3000,
    host: 'localhost'
});
const inert = require('inert');

await server.register(inert);

server.route({
    method: 'GET',
    path: '/staticpage',
    handler: (req, h) => {
        return h.file('./public/static.html')
    }
})

server.js

const bootUpServer = async () => {
    await server.start();
    console.log(`Server is running at ${server.info.uri}`)

    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    })
}

bootUpServer();