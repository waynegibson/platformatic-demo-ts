import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/members', async (request, reply) => {
    return { hello: fastify.example }
  })
}
