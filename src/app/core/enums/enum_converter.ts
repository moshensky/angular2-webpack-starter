export function convertEnumToSelectOptions(enumObject) {
  let selectOptions = [];

  for (let item in enumObject) {
    if (enumObject.hasOwnProperty(item) && !/^\d+$/.test(item)) {
      selectOptions.push({ id: enumObject[item], name: item});
    }
  }

  return selectOptions;
}