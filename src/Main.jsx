/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react'

const styled = css`
    margin-top: 50px;
    background-color: rgb(236, 236, 236);
    border-radius: 3px 3px 0 0;
    border-bottom: solid lime 2px;
    padding: 10px;
    text-align: center;
`;

function Main() {
    return ( 
        <div css={styled}>
            <b>
                Это шифр цезаря. Если Вы хотите зашифровать или расшифровать сообщение,
                то выберите действия и вставьте Ваше сообщение.
            </b>
        </div>
    );
}

export default Main;