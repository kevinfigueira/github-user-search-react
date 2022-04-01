import React, { ReactNode } from 'react';

//STYLES
import { ContainerMain } from '../assets/styles/global'

//TYPES
type typeContainer = {
    children: React.ReactNode
}

const Container = ({children}: typeContainer) => {
    return (
        <ContainerMain>
            {children}
        </ContainerMain>
    )
}

export default Container;