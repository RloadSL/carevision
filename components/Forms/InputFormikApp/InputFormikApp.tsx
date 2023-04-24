import TextApp from "@/components/TextApp";
import { FieldHookConfig, useField } from "formik";
import Image from "next/image";
import React, { useEffect, useState, useRef, useCallback } from "react";
import style from "./inputFormikApp.module.scss";

type TYPEINPUT = "email" | "password" | "number" | "text";

export interface INPUTBLOCKPROPS {
  labelID: string;
  onChange?: Function;
  onBlur?: Function;
  type: TYPEINPUT;
  error?: string | undefined;
  placeholder?: string;
  name: string;
  maxLength?: number;
  inputStyle?: "default" | "code";
  icon?: any;
  helper?: string;
  value?: string;
  disabled?: boolean;
}

/**
 * Función principal del componente de la aplicación Input: Text | password | number | email del formulario
 * @param  labelID Key del json de traducción
 * @param  onChange Función para controlar el onchange de los inputs
 * @param  onBlur Función para controlar la pérdida del foco en los inputs
 * @param  type Tipo de campo de formulario
 * @param  error Error del campo de formulario
 * @param  placeholder Placeholder del campo
 * @param  name Name del campo
 * @param  inputStyle Estilo CSS del input default | code
 * @param  maxLength Longitud de entrada
 * @param inputStyle Estilo del input "default" | "code";
 * @param icon Icono del input si lo tiene;
 * @param helper Texto de ayuda
 * @param value Valor del input;
 * @param disabled Prop para deshabilitar el input en caso necesario
 * @returns
 */

const InputFormikApp = ({
  labelID,
  icon,
  error,
  placeholder,
  name,
  onChange,
  onBlur,
  inputStyle,
  type = "text",
  disabled,
  maxLength,
  helper,
  value
}: INPUTBLOCKPROPS) => {
  const [field, meta] = useField({ name });
  const [isFloating, setIsFloating] = useState("");

  console.log(labelID)

  useEffect(() => {
    setIsFloating(field.value ? `${style.filled} ${style.label}` : style.label);
  }, [field.value]);

  return (
    <>
      {maxLength && (
        <div className={style.infoChar}>
          <small>{maxLength} caracteres máximo</small>
        </div>
      )}
      <div
        className={`${style.inputContainer} ${error ? style.hasError : ""} ${
          error ? style.hasError : ""
        } ${inputStyle ? style[inputStyle] : ""}`}
      >
        {labelID && (
          <label htmlFor={name} className={`${icon ? style.iconLabel : style.label} ${isFloating}`}>
            <span>
              <TextApp labelID={labelID}/>
            </span>
          </label>
        )}
        <div className="flex-container row align-center">
          {icon != undefined && (
            <div className={`${style.icon}`}>
              <Image className={style.icon} src={icon} alt="" />
            </div>
          )}
          <input
            {...field}
            maxLength={maxLength}
            max={maxLength}
            type={type}
            disabled={disabled}
            name={name}
            autoComplete={"autocomplete"}
            placeholder={placeholder}
            step={0.01}
            onBlur={() => {
              if (onBlur) onBlur();
            }}
            className={style.input}
          />
        </div>
        {helper && !meta.error && (
          <small className={style.helper}>
            {" "}
            helper{" "}
          </small>
        )}
      </div>
      {meta.error && meta.touched && <div className={style.error}>{meta.error}</div>}
    </>
  );
};

export default InputFormikApp;
