import React, { useState } from "react";
import { View } from "react-native";

import { FormContainer } from "./FormComponents/FormContainer";
import { FormTitle } from "./FormComponents/FormTitle";
import { Input } from "./FormComponents/Input";
import { ShowPasswordButton } from "./FormComponents/ShowPasswordButton";
import { SubmitButton } from "./FormComponents/SubmitButton";
import { RefLink } from "./FormComponents/RefLink";

initRegister = {
  email: "",
  password: "",
};

export function LoginScreen({ showKeyboard, isKeyboardShown, toggleForm }) {
  const [register, setRegister] = useState(initRegister);
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [btnCaption, setBtnCaption] = useState("Показати");

  const processFormData = () => {
    console.log(register);
    setRegister(initRegister);
  };

  const toggleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
    isPasswordShown ? setBtnCaption("Приховати") : setBtnCaption("Показати");
  };

  const setInputValue = (name, value) => {
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));
  };

  return (
    <FormContainer isKeyboardShown={isKeyboardShown}>
      <FormTitle title="Увійти" />
      <Input
        keyName="email"
        placeholder="Адреса електронної пошти"
        value={register.email}
        mode="email"
        setInputValue={setInputValue}
        showKeyboard={showKeyboard}
      />
      <Input
        keyName="password"
        placeholder="Пароль"
        value={register.password}
        mode="text"
        secureTextEntry={isPasswordShown}
        setInputValue={setInputValue}
        showKeyboard={showKeyboard}
      >
        <ShowPasswordButton
          toggleShowPassword={toggleShowPassword}
          btnCaption={btnCaption}
        />
      </Input>
      {!isKeyboardShown && (
        <View>
          <SubmitButton processFormData={processFormData} btnCaption="Увійти" />
          <RefLink
            text="Немає акаунту?"
            link="Зареєструватися"
            toggleForm={toggleForm}
          />
        </View>
      )}
    </FormContainer>
  );
}
