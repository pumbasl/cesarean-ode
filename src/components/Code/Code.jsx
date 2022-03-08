import React, { useState } from 'react';
import { css } from '@emotion/react'

import { codeEncrypt, codeDecrypt } from '../../service/codeEncryptAndDecrypt';

const styled = {
    component: css`
        margin-top: 10px;
        background-color: rgb(236, 236, 236);
        border-radius: 0 0 3px 3px;
        color: black;
        padding: 10px;
        text-align: center;
    `,
    TextArea: css`
        width: 100%;
        height: 100px;
        resize: vertical;
    `,

    ErrorComponent: css`
        margin-bottom: 8px;
        background-color: #261c2c;
        color: white;
        border-radius: 3px;
        padding: 10px;
    `,

    labels: css`
        margin-bottom: 5px;
        label {
            margin-right: 5px;
        }
    `,

    resultTextArea: css`
        width: 99%;
        height: 100px;
        resize: vertical;
    `,

    button: css`
        padding: 10px 30px 10px 30px;
        background-color: #A3423C;
        color: white;
        border: 0;
        border-radius: 3px;

        &:hover{
            transition: all .3s ease-out;
            background-color: #DE834D;
        }
    `
};

export default function Code(){
    const [ text, setText ] = useState('');
    const [ type, setType ] = useState('');
    const [ encryptStep, setEncryptStep ] = useState(3);
    const [ result, setResult ] = useState();
    const [ errors, setErrors ] = useState([]);

    const ArrayOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleSubmit = (e) => {
        e.preventDefault();

        if(type === '' || encrypt === '') {
            setErrors([
                {
                    message: 'Вы не заполнили поле сообщения или не выбрали тип обработки.'
                }
            ]);
        } else {
            if(type === 'encrypt'){
                setResult(codeEncrypt(text, encryptStep));
            }
            if(type === 'decrypt'){
                setResult(codeDecrypt(text, encryptStep));
            }
        }
    };

    const ErrorComponent = () => (
        errors.map((error, index) => (
            <div key={index} css={styled.ErrorComponent}>
                {error.message}
            </div>
        ))
    );

    return(
        <div css={styled.component}>
            <form onSubmit={handleSubmit}>
                
                <div css={styled.labels}>
                    <input type='radio' id="encrypt" name="type" value="encrypt" onChange={(e => setType(e.target.value))} />
                    <label htmlFor="encrypt">Зашифровать</label>

                    <input type='radio' id="decrypt" name="type" value="decrypt" onChange={(e => setType(e.target.value))} />
                    <label htmlFor="decrypt">Расшифровать</label>
                </div>

                <div css={styled.labels}>
                    <label htmlFor="selectSteps">Шаг сдвига:</label>
                    <select id="selectSteps" value={encryptStep} onChange={(e) => setEncryptStep(Number(e.target.value))}>
                        {ArrayOptions.map((number) => (
                            <option value={number} key={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='row'>
                    <div className='col'>
                        <textarea
                            css={styled.TextArea}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Введите Ваше сообщение"
                        />
                    </div>

                    <div className='col'>
                        <textarea 
                            css={styled.resultTextArea}
                            value={result}
                            readOnly
                            placeholder="Тут будет Ваш результат"
                        />
                    </div>
                </div>

                <hr />

                { errors.length !== 0 ? (<ErrorComponent />) : (null) }
                <button css={styled.button} type="submit">Отправить</button>
            </form>
        </div>
    );
}