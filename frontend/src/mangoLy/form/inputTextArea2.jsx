import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MQ } from "../../config/media";

const ContainerInput = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${MQ.md} {
    width: 370px;
  }
  label {
    position: absolute;
    top: 25px;
    left: 25px;
    color: #9a9494;
    transform: translateY(-50%);
    transform-origin: left center;
    transition: transform 0.3s;
    font-size: 16px;
    @media ${MQ.md} {
      font-size: 16px;
    }
    ${props =>
      props.focus &&
      css`
        color: #2a93f0;
        transform: translateY(-100%) scale(0.6);
      `}
      @media ${MQ.md} {
        ${props =>
          props.focus &&
          css`
            color: #2a93f0;
            transform: translateY(-100%) scale(0.7);
          `}
      }
  }
`;
const InputContainerSC = styled.textarea`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  height: 150px;
  box-sizing: border-box;
  border: 2px solid #e2e2e2;
  outline: none;
  padding: 30px 25px 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.color};
  &:focus {
    border: 2px solid ${props => props.borderColor};
  }
  &::placeholder {
    color: #e2e2e2;
  }
  @media ${MQ.sm} {
    /* width: 370px; */
    font-size: 16px;
  }
  @media ${MQ.md} {
    /* width: 370px; */
    height: 200px;
    font-size: 16px;
  }
`;

function InputTextAreaContainer2({
  color,
  borderColor,
  placeholder,

  required,
  initialValue,
  value,
  name,
  setValue
}) {
  const [focus, setFocus] = useState(false);

  function handleOnBlur() {
    if (value[name] === "") {
      setFocus(false);
    }
  }
  return (
    <ContainerInput focus={focus}>
      {/* <label htmlFor={placeholder + "idLabel"}>{placeholder || ""}</label> */}
      <InputContainerSC
        color={color}
        borderColor={borderColor}
        // type={mytype || "text"}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => handleOnBlur()}
        id={placeholder + "idLabel"}
        value={value[name]}
        onChange={e => setValue({ ...value, [name]: e.target.value })}
        required={required || null}
      />
    </ContainerInput>
  );
}

export default InputTextAreaContainer2;
