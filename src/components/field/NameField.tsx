import React, { useEffect, useState } from 'react'
import { nameField } from '../../helpers/validate'
import style from './../form/form.module.scss'
interface INameProps {
  isSuccess: string
}
export default function NameField({ isSuccess }: INameProps) {
  const [valueName, setValueName] = useState('')
  const [errorNameField, setErrorNameField] = useState('')
  const [isSpaceKey, setIsSpaceKey] = useState(false)
  useEffect(() => {
    if (isSuccess) {
      setValueName('')
      setErrorNameField('')
    }
  }, [isSuccess])
  function nameFieldHandler(e: React.ChangeEvent<HTMLInputElement>) {


    setValueName(e.target.value.toUpperCase())
    setErrorNameField(nameField(e.target.value.toUpperCase()))

    if (e.target.value.split(' ').length > 1) {
      setIsSpaceKey(true)
    } else {
      setIsSpaceKey(false)
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e)
    const invalidChars = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж ', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', ' б ', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    if (isSpaceKey) {
      invalidChars.push(' ')
    }
    if (invalidChars.indexOf(e.key) !== -1) {
      e.preventDefault()
      setErrorNameField('Только латинские буквы')
    }
  }

  return (
    <div>
      <div className={style.field}>
        <label htmlFor='name'>Имя Фамилия:</label>
        <div>
          <input id='name' type='text' value={valueName} onChange={e => nameFieldHandler(e)} onKeyPress={e => handleKeyPress(e)} />
          {errorNameField && <div>{errorNameField}</div>}
        </div>

      </div>
    </div>
  )
}
