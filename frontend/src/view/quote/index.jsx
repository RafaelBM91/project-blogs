import * as React from "react";
import { LanguageContext } from "../../context/language";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_QUOTE } from "../../graphql/querys/quote";
import Wrapper from "../../graphql/provider";
import useForm from "../../hooks/useForm";

import { FormML } from "../../mangoLy";
import {
  TitleForm,
  BgColor,
  SendOk,
  InputSubmit,
  ContainerImg,
  ContainerText
} from "../home/formStyled";
import { ContainerCheckbox } from "./styled";
import check from "../img/home/formCheck.svg";

import {
  initialValues,
  selects,
  SelectA,
  SelectB,
  SelectC,
  SelectD,
  SelectE,
  SelectF,
  SelectG,
  SelectH
} from "./dataConst";
const placeholder = {
  en: "Fill in data",
  es: "Rellenar datos"
};
const Quote = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let form = languageConfig[language].home.form;
  let sendForm = languageConfig[language].sendForm;
  const [viewForm, setViewForm] = React.useState(0);
  const [addTodo, { data }] = useMutation(CREATE_QUOTE);
  const { fields, getInput, getCheckbox, getRadio, getSelect } = useForm({
    initialValues
  });

  const handleNext = () => {
    if (viewForm <= 8) {
      setViewForm(viewForm + 1);
    }
  };
  const handleOnSebmit = e => {
    e.preventDefault();
    for (let i = viewForm; i < 9; i++) {
      if (i === 0 && fields.SA === true) {
        setViewForm(1);
        break;
      }
      if (i === 1 && fields.SB === true) {
        setViewForm(2);
        break;
      }
      if (i === 2 && fields.SC === true) {
        setViewForm(3);
        break;
      }
      if (i === 3 && fields.SD === true) {
        setViewForm(4);
        break;
      }
      if (i === 4 && fields.SE === true) {
        setViewForm(5);
        break;
      }
      if (i === 5 && fields.SF === true) {
        setViewForm(6);
        break;
      }
      if (i === 6 && fields.SG === true) {
        setViewForm(7);
        break;
      }
      if (i === 7 && fields.SH === true) {
        setViewForm(8);
        break;
      }
      if (i === 8) {
        console.log("hola", i);
        try {
          addTodo({
            variables: {
              input: {
                data: {
                  A1: fields.A1,
                  A2: fields.A2,
                  A3: fields.A3,
                  A4: fields.A4,
                  A5: fields.A5,
                  A6: fields.A6,
                  A7: fields.A7,
                  A8: fields.A8,
                  A9: fields.A9,
                  A10: fields.A10,
                  A11: fields.A11,
                  A12: fields.A12,
                  A13: fields.A13,
                  A14: fields.A14,
                  A15: fields.A15,
                  B1: fields.B1,
                  B2: fields.B2,
                  B3: fields.B3,
                  B4: fields.B4,
                  B5: fields.B5,
                  B6: fields.B6,
                  B7: fields.B7,
                  B8: fields.B8,
                  B9: fields.B9,
                  B10: fields.B10,
                  B11: fields.B11,
                  B12: fields.B12,
                  B13: fields.B13,
                  B14: fields.B14,
                  B15: fields.B15,
                  B16: fields.B16,
                  B17: fields.B17,
                  C1: fields.C1,
                  C2: fields.C2,
                  C3: fields.C3,
                  C4: fields.C4,
                  C5: fields.C5,
                  C6: fields.C6,
                  C7: fields.C7,
                  C8: fields.C8,
                  C9: fields.C9,
                  C10: fields.C10,
                  C11: fields.C11,
                  C12: fields.C12,
                  C13: fields.C13,
                  C14: fields.c14,
                  C15: fields.C15,
                  C16: fields.C16,
                  C17: fields.C17,
                  D1: fields.D1,
                  D2: fields.D2,
                  D3: fields.D3,
                  D4: fields.D4,
                  D5: fields.D5,
                  D7: fields.D7,
                  D7: fields.D7,
                  E1: fields.E1,
                  E2: fields.E2,
                  E3: fields.E3,
                  E4: fields.E4,
                  E5: fields.E5,
                  F1: fields.F1,
                  F2: fields.F2,
                  F3: fields.F3,
                  F4: fields.F4,
                  F5: fields.F5,
                  F6: fields.F6,
                  F7: fields.F7,
                  F8: fields.F8,
                  F9: fields.F9,
                  F10: fields.F10,
                  F11: fields.F11,
                  F12: fields.F12,
                  F13: fields.F13,
                  F14: fields.F14,
                  F15: fields.F15,
                  F16: fields.F16,
                  F17: fields.F17,
                  F18: fields.F18,
                  F19: fields.F19,
                  F20: fields.F20,
                  F21: fields.F21,
                  F22: fields.F22,
                  F23: fields.F23,
                  F24: fields.F24,
                  G1: fields.G1,
                  G2: fields.G2,
                  G3: fields.G3,
                  G4: fields.G4,
                  G5: fields.G5,
                  G6: fields.G6,
                  G7: fields.G7,
                  G8: fields.G8,
                  G9: fields.G9,
                  G10: fields.G10,
                  G11: fields.G11,
                  H1: fields.H1,
                  H2: fields.H2,
                  H3: fields.H3,
                  H4: fields.H4,
                  H5: fields.H5,
                  H6: fields.H6,
                  H7: fields.H7,
                  H8: fields.H8,
                  H9: fields.H9,
                  H10: fields.H10,
                  H11: fields.H11,
                  H12: fields.H12,
                  H13: fields.H13,
                  H14: fields.H14,
                  H15: fields.H15,
                  H16: fields.H16,
                  H17: fields.H17
                }
              }
            }
          });
          setViewForm(9);
        } catch (error) {
          console.log("error", error);
        }
        break;
      }
    }
  };
  // console.log("fields", fields);

  return languageConfig[language] ? (
    <FormML.Container>
      <FormML
        width="auto"
        onSubmit={handleOnSebmit}
        style={{ alignItems: "center" }}
      >
        {viewForm === 0 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              {language === "es" ? (
                <h2>
                  Selecciona tu <span>requerimiento</span>
                </h2>
              ) : (
                <h2>
                  What is your <span>issue?</span>
                </h2>
              )}
            </TitleForm>
            <ContainerCheckbox>
              {selects.map((check, i) => (
                <label key={i}>
                  <input
                    type="checkbox"
                    id={check.name}
                    {...getCheckbox(check.name)}
                  />
                  <pre>{check.text[language]}</pre>
                </label>
              ))}
            </ContainerCheckbox>
          </>
        )}

        {viewForm === 1 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[0].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectA.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 2 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[1].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectB.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 3 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[2].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectC.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 4 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[3].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectD.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 5 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[4].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectE.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 6 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[5].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectF.map((input, i) => (
              <>
                {input.options && <h3>{input.options[language]}</h3>}
                <p>{input.text[language]}</p>
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 7 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[6].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectG.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.placeholder
                      ? input.placeholder[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm === 8 && (
          <>
            <TitleForm style={{ marginBottom: "50px" }}>
              <h2>
                <span>{selects[7].text[language]}</span>
              </h2>
            </TitleForm>
            {SelectH.map((input, i) => (
              <>
                <p>{input.text[language]}</p>
                {input.options && <p>{input.options[language]}</p>}
                {input.example && (
                  <p style={{ color: "#9a9494" }}>{input.example[language]}</p>
                )}

                <FormML.Input3
                  key={i}
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={
                    input.example
                      ? input.example[language]
                      : placeholder[language]
                  }
                  mytype="text"
                  required={true}
                  initialValue={""}
                  id={input.name}
                  name={input.name}
                  {...getInput(input.name)}
                />
              </>
            ))}
          </>
        )}
        {viewForm !== 9 && (
          <InputSubmit
            type="submit"
            value={language === "es" ? "Continuar" : "Continue"}
          />
        )}
        {viewForm === 9 && (
          <SendOk>
            <ContainerImg>
              <img src={check} alt="icon" />
            </ContainerImg>
            <ContainerText>
              <h3>{sendForm.title}</h3>
              <p>{sendForm.text}</p>
            </ContainerText>
          </SendOk>
        )}
      </FormML>
    </FormML.Container>
  ) : null;
};

export default Wrapper(Quote);
