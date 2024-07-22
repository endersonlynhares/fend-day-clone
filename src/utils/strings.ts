export function parseStringArrayToJson(arrayString: string) {
  const jsonString = arrayString.slice(1, -2);
  const cleanedString = jsonString.replace(/\n/g, '').replace(/,\s*$/, '');
  const jsonArrayString = `[${cleanedString}]`;
  const jsonArray = JSON.parse(jsonArrayString);

  return jsonArray;
}