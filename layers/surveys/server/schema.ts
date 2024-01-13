import {integer, sqliteTable} from 'drizzle-orm/sqlite-core'

export const surveys = sqliteTable('surveys', {
    id: integer('id').primaryKey(),
    patientId: integer('patient-id')
})
