import styled from "styled-components";
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import * as SignUp from "@clerk/elements/sign-up";

export const SignContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 2rem;

    * {
        font-size: 1rem;
    }
`

export const SignInStep = styled(SignIn.Step)`
    width: 24rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const SignUpStep = styled(SignUp.Step)`
    width: 24rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ClerkLabel = styled(Clerk.Label)`
    display: flex;
    padding-left: 1rem;
    padding-bottom: 0.25rem;
`
export const ClerkInput = styled(Clerk.Input)`
   border-radius: 8px;
   border: 0;
   padding: 0.75rem 1rem;
   background-color: var(--input);
`

export const ClerkField = styled(Clerk.Field)`
    display: flex;
    flex-direction: column;
`

export const ClerkFieldError = styled(Clerk.FieldError)`
    font-size: 0.75rem;
    width: fit-content;
    height: fit-content;
    font-style: italic;
`

export const ClerkFieldErrorContainer = styled.div`
    width: fit-content;
    min-height: 1.5rem;
    max-height: 5rem;
    padding: 0.5rem 0.75rem;
`

export const SignInButtonAction = styled(SignIn.Action)`
    align-self: center;
    justify-self: center;
    display: flex;

    padding: 0.75rem 1rem;
    width: 12rem;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-style: bold;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
    border-color: var(--text);
    box-shadow: 0;

    &:hover {
        background: var(--text);
        color: var(--background);
    }
`

export const SignUpButtonAction = styled(SignUp.Action)`
    align-self: center;
    justify-self: center;
    display: flex;

    padding: 0.75rem 1rem;
    width: 12rem;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-style: bold;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
    border-color: var(--text);
    box-shadow: 0;

    &:hover {
        background: var(--text);
        color: var(--background);
    }
`