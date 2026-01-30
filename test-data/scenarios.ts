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

export const POSITIVE_SCENARIOS: Scenario[] = [
  {
    tcId: 'Pos_Fun_0004',
    name: 'Convert simple sentence - going home',
    inputLengthType: 'S',
    input: 'mama gedhara yanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'The simple sentence meaning is preserved. Sinhala spelling and punctuation are correct.',
  },
  {
    tcId: 'Pos_Fun_0005',
    name: 'Convert simple sentence - rice need',
    inputLengthType: 'S',
    input: 'mata bath oonee.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'The request for rice is correctly converted. Sinhala output is accurate.',
  },
  {
    tcId: 'Pos_Fun_0006',
    name: 'Convert compound sentence',
    inputLengthType: 'M',
    input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Compound sentence',
      lengthType: 'M (31–299 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Both clauses of the compound sentence are correctly converted. Conjunction is preserved.',
  },
  {
    tcId: 'Pos_Fun_0007',
    name: 'Convert complex sentence',
    inputLengthType: 'S',
    input: 'oya enavaanam mama balan innavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Complex sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'The conditional complex sentence is correctly converted. Cause-effect relationship preserved.',
  },
  {
    tcId: 'Pos_Fun_0008',
    name: 'Convert interrogative - when coming',
    inputLengthType: 'S',
    input: 'oyaa kavadhdha enna hithan inne?',
    expectedOutput: '',
    coverage: {
      inputType: 'Greeting / request / response',
      grammarFocus: 'Interrogative (question)',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'The question form is correctly converted. Question mark remains in place.',
  },
  {
    tcId: 'Pos_Fun_0009',
    name: 'Convert imperative - come tomorrow',
    inputLengthType: 'S',
    input: 'vahaama enna.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Imperative (command)',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'The command/imperative form is correctly converted. Period preserved.',
  },
  {
    tcId: 'Pos_Fun_0010',
    name: 'Convert positive sentence',
    inputLengthType: 'S',
    input: 'mama ehema karanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Present tense',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Positive form is correctly converted. Affirmative meaning preserved.',
  },
  {
    tcId: 'Pos_Fun_0011',
    name: 'Convert negative sentence',
    inputLengthType: 'S',
    input: 'mama ehema karannee naehae.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Negation (negative form)',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Negative form is correctly converted. Negation is properly expressed.',
  },
  {
    tcId: 'Pos_Fun_0012',
    name: 'Convert greeting - aayuboovan',
    inputLengthType: 'S',
    input: 'aayuboovan!',
    expectedOutput: '',
    coverage: {
      inputType: 'Greeting / request / response',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Greeting is correctly converted. Exclamation mark preserved.',
  },
  {
    tcId: 'Pos_Fun_0013',
    name: 'Convert request for help',
    inputLengthType: 'S',
    input: 'mata udhavvak karanna puLuvandha?',
    expectedOutput: '',
    coverage: {
      inputType: 'Greeting / request / response',
      grammarFocus: 'Interrogative (question)',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Request is correctly converted. Polite request form preserved.',
  },
  {
    tcId: 'Pos_Fun_0014',
    name: 'Convert response - yes I will',
    inputLengthType: 'S',
    input: 'hari, mama karannam.',
    expectedOutput: '',
    coverage: {
      inputType: 'Greeting / request / response',
      grammarFocus: 'Present tense',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Response is correctly converted. Comma and agreement preserved.',
  },
  {
    tcId: 'Pos_Fun_0015',
    name: 'Convert polite phrasing',
    inputLengthType: 'M',
    input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
    expectedOutput: '',
    coverage: {
      inputType: 'Greeting / request / response',
      grammarFocus: 'Interrogative (question)',
      lengthType: 'M (31–299 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Polite phrasing is correctly converted. Formal request preserved.',
  },
  {
    tcId: 'Pos_Fun_0016',
    name: 'Convert informal phrasing',
    inputLengthType: 'S',
    input: 'eeyi, ooka dhiyan.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Informal phrasing is correctly converted. Casual tone preserved.',
  },
  {
    tcId: 'Pos_Fun_0017',
    name: 'Convert day-to-day expression - sleepy',
    inputLengthType: 'S',
    input: 'mata nidhimathayi.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Common expression correctly converted. Meaning preserved.',
  },
  {
    tcId: 'Pos_Fun_0018',
    name: 'Convert multi-word collocation',
    inputLengthType: 'S',
    input: 'mata oona',
    expectedOutput: '',
    coverage: {
      inputType: 'Word combination / phrase pattern',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Multi-word expression correctly converted. Collocation preserved.',
  },
  {
    tcId: 'Pos_Fun_0019',
    name: 'Convert with proper spacing',
    inputLengthType: 'S',
    input: 'heta api yanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Present tense',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Proper spacing input correctly converted. Word segmentation accurate.',
  },
  {
    tcId: 'Pos_Fun_0020',
    name: 'Convert repeated word expression',
    inputLengthType: 'S',
    input: 'hari hari',
    expectedOutput: '',
    coverage: {
      inputType: 'Word combination / phrase pattern',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Repeated word for emphasis correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0021',
    name: 'Convert past tense',
    inputLengthType: 'S',
    input: 'mama iiyee gedhara giyaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Past tense',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Past tense correctly converted. Temporal reference preserved.',
  },
  {
    tcId: 'Pos_Fun_0022',
    name: 'Convert present tense',
    inputLengthType: 'S',
    input: 'mama dhaen vaeda karanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Present tense',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Present tense correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0023',
    name: 'Convert future tense',
    inputLengthType: 'S',
    input: 'api iiLaGa sathiyee gedhara yamu.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Future tense',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Future tense correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0024',
    name: 'Convert negation pattern',
    inputLengthType: 'S',
    input: 'mama dhannee naee.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Negation (negative form)',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Negation pattern correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0025',
    name: 'Convert singular pronoun',
    inputLengthType: 'S',
    input: 'mama yanna hadhannee.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Pronoun variation (I/you/we/they)',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Singular pronoun correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0026',
    name: 'Convert plural form',
    inputLengthType: 'S',
    input: 'eyaalaa enavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Plural form',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Plural form correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0027',
    name: 'Convert mixed Singlish and English - Zoom meeting',
    inputLengthType: 'S',
    input: 'Zoom meeting ekak thiyennee.',
    expectedOutput: '',
    coverage: {
      inputType: 'Mixed Singlish + English',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'English brand term Zoom preserved. Singlish part correctly converted.',
  },
  {
    tcId: 'Pos_Fun_0028',
    name: 'Convert with currency format',
    inputLengthType: 'S',
    input: 'Rs. 5343',
    expectedOutput: '',
    coverage: {
      inputType: 'Punctuation / numbers',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Formatting preservation',
    },
    justification: 'Currency format preserved. Rs. and number correctly handled.',
  },
  {
    tcId: 'Pos_Fun_0029',
    name: 'Convert medium length input',
    inputLengthType: 'M',
    input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee. api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Compound sentence',
      lengthType: 'M (31–299 characters)',
      qualityFocus: 'Accuracy validation',
    },
    justification: 'Medium length compound sentence correctly converted. No truncation.',
  },
  {
    tcId: 'Pos_Fun_0030',
    name: 'Convert long paragraph input',
    inputLengthType: 'L',
    input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.',
    expectedOutput: '',
    coverage: {
      inputType: 'Formatting (spaces / line breaks / paragraph)',
      grammarFocus: 'Compound sentence',
      lengthType: 'L (≥300 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'Long paragraph correctly converted. System handles extended input without failure.',
  },
];

export const NEGATIVE_SCENARIOS: Scenario[] = [
  {
    tcId: 'Neg_Fun_0001',
    name: 'Joined words without spaces - fails segmentation',
    inputLengthType: 'S',
    input: 'mamagedharayanavaa',
    expectedOutput: '',
    coverage: {
      inputType: 'Typographical error handling',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'System fails to correctly segment joined words. Output is garbled or incorrect.',
  },
  {
    tcId: 'Neg_Fun_0002',
    name: 'Missing spaces - matapaankannaoonee',
    inputLengthType: 'S',
    input: 'matapaankannaoonee',
    expectedOutput: '',
    coverage: {
      inputType: 'Typographical error handling',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'Segmentation failure. Multiple words joined without spaces not correctly parsed.',
  },
  {
    tcId: 'Neg_Fun_0003',
    name: 'Slang - ela machan supiri',
    inputLengthType: 'S',
    input: 'ela machan! supiri!!',
    expectedOutput: '',
    coverage: {
      inputType: 'Slang / informal language',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'Slang and colloquial phrasing may not convert correctly or produce unexpected output.',
  },
  {
    tcId: 'Neg_Fun_0004',
    name: 'Complex slang phrase',
    inputLengthType: 'M',
    input: 'appatasiri, mata beheth bonna amathaka vunaa kiyahankoo.',
    expectedOutput: '',
    coverage: {
      inputType: 'Slang / informal language',
      grammarFocus: 'Simple sentence',
      lengthType: 'M (31–299 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'Unusual colloquial phrasing may cause incorrect or garbled conversion.',
  },
  {
    tcId: 'Neg_Fun_0005',
    name: 'English abbreviations - ID NIC',
    inputLengthType: 'S',
    input: 'ID, NIC',
    expectedOutput: '',
    coverage: {
      inputType: 'Punctuation / numbers',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'Abbreviations may remain as-is or convert oddly. System not designed for acronyms.',
  },
  {
    tcId: 'Neg_Fun_0006',
    name: 'Technical abbreviations - CPU GPU OS',
    inputLengthType: 'S',
    input: 'CPU, GPU, OS',
    expectedOutput: '',
    coverage: {
      inputType: 'Mixed Singlish + English',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'Technical abbreviations may produce mixed or incorrect conversion.',
  },
  {
    tcId: 'Neg_Fun_0007',
    name: 'Multiple spaces between words',
    inputLengthType: 'S',
    input: 'mama  gedhara   yanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Formatting (spaces / line breaks / paragraph)',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Formatting preservation',
    },
    justification: 'Multiple spaces may cause spacing preservation issues or unexpected output.',
  },
  {
    tcId: 'Neg_Fun_0008',
    name: 'Multi-line input with line breaks',
    inputLengthType: 'M',
    input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?\napi passee\nkathaa karamu.',
    expectedOutput: '',
    coverage: {
      inputType: 'Formatting (spaces / line breaks / paragraph)',
      grammarFocus: 'Interrogative (question)',
      lengthType: 'M (31–299 characters)',
      qualityFocus: 'Formatting preservation',
    },
    justification: 'Line breaks may cause formatting issues, truncation, or incorrect handling.',
  },
  {
    tcId: 'Neg_Fun_0009',
    name: 'Empty input handling',
    inputLengthType: 'S',
    input: '',
    expectedOutput: '',
    coverage: {
      inputType: 'Empty/cleared input handling',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Error handling / input validation',
    },
    justification: 'Empty input may produce unexpected placeholder text or error behavior.',
  },
  {
    tcId: 'Neg_Fun_0010',
    name: 'ASAP FYI abbreviations',
    inputLengthType: 'S',
    input: 'ASAP, FYI',
    expectedOutput: '',
    coverage: {
      inputType: 'Punctuation / numbers',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Robustness validation',
    },
    justification: 'English abbreviations may not convert or may produce incorrect Sinhala output.',
  },
];

export const UI_SCENARIOS: Scenario[] = [
  {
    tcId: 'Pos_UI_0002',
    name: 'Clear button empties both input and output fields',
    inputLengthType: 'S',
    input: 'mama gedhara yanavaa.',
    expectedOutput: '',
    coverage: {
      inputType: 'Daily language usage',
      grammarFocus: 'Simple sentence',
      lengthType: 'S (≤30 characters)',
      qualityFocus: 'Real-time output update behavior',
    },
    justification: 'Clear button successfully empties both Singlish input and Sinhala output fields.',
  },
];

export function getAllScenarios(): Scenario[] {
  return [...POSITIVE_SCENARIOS, ...NEGATIVE_SCENARIOS, ...UI_SCENARIOS];
}
