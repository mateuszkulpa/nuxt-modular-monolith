import {surveys} from '../../schema'

export default defineEventHandler(() => {
    return db.select().from(surveys).all()
})