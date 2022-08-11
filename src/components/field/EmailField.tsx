import React, { useEffect, useState } from 'react'
import { emailField } from '../../helpers/validate'
import style from './../form/form.module.scss'
interface IEmailProps {
  isSuccess: string
}
export default function EmailField({ isSuccess }: IEmailProps) {

  const [valueEmail, setValueEmail] = useState('')
  const [errorEmailField, setErrorEmailField] = useState('')
  useEffect(() => {
    if (isSuccess) {
      setValueEmail('')
      setErrorEmailField('')
    }
  }, [isSuccess])
  function emailFieldHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValueEmail(e.target.value)
    emailField(e.target.value, setErrorEmailField)
  }
  return (
    <div className={style.field}>
      <label htmlFor='email'>Email:</label>
      <div>  <input id='email' type='email' value={valueEmail} onChange={e => emailFieldHandler(e)} formNoValidate={true} />
        {errorEmailField && <div>{errorEmailField}</div>}

      </div>

    </div>
  )
}
