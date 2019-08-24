export const groupRepeatedUnits = (templateUnitArray = [{ unit: "1fr" }]) => {
  const templateArray = templateUnitArray.map(i => i["unit"]);
  const groups = [[templateArray.shift()]];
  for (const templateUnit of templateArray) {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup.indexOf(templateUnit) !== -1) {
      lastGroup.push(templateUnit);
    } else {
      groups.push([templateUnit]);
    }
  }
  return groups;
};

export const createRepetition = (groups, maxRepetition = 1) => {
  return groups
    .map(group =>
      // If you want to add repetition only when a measure is repeated more than x times,
      // change maxRepetition value to x
      group.length === maxRepetition
        ? group.join(" ")
        : `repeat(${group.length}, ${group[0]})`
    )
    .join(" ");
};
