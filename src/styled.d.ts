import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            bg_1: string;
            bg_2: string;
            bg_3: string;
            shadow: string;
            txt_1: string;
            txt_2: string;
            txt_3: string;
            txt_4: string;
            txt_5: string;
            txt_6: string;
            white: string;
        }
    }
}