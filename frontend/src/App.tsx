import React, { useState } from "react";
import RoutesApp from "./routes";
import { LanguageContext } from "./context/language";
import languageConfig from "./config/language";
const App: React.FC = () => {
  const [language, setLanguage] = useState("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageConfig }}>
      <RoutesApp />
    </LanguageContext.Provider>
  );
};

export default App;
