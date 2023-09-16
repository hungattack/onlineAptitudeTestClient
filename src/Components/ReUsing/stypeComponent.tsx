'use client'
import styled from 'styled-components'

export const Div = styled.div<{ css?: string; display?: string; align?: string; justify?: string }>`
    display: ${(props) => props.display || 'flex'};
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'center'};
    ${(props) => props.css};
`
export const P = styled.p<{ size?: string; css?: string }>`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    ${(props) => props.css};
`
export const H3 = styled.p<{ size?: string; css?: string }>`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    ${(props) => props.css};
`
