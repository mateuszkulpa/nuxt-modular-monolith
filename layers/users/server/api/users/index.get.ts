import {users} from '../../schema'

export default defineEventHandler(() => {
    return db.select().from(users).all()
})