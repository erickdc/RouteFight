'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

var port = Number(process.env.PORT || 3000);

server.connection({ port: port });

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './client/src',
                listing: false,
                index: true
            }
        },
        config:{
            state:{
                parse: true,
                failAction:'ignore'
            },
            auth:false
        }
    });
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});