// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Article } from './collections/Article'
import { Role } from './collections/Role'
import { Comment } from './collections/Comment'
import { Topic } from './collections/Topic'
import { Author } from './collections/Author'
import { Collections } from './collections/Collections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users,Role,Article,Comment,Author,Topic,Collections],
  cors:[
    "http://localhost:3000/",
    "https://localhost:3000/"
  ],
  csrf:[
    "https://localhost:3000/",
    "http://localhost:3000/",
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
