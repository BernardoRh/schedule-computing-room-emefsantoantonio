import { SignedOut /* SignInButton, SignUpButton */ } from "@clerk/nextjs";
import styled from "styled-components";


export const Header = styled.header`
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0.5rem;
`

export const SignedOutContainer = styled(SignedOut)`

`

/* export const SignInButtonContainer = styled(SignInButton)`

`

export const SignUpButtonContainer = styled(SignUpButton)`

` */

export const Button = styled.button`
    size: 1rem;
    padding: 0.75rem 1rem;
    background: transparent;
    color: var(--text);
    border: 0;
    cursor: pointer;
    box-shadow: 0;
`