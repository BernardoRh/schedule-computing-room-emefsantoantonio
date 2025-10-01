'use client'

import * as SignIn from '@clerk/elements/sign-in'
import { ClerkField, ClerkFieldError, ClerkInput, ClerkLabel, SignInButtonAction, SignInContainer, SignInStep } from './sign-up.styled'

export default function SignInPage() {
  return (
    <SignInContainer>
      <SignIn.Root>
        <SignInStep name="start">
            <ClerkField name="identifier">
                <ClerkLabel>Nome ou Email</ClerkLabel>
                <ClerkInput />
                <ClerkFieldError />
            </ClerkField>
            <ClerkField name="password">
                <ClerkLabel>Senha</ClerkLabel>
                <ClerkInput />
                <ClerkFieldError />
            </ClerkField>
            <SignInButtonAction submit>ENTRAR</SignInButtonAction>
        </SignInStep>
      </SignIn.Root>
    </SignInContainer>
  )
}