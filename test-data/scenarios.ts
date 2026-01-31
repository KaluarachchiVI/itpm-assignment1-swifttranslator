export type InputLengthType = 'S' | 'M' | 'L';
export type TestType = 'Pos_Fun' | 'Neg_Fun' | 'Pos_UI' | 'Neg_UI';

export interface Scenario {
  tcId: string;
  name: string;
  inputLengthType: InputLengthType;
  input: string;
  expectedOutput: string;
  coverage: {
    inputType: string;
    grammarFocus: string;
    lengthType: string;
    qualityFocus: string;
  };
  justification: string;
}

const getLengthType = (s: string): InputLengthType => {
  const len = s.length;
  if (len <= 30) return 'S';
  if (len <= 299) return 'M';
  return 'L';
};

const cov = (
  inputType: string,
  grammarFocus: string,
  lengthType: string,
  qualityFocus: string
) => ({ inputType, grammarFocus, lengthType, qualityFocus });

export const POSITIVE_SCENARIOS: Scenario[] = [
  { tcId: 'Pos_Fun_0001', name: 'Convert a short daily greeting phrase', inputLengthType: 'S', input: 'Oyaa hodin innavaada?', expectedOutput: 'ඔයා හොඩින් ඉන්නවාඩ?', coverage: cov('Greeting / request / response', 'Interrogative (question)', 'S (≤30 characters)', 'Accuracy validation'), justification: 'The greeting meaning is preserved. Sinhala spelling and punctuation are correct.' },
  { tcId: 'Pos_Fun_0002', name: 'Compound sentence with reason', inputLengthType: 'M', input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naehae.', expectedOutput: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නැහැ.', coverage: cov('Daily language usage', 'Compound sentence', 'M (31–299 characters)', 'Accuracy validation'), justification: 'The sentence meaning is preserved. Sinhala spelling and punctuation are correct.' },
  { tcId: 'Pos_Fun_0003', name: 'Simple daily activity sentence', inputLengthType: 'S', input: 'mama kama kanavaa', expectedOutput: 'මම කම කනවා', coverage: cov('Daily language usage', 'Simple sentence', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Simple sentence correctly converted.' },
  { tcId: 'Pos_Fun_0004', name: 'Ask availability politely', inputLengthType: 'S', input: 'oyata adha free da?', expectedOutput: 'ඔයට අද free ඩ?', coverage: cov('Greeting / request / response', 'Interrogative (question)', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Polite question form preserved.' },
  { tcId: 'Pos_Fun_0005', name: 'Daily routine statement', inputLengthType: 'S', input: 'mama udhaesana jogging yanavaa.', expectedOutput: 'මම උදැසන jogging යනවා', coverage: cov('Daily language usage', 'Simple sentence', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Routine statement correctly converted.' },
  { tcId: 'Pos_Fun_0006', name: 'Conditional sentence', inputLengthType: 'M', input: 'oya avoth api movie ekak balamu', expectedOutput: 'ඔය අවොත් අපි movie එකක් බලමු', coverage: cov('Daily language usage', 'Compound sentence', 'M (31–299 characters)', 'Accuracy validation'), justification: 'Conditional meaning preserved.' },
  { tcId: 'Pos_Fun_0007', name: 'Direct command', inputLengthType: 'S', input: 'ehema kiyanna epaa', expectedOutput: 'එහෙම කියන්න එපා', coverage: cov('Daily language usage', 'Imperative (command)', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Command form correctly converted.' },
  { tcId: 'Pos_Fun_0008', name: 'Negative opinion statement', inputLengthType: 'S', input: 'mata eeka lassanai kiyala hithenne nae.', expectedOutput: 'මට ඒක ලස්සනෛ කියල හිතෙන්නෙ නැ.', coverage: cov('Daily language usage', 'Negation (negative form)', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Negative form correctly converted.' },
  { tcId: 'Pos_Fun_0009', name: 'Polite request for action', inputLengthType: 'M', input: 'puLuvannam adha report eka email karanna.', expectedOutput: 'පුළුවන්නම් අද report එක email කරන්න.', coverage: cov('Greeting / request / response', 'Interrogative (question)', 'M (31–299 characters)', 'Accuracy validation'), justification: 'Polite request preserved.' },
  { tcId: 'Pos_Fun_0010', name: 'Informal advice', inputLengthType: 'S', input: 'oka hariyata karapan.', expectedOutput: 'ඔක හරියට කරපන්.', coverage: cov('Daily language usage', 'Simple sentence', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Informal phrasing preserved.' },
  { tcId: 'Pos_Fun_0011', name: 'Ongoing activity description', inputLengthType: 'S', input: 'mama dhaen music ahagena inne.', expectedOutput: 'මම දැන් music අහගෙන ඉන්නේ.', coverage: cov('Daily language usage', 'Present tense', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Ongoing tense correctly converted.' },
  { tcId: 'Pos_Fun_0012', name: 'Past experience', inputLengthType: 'S', input: 'api kalin mea shop eka balala thibuna.', expectedOutput: 'අපි කලින් මේ shop එක බලල තිබුන', coverage: cov('Daily language usage', 'Past tense', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Past tense preserved.' },
  { tcId: 'Pos_Fun_0013', name: 'Future plan description', inputLengthType: 'S', input: 'api heta hiking yanna plan karala thiyenavaa.', expectedOutput: 'අපි හෙට hiking යන්න plan කරල තියෙනවා.', coverage: cov('Daily language usage', 'Future tense', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Future tense correctly converted.' },
  { tcId: 'Pos_Fun_0014', name: 'Third-person pronoun usage', inputLengthType: 'S', input: 'eyaa adha class eka skip kalaa', expectedOutput: 'එයා අද class එක ස්කිප් කලා', coverage: cov('Daily language usage', 'Pronoun variation (I/you/we/they)', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Third-person pronoun preserved.' },
  { tcId: 'Pos_Fun_0015', name: 'Plural subject sentence', inputLengthType: 'S', input: 'api okkoma ekata lunch kanna giyaa.', expectedOutput: 'අපි ඔක්කොම එකට lunch කන්න ගියා.', coverage: cov('Daily language usage', 'Plural form', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Plural form correctly converted.' },
  { tcId: 'Pos_Fun_0016', name: 'Place name usage', inputLengthType: 'M', input: 'api weekend eka Galle gihilla ennam.', expectedOutput: 'අපි weekend එක Galle ගිහිල්ල එන්නම්.', coverage: cov('Daily language usage', 'Simple sentence', 'M (31–299 characters)', 'Accuracy validation'), justification: 'Place name preserved.' },
  { tcId: 'Pos_Fun_0017', name: 'Currency reference', inputLengthType: 'S', input: 'ticket eka Rs 2500 k.', expectedOutput: 'ticket එක Rs 2500 ක්.', coverage: cov('Punctuation / numbers', 'Simple sentence', 'S (≤30 characters)', 'Formatting preservation'), justification: 'Currency format preserved.' },
  { tcId: 'Pos_Fun_0018', name: 'Time reference sentence', inputLengthType: 'S', input: 'meeting eka 10.45 AM patan gannavaa.', expectedOutput: 'meeting එක 10.45 AM පටන් ගන්නවා.', coverage: cov('Punctuation / numbers', 'Simple sentence', 'S (≤30 characters)', 'Formatting preservation'), justification: 'Time format preserved.' },
  { tcId: 'Pos_Fun_0019', name: 'Emphasis using repetition', inputLengthType: 'S', input: 'honda honda adahas thiyenavaa.', expectedOutput: 'හොන්ඩ හොන්ඩ අඩහස් තියෙනවා.', coverage: cov('Word combination / phrase pattern', 'Simple sentence', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Repeated word for emphasis correctly converted.' },
  { tcId: 'Pos_Fun_0020', name: 'Joined word handling', inputLengthType: 'S', input: 'mamalankavenne', expectedOutput: 'මමලන්කවෙන්නෙ', coverage: cov('Typographical error handling', 'Simple sentence', 'S (≤30 characters)', 'Robustness validation'), justification: 'Joined word handled or segmented.' },
  { tcId: 'Pos_Fun_0021', name: 'Extra spacing handling', inputLengthType: 'M', input: 'mama gedhara avilla  inne', expectedOutput: 'මම ගෙදර අවිල්ල  ඉන්නේ', coverage: cov('Formatting (spaces / line breaks / paragraph)', 'Simple sentence', 'M (31–299 characters)', 'Formatting preservation'), justification: 'Extra spacing handled.' },
  { tcId: 'Pos_Fun_0022', name: 'Multi-line input', inputLengthType: 'M', input: 'mama adha vaeda karanavaa.\nraaedi api meet venavaa.', expectedOutput: 'මම අද වැඩ කරනවා.            \nරාඑඩි අපි මේට් වෙනවා.', coverage: cov('Formatting (spaces / line breaks / paragraph)', 'Compound sentence', 'M (31–299 characters)', 'Formatting preservation'), justification: 'Multi-line input correctly converted.' },
  { tcId: 'Pos_Fun_0023', name: 'Casual confirmation', inputLengthType: 'S', input: 'hari, api eka karamu.', expectedOutput: 'හරි, අපි එක කරමු.', coverage: cov('Greeting / request / response', 'Present tense', 'S (≤30 characters)', 'Accuracy validation'), justification: 'Confirmation and comma preserved.' },
  { tcId: 'Pos_Fun_0024', name: 'Long descriptive input', inputLengthType: 'M', input: 'api last month travel karapu welavata godak experience labunaa saha api aluth deyak igena gaththa.', expectedOutput: 'අපි last month travel කරපු wඑලවට ගොඩක් experience ලබුනා සහ අපි අලුත් ඩෙයක් ඉගෙන ගත්ත.', coverage: cov('Daily language usage', 'Compound sentence', 'M (31–299 characters)', 'Robustness validation'), justification: 'Long descriptive sentence correctly converted.' },
];

export const NEGATIVE_SCENARIOS: Scenario[] = [
  { tcId: 'Neg_Fun_0001', name: 'Empty input', inputLengthType: 'S', input: '', expectedOutput: 'System should display an error or prompt for valid input', coverage: cov('Empty/cleared input handling', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Empty input may produce unexpected placeholder text or error behavior.' },
  { tcId: 'Neg_Fun_0002', name: 'Numbers only input', inputLengthType: 'S', input: '123456789', expectedOutput: 'System should reject numeric-only input', coverage: cov('Punctuation / numbers', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Numeric-only input should be rejected or produce appropriate response.' },
  { tcId: 'Neg_Fun_0003', name: 'Special characters only', inputLengthType: 'S', input: ' @#$%^&*!', expectedOutput: 'Error message or rejection', coverage: cov('Typographical error handling', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Special characters only may produce error or rejection.' },
  { tcId: 'Neg_Fun_0004', name: 'Unsupported language input', inputLengthType: 'S', input: 'Bonjour tout le monde', expectedOutput: 'System should indicate unsupported language', coverage: cov('Slang / informal language', 'Simple sentence', 'S (≤30 characters)', 'Robustness validation'), justification: 'Unsupported language should be indicated.' },
  { tcId: 'Neg_Fun_0005', name: 'Random mixed characters', inputLengthType: 'S', input: '[object Object]', expectedOutput: 'System should reject malformed input', coverage: cov('Typographical error handling', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Malformed input should be rejected.' },
  { tcId: 'Neg_Fun_0006', name: 'Excessively long meaningless input', inputLengthType: 'L', input: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', expectedOutput: 'System should reject or warn user', coverage: cov('Formatting (spaces / line breaks / paragraph)', 'Simple sentence', 'L (≥300 characters)', 'Robustness validation'), justification: 'Excessively long input may be rejected or produce warning.' },
  { tcId: 'Neg_Fun_0007', name: 'Empty input', inputLengthType: 'S', input: 'The system should translate sentences accurately without any errors.', expectedOutput: 'Warning or unsupported format message', coverage: cov('Mixed Singlish + English', 'Simple sentence', 'S (≤30 characters)', 'Robustness validation'), justification: 'Full English sentence may produce warning or unsupported message.' },
  { tcId: 'Neg_Fun_0008', name: 'Repeated punctuation input', inputLengthType: 'S', input: '????????', expectedOutput: 'Error or validation message', coverage: cov('Punctuation / numbers', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Repeated punctuation may produce error or validation message.' },
  { tcId: 'Neg_Fun_0009', name: 'Only whitespace input', inputLengthType: 'S', input: '                    ', expectedOutput: 'Validation message requesting input', coverage: cov('Empty/cleared input handling', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Whitespace-only input may produce validation message.' },
  { tcId: 'Neg_Fun_0010', name: 'Emoji-only input', inputLengthType: 'S', input: '😊👍🔥', expectedOutput: 'System should reject the input or display a validation error', coverage: cov('Punctuation / numbers', 'Simple sentence', 'S (≤30 characters)', 'Error handling / input validation'), justification: 'Emoji-only input should be rejected or show validation error.' },
];

export const UI_SCENARIOS: Scenario[] = [
  { tcId: 'Pos_UI_0001', name: 'Sinhala output updates automatically in real-time', inputLengthType: 'S', input: 'mama Skole yanavaa.', expectedOutput: 'Sinhala output should update automatically while typing and display: මන් ගෙදර යනවා', coverage: cov('Daily language usage', 'Simple sentence', 'S (≤30 characters)', 'Real-time output update behavior'), justification: 'Sinhala output updates automatically in real-time as user types.' },
];

export function getAllScenarios(): Scenario[] {
  return [...POSITIVE_SCENARIOS, ...NEGATIVE_SCENARIOS, ...UI_SCENARIOS];
}
