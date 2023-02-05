import { ICategoryInAttribute } from './categories.types'

export enum ATTRIBUTE_TYPES {
  INPUT = 'INPUT',
  SELECT = 'SELECT',
  TAGS = 'TAGS',
  CHECKBOX = 'CHECKBOX',
  RADIOBUTTON = 'RADIOBUTTON',
}

export interface AttributeValue {
  id: string
  attributeId: string
  value: string
}

export interface Attribute {
  id: string
  name: string
  isFiltered: boolean
  type: ATTRIBUTE_TYPES
  values: AttributeValue[]
  categories: ICategoryInAttribute[]
}

export type IAttributeInCategory = Omit<Attribute, 'categories'>

export type AttributeRequest = Omit<Attribute, 'id' | 'values' | 'categories'>

export type AttributeValueRequest = {
  value: string
  attributeId: string
}

export const ATTRIBUTE_TYPES_OBJECT = [
  {
    value: ATTRIBUTE_TYPES.INPUT,
    label: 'Input',
  },
  {
    value: ATTRIBUTE_TYPES.SELECT,
    label: 'Select',
  },
  {
    value: ATTRIBUTE_TYPES.TAGS,
    label: 'Tags',
  },
  {
    value: ATTRIBUTE_TYPES.CHECKBOX,
    label: 'Checkbox',
  },
  {
    value: ATTRIBUTE_TYPES.RADIOBUTTON,
    label: 'Radio button',
  },
]
