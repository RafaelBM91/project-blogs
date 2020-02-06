import * as React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import { LanguageContext } from "../context/language";
//Mango Library
import { SeoML } from "../mangoLy";
//Components
import Home from "../view/home";
import Evaluations from "../view/evaluations";
import Monitoring from "../view/monitoring";
import Consultancy from "../view/consultancy";
import Nav from "../view/nav";
import Blogs from "../view/blogs";
import Blog from "../view/blog";
import FreeDiagnostic from "../view/freeDiagnostic";
import SOSAssistance from "../view/sosAssistance";

//Image
import img1 from "../view/img/General/image.jpg";
export interface RoutesProps {}

const RoutesApp: React.SFC<RoutesProps> = () => {
  const myLanguageContext = React.useContext(LanguageContext);
  return (
    <Routes>
      <SeoML
        title="Delta Protect"
        description="A través de nuestras Evaluaciones, Monitoreo y Consultoría, ayudaremos a minimizar el riesgo cibernético."
        img={img1}
        keywords="Ciberseguridad México,
        Ciberseguridad en México ,
        Empresas de Ciberseguridad,
        Hackeo,
        Pruebas de penetración,
        SOC,
        Seguridad empresas,
        Ley Fintech Ciberseguridad,
        seguridad,
        CNBV Ciberseguridad,
        Protección de ciberataques,
        Como prevenir un ciberataque,
        Red Team,
        Secutiry operation center,
        Regulación fintech pruebas de penetración,
        Ciberseguridad en México,
        Ciberseguridad para aplicaciones móviles,
        Empresas de ciberseguridad en México,
        Ciberseguridad para Fintech,
        Que hacer si me hackean,
        Empresa de pruebas de penetración,
        SOC en México,
        Hackeo ético en México,
        Ciberseguridad para startups,
        Ciberseguridad para empresas,
        PCI DSS en México,
        Como se si mi empresa es segura,
        Ciberataques en México,
        Como evitar ransomware en México"
      />
      <Nav bgColor="#364048" languageContext={myLanguageContext} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/evaluations" component={Evaluations} />
        <Route exact path="/monitoring" component={Monitoring} />
        <Route exact path="/consultancy" component={Consultancy} />
        <Route exact path="/blog" component={Blogs} />
        <Route exact path="/blog/:url" component={Blog} />
        <Route exact path="/free-diagnostic" component={FreeDiagnostic} />
        <Route exact path="/sos-assistance" component={SOSAssistance} />
      </Switch>
    </Routes>
  );
};

export default RoutesApp;
