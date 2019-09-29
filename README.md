# fastify-pouchdb

[![npm](https://img.shields.io/npm/v/fastify-pouchdb.svg?style=flat-square)](https://www.npmjs.com/package/fastify-pouchdb)
[![Downloads](https://img.shields.io/npm/dm/fastify-pouchdb.svg?style=flat-square)](https://www.npmjs.com/package/fastify-pouchdb)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.npmjs.com/package/fastify-pouchdb)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/kainonly/fastify-pouchdb/master/LICENSE)

Fastify plugin to use PouchDB

## Install

```shell
npm install fastify-pouchdb --save
npm install @types/pouchdb --save-dev
```

## Usage

```typescript
import * as fastify from 'fastify';
import fastifyPouchDB from 'fastify-pouchdb';

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true,
});

server.register(fastifyPouchDB, {
  name: 'myleveldb',
});

server.get('/', (request, reply) => {
  console.log(server.pouchdb.allDocs());
});

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`server listening on ${address}`);
});

```
