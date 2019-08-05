


'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const schema = Joi.object().keys({


})
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'


    });


    server.route({
        method: 'POST',
        path: '/',
        handler: (request, h) => {

            //   const user = request.users
            // encodeURIComponent(users.username)
            //var payload = request.payload

            //return payload.email
            return { message: request.user.username };
        },

        options: {
            validate: {
                payload: {
                    email: Joi.string().email({ minDomainSegments: 2 })
                }
            }
        }




    });


    server.route({
        method: 'POST',
        path: '/',
        handler: function (request, h) {


            return `Welcome ${encodeURIComponent(payload.email)}!`;
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
