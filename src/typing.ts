import PouchDB from 'pouchdb';

declare module 'fastify' {
  interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
    pouchdb: PouchDB.Database;
  }
}
