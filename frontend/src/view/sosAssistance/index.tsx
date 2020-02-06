import * as React from "react";
import { LanguageContext } from "../../context/language";
//Mango-ly
import { FormML } from "../../mangoLy";

//Styled-Components
import { TitleForm, InputSubmit, SendOk } from "../home/formStyled";

export interface SOSAssistanceProps {}
interface iInitialValue {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
}
const SOSAssistance: React.SFC<SOSAssistanceProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let sosAssistance = languageConfig[language].sosAssistance;
  const [sendOk, setSendOk] = React.useState(false);
  const initialValue: iInitialValue = {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: ""
  };
  const [valueForm, setValueForm] = React.useState(initialValue);
  const hadleSubmit = (e: any) => {
    e.preventDefault();
    setSendOk(true);
    setValueForm(initialValue);
  };
  return (
    languageConfig[language] && (
      <>
        <FormML.Container bgColor="#FAFAFA">
          <FormML width="auto" onSubmit={(e: any) => hadleSubmit(e)}>
            <TitleForm>
              <h2>
                {sosAssistance.title1}
                <br />
                {sosAssistance.title2}
              </h2>
              <h5>
                {sosAssistance.text1}
                <br />
                {sosAssistance.text2}
              </h5>
            </TitleForm>
            <FormML.Input2
              color="#2C3E50"
              borderColor="#2A93F0"
              placeholder={sosAssistance.input[0]}
              mytype="email"
              required={true}
              initialValue={initialValue}
              value={valueForm}
              name="value1"
              setValue={setValueForm}
            />
            <FormML.Input2
              color="#2C3E50"
              borderColor="#2A93F0"
              placeholder={sosAssistance.input[1]}
              mytype="text"
              required={true}
              initialValue={initialValue}
              value={valueForm}
              name="value2"
              setValue={setValueForm}
            />
            <FormML.Input2
              color="#2C3E50"
              borderColor="#2A93F0"
              placeholder={sosAssistance.input[2]}
              mytype="email"
              required={true}
              initialValue={initialValue}
              value={valueForm}
              name="value3"
              setValue={setValueForm}
            />
            <FormML.Input2
              color="#2C3E50"
              borderColor="#2A93F0"
              placeholder={sosAssistance.input[3]}
              mytype="text"
              required={true}
              initialValue={initialValue}
              value={valueForm}
              name="value4"
              setValue={setValueForm}
            />
            <FormML.Input2
              color="#2C3E50"
              borderColor="#2A93F0"
              placeholder={sosAssistance.input[4]}
              mytype="text"
              required={true}
              initialValue={initialValue}
              value={valueForm}
              name="value5"
              setValue={setValueForm}
            />
            <FormML.TextArea2
              color="#2C3E50"
              borderColor="#2A93F0"
              placeholder={sosAssistance.input[5]}
              // mytype=""
              required={true}
              initialValue={initialValue}
              value={valueForm}
              name="value6"
              setValue={setValueForm}
            />
            {sendOk ? <SendOk>Send Ok</SendOk> : null}

            <InputSubmit type="submit" value={sosAssistance.button} />
            <p></p>
          </FormML>
        </FormML.Container>
      </>
    )
  );
};

export default SOSAssistance;
