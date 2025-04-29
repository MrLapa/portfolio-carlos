import React from "react"
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"

type InputProps<T extends FieldValues> = {
  id: Path<T>
  label: string
  register: UseFormRegister<T>
  type?: string
  placeholder?: string
  error?: FieldError
}

const Input = <T extends FieldValues>({
  id,
  label,
  register,
  type = "text",
  placeholder,
  error,
}: InputProps<T>) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        {...register(id)}
        id={String(id)}
        type={type}
        placeholder={placeholder}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      {error && <span className="text-danger">{error.message}</span>}
    </>
  )
}

export default Input
