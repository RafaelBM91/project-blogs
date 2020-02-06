import { createContext } from "react";

interface iLanguage {
  language: string;
  setLanguage: any;
  languageConfig: any;
}
export const LanguageContext = createContext<iLanguage>({
  language: "",
  setLanguage: () => {},
  languageConfig: {}
});
