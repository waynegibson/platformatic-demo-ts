import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/login', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.get('/logout', async (request, reply) => {
    return { 
      req: request,
      hello: fastify.example 
    }
  })
}
