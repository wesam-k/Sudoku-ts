import {createGlobalStyle, css} from 'styled-components'


export default createGlobalStyle`
${props => css`
html {
    height: 100%;

    body{
        display: flex;
        flex-direction: column;
        height:100%;
        margin:0;

        #root{
            background: ${props.theme.colors.background};
            color: ${props.theme.colors.black};
            height:100%;
            display: flex;
            font-family: sans-serif;
            justify-content:center;
            padding:15px;
            

        }

    }
}
`}
`