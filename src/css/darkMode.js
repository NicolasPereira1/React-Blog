export const darkMode = {
    name: '🌛',
    body : {
        backgroundColor: 'black',
        color: 'white'
    },
    post : {
        border: 'white solid 1px',
        '&:hover' : {
            backgroundColor: '#171717',
            cursor: 'pointer'
        }
    },
    inputButton : {
        backgroundColor: '#333333',
        color: 'white',
    },
    '::placeholder' : {
        color: 'white'
    },
    disabled : {
        cursor: 'not-allowed',
        backgroundColor: '#737373',
        color: 'darkgrey'
    },
    nav : {
        a : {
            color: 'white',
            borderRight: '1px solid white',
        }
    },
    spinner : {
        border: '8px solid #525252',
        borderRightColor: '#ffffff'
    },
    toggleDiv : {
        backgroundColor: '#424572'
    },
    themeButton : {
        right: '2px'
    },
    separator : {
        borderLeft: 'solid 1px white',
    }
};