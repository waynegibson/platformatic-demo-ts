import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/test-1', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.get('/test-2', async (request, reply) => {
    return { 
      req: request,
      hello: fastify.example 
    }
  })
}
