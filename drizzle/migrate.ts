import 'dotenv/config'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { db } from '~/layers/shared/server/utils/database'
migrate(db, { migrationsFolder: './drizzle' })
