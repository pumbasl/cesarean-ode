/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react'

const styled = css`
    margin-top: 10px;
    background-color: rgb(236, 236, 236);
    border-radius: 0 0 3px 3px;
    color: black;
    padding: 10px;
    text-align: center;
`;

const styledTextArea = css`
    width: 50%;
    height: 100px;
`;

export default function Code(){
    const [ encrypt, setEncrypt ] = useState('');
    const [ type, setType ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div css={styled}>
            <form onSubmit={handleSubmit}>
                <input type='radio' name="type" value="encrypt" onChange={(e => setType(e.target.value))} />
                <label htmlFor="encrypt">Зашифровать</label>

                <input type='radio' name="type" value="decrypt" onChange={(e => setType(e.target.value))} />
                <label htmlFor="decrypt">Расшифровать</label>

                <br />
                <textarea
                    css={styledTextArea}
                    value={encrypt}
                    onChange={(e) => setEncrypt(e.target.value)}
                    placeholder="Введите Ваше сообщение"
                />

                <hr />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}