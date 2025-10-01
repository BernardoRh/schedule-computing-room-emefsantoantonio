import styled from "styled-components";
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export const SignInContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 8rem;

    * {
        font-size: 1.25rem;
    }
`

export const SignInStep = styled(SignIn.Step)`
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
   background-color: var(--input)
`

export const ClerkField = styled(Clerk.Field)`
    display: flex;
    flex-direction: column;
`

export const ClerkFieldError = styled(Clerk.FieldError)`
   
`

export const SignInButtonAction = styled(SignIn.Action)`
    display: flex;
    padding: 1rem 2rem;
`