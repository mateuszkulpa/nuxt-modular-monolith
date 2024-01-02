import {defineEventHandler, getRouterParam} from 'h3'
import {surveys} from '../../schema'
import {eq} from 'drizzle-orm'

export default defineEventHandler(async (event) => {
    const surveyId = Number(getRouterParam(event, 'id'))
    if (Number.isNaN(surveyId))
        throw createError('Incorrect "id" parameter')

    const [survey] = await db.select().from(surveys).where(eq(surveys.id, surveyId))
    if (!survey)
        throw createError({
            statusCode: 404,
            message: `Survey with id: ${surveyId} not found`
        })

    return survey
})