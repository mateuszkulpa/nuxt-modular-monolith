import 'dotenv/config'
import type {Config} from 'drizzle-kit'

export default {
    schema: './modules/*/server/schema.ts',
    out: './drizzle',
    driver: 'better-sqlite',
    dbCredentials: {
        url: 'sqlite.db'
    }
} satisfies Config