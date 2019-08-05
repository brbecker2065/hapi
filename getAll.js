'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
//const user = require('userHapi');
//const schema = Joi.object().keys({


//})
//const init = async () => {






const server = Hapi.server({
    port: 3000,
    host: 'localhost'


});


server.route({
    method: 'POST',
    path: '/',
    handler: (request, h) => {





        //encodeURIComponent(users.username)



        return { message: "it is working" };//request.user.username };
    },

    options: {

        validate: {

            payload: {
                post: Joi.string().email({ minDomainSegments: 2 })

            }
        }
    }



});


