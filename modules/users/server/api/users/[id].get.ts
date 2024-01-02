import {defineEventHandler, getRouterParam} from 'h3'
import {users} from '../../schema'
import {eq} from 'drizzle-orm'

export default defineEventHandler(async (event) => {
    const userId = Number(getRouterParam(event, 'id'))
    if (Number.isNaN(Number))
        throw createError('Incorrect "id" parameter')

    const [user] = await db.select().from(users).where(eq(users.id, userId))
    if (!user)
        throw createError({
            statusCode: 404,
            message: `User with id: ${userId} not found`
        })

    return user
})