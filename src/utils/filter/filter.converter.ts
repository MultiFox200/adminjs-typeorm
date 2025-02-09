import { Filter } from 'adminjs'
import { FindOptionsWhere } from 'typeorm'
import { DefaultParser } from './default-filter.parser.js'
import { parsers } from './filter.utils.js'

export const convertFilter = <T>(
  filterObject?: Filter,
): FindOptionsWhere<T> => {
  if (!filterObject) {
    return {}
  }

  const { filters } = filterObject ?? {}
  const where = {}

  Object.entries(filters ?? {}).forEach(([fieldKey, filter]) => {
    const parser = parsers.find((p) => p.isParserForType(filter))

    if (parser) {
      const { filterValue, filterKey } = parser.parse(filter, fieldKey)
      where[filterKey] = filterValue
    } else {
      const { filterValue, filterKey } = DefaultParser.parse(filter, fieldKey)
      where[filterKey] = filterValue
    }
  })

  return where
}
