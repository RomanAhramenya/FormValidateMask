import React, { useEffect, useRef, useState } from 'react'
import { stringReplacement } from '../../helpers/validate'
import style from './../form/form.module.scss'
interface ITelProps {
    isSuccess: string
}
function TelField({ isSuccess }: ITelProps) {
    const [valueTel, setValueTel] = useState('')
    const [position, setPosition] = useState(3)
    const [errorTelField, setErrorTelField] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        if (isSuccess) {
            setValueTel('')
            setErrorTelField('')
            setPosition(3)
        }
    }, [isSuccess])

    function telFieldHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let text = stringReplacement(e.target.value)

        if (text) {
            setValueTel(text)

            switch (text.match(/-?\d+(\.\d+)?/g)?.join('').length) {
                case 1:
                    setPosition(3)
                    break;
                case 2:
                    setPosition(4)
                    break;
                case 3:
                    setPosition(5)
                    break;
                    break;
                case 4:
                    setPosition(6)
                    break;
                case 5:
                    setPosition(9)
                    break;
                case 6:
                    setPosition(10)
                    break;
                case 7:
                    setPosition(11)
                    break;
                case 8:
                    setPosition(13)
                    break;
                case 9:
                    setPosition(14)
                    break;
                case 10:
                    setPosition(16)
                    break;
                case 11:
                    setPosition(17)
                    break;
                default:
                    break;
            }

        }


    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(position, position);
        }
    }, [position])
    return (
        <div className={style.field}>
            <label htmlFor='tel'>Номера телефона:</label>
            <input ref={inputRef} id='tel' type='tel' value={valueTel} onChange={e => telFieldHandler(e)} placeholder="+7(___)___-__-__" />
        </div>
    )
}

export default TelField