import fastifyPlugin from 'fastify-plugin';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { FastifyInstance } from 'fastify';

interface Options {
  name?: string;
  options?: PouchDB.Configuration.DatabaseConfiguration;
}

const createDatabase = (fastify: FastifyInstance, options: Options, done: any) => {
  PouchDB.plugin(PouchDBFind);
  const database = new PouchDB(options.name, options.options);
  fastify.decorate('pouchdb', database);
  done();
};

export default fastifyPlugin(createDatabase, {
  fastify: '>=1.0.0',
  name: 'fastify-pouchdb',
});
