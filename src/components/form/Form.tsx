import React, { useState } from 'react'
import { sendRequest } from '../../helpers/promise'
import DateField from '../field/DateField'
import EmailField from '../field/EmailField'
import MessageField from '../field/MessageField'
import NameField from '../field/NameField'
import TelField from '../field/TelField'
import style from './form.module.scss'
export default function Form() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [isSuccess, setIsSuccess] = useState('')
    const [isError, setIsError] = useState('')
    const requestURL = 'https://jsonplaceholder.typicode.com/users'


    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsDisabled(true)
        let body = {
            name: e.target[0].value,
            email: e.target[1].value,
            tel: e.target[2].value,
            date: e.target[3].value,
            message: e.target[4].value
        }
        console.log(body)
        sendRequest("POST", requestURL, {
            name: 'Roman',
            age: 26
        })
            .then(data => {
                setIsDisabled(false)
                setIsSuccess('success')
                setIsError('')
                e.target.reset()
                console.log(data)
            }
            )
            .catch(err => {
                setIsDisabled(false)
                setIsSuccess('')
                setIsError(' error')
                console.log(err)
            })
        console.log(e)

    }
    return (
        <form noValidate onSubmit={e => handleSubmit(e)} className={style.container}>
            <h2>Форма обратной связи</h2>
            <NameField isSuccess={isSuccess} />
            <EmailField isSuccess={isSuccess} />
            <TelField isSuccess={isSuccess} />
            <DateField isSuccess={isSuccess} />
            <MessageField isSuccess={isSuccess} />
            {isSuccess && <div className={style.responseSuccses}>{isSuccess}</div>}
            {isError && <div className={style.responseError}>{isError}</div>}
            <div>
                <input disabled={isDisabled} type='submit' />
            </div>

        </form>
    )
}
