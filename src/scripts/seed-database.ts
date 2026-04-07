/**
 * Seed the database from the CLI (same data as Admin → "Seed your database").
 * Requires DATABASE_URL and other vars from `.env`.
 *
 * Usage: npm run seed
 */
import 'dotenv/config'

import { createLocalReq, getPayload } from 'payload'
import config from '@payload-config'

import { seed } from '@/endpoints/seed'

async function main() {
  const payload = await getPayload({ config })
  const req = await createLocalReq({}, payload)
  await seed({ payload, req })
  payload.logger.info('Done. You can log in at /admin — your admin user is unchanged.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
