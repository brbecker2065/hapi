const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

//var userJson = require('./user-test.json')
//var fs = require("fs");

const Schema = Joi.object().keys({
    id: Joi.number(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    handle: Joi.string()
})

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });
    // GET ALL USERS
    server.route({
        method: 'GET',
        path: '/users',
        handler: (request, h) => {
            userList = 'Users: '
            //userJson[i] brings each object.
            for (i = 0; i < userJson.length; i++) {
                console.log(userJson[i].handle)
                userList = userList + userJson[i].handle + ', '
            }
            return (userList)
        }
    })
    // GET USERS WITHIN SPECIFIC ID
    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: (request, h) => {
            const id = parseInt(request.params.id)
            for (x = 0; x < userJson.length; x++) {
                console.log('USER ID OF: ', userJson[x].id)
                if (id === userJson[x].id) {
                    return userJson[x].handle
                }
                else continue
            }
            return '404 not found, maybe a different user ID?'
        }
    })
    // CREATE POST NEW USER
    server.route({
        method: 'POST',
        path: '/users/create/',
        handler: (request, h) => {

        }
    })
    // ERROR HANDLING
    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {

            return '404 Error! Page Not Found!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

