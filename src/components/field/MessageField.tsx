import React, { useEffect, useState } from 'react'
import { messageField } from '../../helpers/validate'
import style from './../form/form.module.scss'
interface IDateProps {
    isSuccess: string
}
export default function MessageField({ isSuccess }: IDateProps) {
    const [valueMessage, setValueMessage] = useState('')
    const [errorMessageField, setErrorMessageField] = useState('')



    useEffect(() => {
        if (isSuccess) {
            setValueMessage('')
            setErrorMessageField('')

        }
    }, [isSuccess])
    function messageFieldHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValueMessage(e.target.value)
        setErrorMessageField(messageField(e.target.value, 3, 300))

    }
    return (
        <div className={style.field}>
            <label htmlFor='message'>Сообщение:</label>
            <div>
                <textarea id='message' value={valueMessage} onChange={e => messageFieldHandler(e)} cols={70} rows={10} />
                {errorMessageField && <div>{errorMessageField}</div>}
            </div>

        </div>
    )
}
