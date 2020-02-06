import * as React from "react";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { SectionML, AcoordionML, ButtonML } from "../../mangoLy";
//Styled-Components
import { ContainerTitleSC, ContainerButton } from "./accordionStyled";
//Assets
import bgNormal from "../img/bgNormal.svg";

export interface AccordionComponentProps {}

const AccordionComponent: React.SFC<AccordionComponentProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let faqs = languageConfig[language].home.faqs;
  const initialStateView = {
    view1: false,
    view2: false,
    view3: false,
    view4: false,
    view5: false,
    view6: false
  };
  const [viewAcoordion, setViewAcoordion] = React.useState(initialStateView);
  const AccordionTitle = () => (
    <ContainerTitleSC>
      <h3>{faqs.title1}</h3>
      <h2>
        {faqs.title2}
        <span>{faqs.span}</span>
      </h2>
    </ContainerTitleSC>
  );
  return (
    <SectionML.Center
      title={<AccordionTitle />}
      //  bgColor={"#364048"}
      // bgImgM={bgNormal}
      // bgImgD={bgNormal}
    >
      <AcoordionML
        title={faqs.faqs[0].title}
        text={
          <>
            <p>{faqs.faqs[0].p1}</p>
            <p>{faqs.faqs[0].p2}</p>
            <ul>
              <li>{faqs.faqs[0].ul[0]}</li>
              <li>{faqs.faqs[0].ul[1]}</li>
              <li>{faqs.faqs[0].ul[2]}</li>
              <li>{faqs.faqs[0].ul[3]}</li>
              <li>{faqs.faqs[0].ul[4]}</li>
              <li>{faqs.faqs[0].ul[5]}</li>
              <li>{faqs.faqs[0].ul[6]}</li>
            </ul>
          </>
        }
        // "En Delta tenemos como finalidad regresarle la seguridad y privacidad digital al mundo. Es por esto que proveemos diferentes servicios de ciberseguridad como: Evaluaciones y Auditorías (pruebas de penetración) a cualquier tipo de sistema. SOCaaS - Security Operation Center as a Service Cyber Insurance Red, Blue & Purple Team Revisión de Código Implementación de DevSecOps Análisis Forense Entre otros"
        view={viewAcoordion.view1}
        setView={() =>
          setViewAcoordion({
            ...initialStateView,
            view1: !viewAcoordion.view1
          })
        }
      />
      <AcoordionML
        title={faqs.faqs[1].title}
        text={<p>{faqs.faqs[1].p}</p>}
        view={viewAcoordion.view2}
        setView={() =>
          setViewAcoordion({
            ...initialStateView,
            view2: !viewAcoordion.view2
          })
        }
      />
      <AcoordionML
        title={faqs.faqs[2].title}
        text={<p>{faqs.faqs[2].p}</p>}
        view={viewAcoordion.view3}
        setView={() =>
          setViewAcoordion({
            ...initialStateView,
            view3: !viewAcoordion.view3
          })
        }
      />
      <AcoordionML
        title={faqs.faqs[3].title}
        text={<p>{faqs.faqs[3].p}</p>}
        view={viewAcoordion.view4}
        setView={() =>
          setViewAcoordion({
            ...initialStateView,
            view4: !viewAcoordion.view4
          })
        }
      />
      <AcoordionML
        title={faqs.faqs[4].title}
        text={<p>{faqs.faqs[4].p}</p>}
        view={viewAcoordion.view5}
        setView={() =>
          setViewAcoordion({
            ...initialStateView,
            view5: !viewAcoordion.view5
          })
        }
      />
      <AcoordionML
        title={faqs.faqs[5].title}
        text={<p>{faqs.faqs[5].p}</p>}
        view={viewAcoordion.view6}
        setView={() =>
          setViewAcoordion({
            ...initialStateView,
            view6: !viewAcoordion.view6
          })
        }
      />
      <ContainerButton>
        <ButtonML
          curvature={true}
          color="#2A93F0"
          onClick={() => {}}
          // onClick={() => historyPush("/consultancy")}
        >
          {faqs.button}
        </ButtonML>
      </ContainerButton>
    </SectionML.Center>
  );
};

export default AccordionComponent;
