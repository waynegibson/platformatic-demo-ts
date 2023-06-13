/// <reference path="../global.d.ts" />
import { FastifyInstance } from 'fastify'
import { FastifyReply} from 'fastify/types/reply'
import { FastifyRequest } from 'fastify/types/request'

export default async function (app: FastifyInstance) {
  app.log.info('routes plugin loaded ....')

  app.get('/users/count', {
    schema: {
      response: {
        201: {
          type: "object",
          properties: {
            usersCount: { type: "integer" }
          }
        }
      }
    }
}, async (request: FastifyRequest, reply: FastifyReply) => {
    const usersCount = await app.platformatic.entities.user.count()

    // reply.send({ usersCount }) or 

    return { usersCount }
  })




  app.post('/test-user',{
    schema: {
      body: { $ref: 'User' },
      response: {
        201: { $ref: 'User' }
      }
    }
  }, async (request: FastifyRequest<{
    Body: {
      username: string
      nickname: string
    }
  }>, reply: FastifyReply) => {
    const user = request.body

    const result = await app.platformatic.entities.user.save({
      input: {
        username: user.username,
        nickname: user.nickname
      },
    })

    return reply.send(result)
  })

  app.addSchema({
    $id: 'createCrazyUserSchema',
    type: 'object',
    required: ['username', 'nickname'],
    properties: {
      username: {
        type: 'string'
      },
      nickname: {
        type: 'string'
      }
    }
  })

  app.post('/crazy-me',{
    schema: {
      body: { $ref: 'createCrazyUserSchema#' },
      response: {
        201: { $ref: 'User' }
      }
    }
  }, async (request: FastifyRequest<{
    Body: {
      username: string
      nickname: string
    }
  }>, reply: FastifyReply) => {
    const user = request.body
    user.nickname = user.nickname.toUpperCase()

    const result = await app.platformatic.entities.user.save({
      input: user,
    })

    return reply.send({ result})
  })

  app.post('/crazy-user',{
    schema: {
      body: { $ref: "User" },
      response: {
        201: { $ref: "User"}
      }
    }
  }, async (request: FastifyRequest<{
    Body: {
      username: string
      nickname: string
    }
  }>, reply: FastifyReply) => {
    const user = request.body
    user.nickname = user.nickname.toUpperCase()

    const result = await app.platformatic.entities.user.save({
      input: user,
    })

    return reply.code(201).send({ result})
  })
}
