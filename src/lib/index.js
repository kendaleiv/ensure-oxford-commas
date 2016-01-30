export function isMissingOxfordCommas(str) {
  // Regular expression from:
  // http://stackoverflow.com/a/30006707/941536
  return !!str.match(/\w+(?:,\s*\w+)*\s+(?:and|or)\s+\w+/gi);
}

export function ensureOxfordCommas(str) {
  if (isMissingOxfordCommas(str)) {
    throw new Error('Missing one or more Oxford commas!');
  }
}
