export const getJSONFile = async (state) => {
  if (state && state !== "Nigeria") {
    const FilePath = `../data/lgaByStateTopoJSON/${state}.topo.json`;
    const File = await import(`../data/lgaByStateTopoJSON/${state}.topo.json`);
    return File;
  }
};

export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function JSON_to_URLEncoded(element, key, list) {
  var list = list || [];
  if (typeof element == "object") {
    for (var idx in element)
      JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, list);
  } else {
    list.push(key + "=" + encodeURIComponent(element));
  }
  return list.join("&");
}
