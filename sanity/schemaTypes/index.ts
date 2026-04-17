import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import { authorType } from './authorType'
import { instructora } from './Instructora'
import { schedule } from './Schedule'
import { plan } from './plan'
import { gallery } from './Gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, instructora, schedule, plan, gallery],
}
