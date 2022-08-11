import React, { useEffect, useState } from 'react'
import style from './../form/form.module.scss'
interface IDateProps {
  isSuccess: string
}
export default function DateField({ isSuccess }: IDateProps) {
  const [valueDate, setValueDate] = useState('')
  const [errorDateField, setErrorDateField] = useState('')
  useEffect(() => {
    if (isSuccess) {
      setValueDate('')
      setErrorDateField('')

    }
  }, [isSuccess])
  function dateFieldHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValueDate(e.target.value)
  }
  return (
    <div className={style.field}>
      <label htmlFor='date'>Дата рождения:</label>
      <input id='date' type='date' value={valueDate} onChange={e => dateFieldHandler(e)} />
    </div>
  )
}
