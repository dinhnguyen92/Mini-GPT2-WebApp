const isNullOrEmpty = (text: string | null | undefined) => text === null || text === undefined || text.trim().length === 0

const normalizeString = (text: string | null | undefined) => isNullOrEmpty(text) ? "" : (text + "").trim()

const splitToWords = (text: string | undefined): string[] => {
  return text?.split(/\s+/).map(word => word.trim()).filter(word => word.trim() !== '') ?? [];
}

const getLastNWords = (text: string | undefined, n: number): string | undefined => {
  const words = splitToWords(text);
  return words.length <= n ? words.join(' ') : words.slice(-n).join(' ')
}

const StringUtil = {
  isNullOrEmpty,
  normalizeString,
  splitToWords,
  getLastNWords
}

export default StringUtil