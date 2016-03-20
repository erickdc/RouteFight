'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

var port = Number(process.env.PORT || 3000);

server.connection({ port: port });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});