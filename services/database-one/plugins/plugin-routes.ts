/// <reference path="../global.d.ts" />
import fastify, { FastifyInstance } from 'fastify'
import { FastifyReply} from 'fastify/types/reply'
import { FastifyRequest } from 'fastify/types/request'

export default async function (app: FastifyInstance) {
  app.log.info('routes plugin loaded ....')

  app.get('/users/count', {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            usersCount: { type: "integer" }
          }
        }
      }
    }
}, async (request: FastifyRequest, reply: FastifyReply) => {
    const usersCount = await app.platformatic.entities.user.count()

    reply.send({ usersCount }) // or 

    // return { usersCount }
  })

  // app.post('/crazy-user',{
  //   schema: {
  //     body: { $ref: "User" },
  //     response: {
  //       200: { $ref: "User"}
  //     }
  //   }
  // }, async (request: FastifyRequest, reply: FastifyReply) => {
  //   const user = request.body
  //   user.display_name = user.display_name.toUppercase()

  //   const result = await app.platformatic.entities.user.save({
  //     input: user,
  //   })

  //   return result
  // })
}
