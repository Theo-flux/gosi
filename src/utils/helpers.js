export const getJSONFile = async (state) => {
  const FilePath = `../data/lgaByStateTopoJSON/${state}.topo.json`;
  const File = await import(`../data/lgaByStateTopoJSON/${state}.topo.json`);
  return File;
};

export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
