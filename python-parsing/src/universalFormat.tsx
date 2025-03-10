// universalFormat.ts
export interface UniversalFunction {
    language: string; // Tracks original language
    type: "Function";
    name: string;
    parameters: string[];
    body: Array<{ type: string; [key: string]: any }>;
  }
  