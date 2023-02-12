import type {Attribute} from 'papa-vinyl-types';
import {ATTRIBUTE_TYPES} from 'papa-vinyl-types';

export type IAttribute = Attribute.Interface;
export type IAttributeValue = Attribute.ValueInterface;
export type IAttributeInCategory = Attribute.InCategoryInterface;

export type AttributeValueRequest = {
  value: string;
  attributeId: string;
};

export type AttributeRequest = Omit<IAttribute, 'id' | 'values'>;

const ATTRIBUTE_TYPES_OBJECT = [
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
];
export {ATTRIBUTE_TYPES, ATTRIBUTE_TYPES_OBJECT};
