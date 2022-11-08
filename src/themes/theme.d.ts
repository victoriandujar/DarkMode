import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            header: string;
        },
        font: {
            primary: string;
            secondary: string;
        },
        component: {
            primary: string;
            color: string;
        }
    }
}