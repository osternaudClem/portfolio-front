import reactAttrConverter from 'react-attr-converter';

export function transformAttributes(attributes) {
  const attr = {};
  for (let property in attributes) {
    attr[reactAttrConverter(property)] = attributes[property];
  }

  return attr;
}
