/// <reference path="../global.d.ts" />
import { FastifyInstance } from 'fastify'

export default async function (app: FastifyInstance) {
  app.log.info('DB One plugin loaded ....')

  const tasks = await app.platformatic.entities.task.find()

  const taskDescriptions = tasks.map((task) => task.description)

  app.log.info(taskDescriptions)
}
