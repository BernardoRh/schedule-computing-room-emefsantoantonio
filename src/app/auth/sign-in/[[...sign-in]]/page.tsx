'use client'

import * as SignIn from '@clerk/elements/sign-in'
import { ClerkField, ClerkFieldError, ClerkFieldErrorContainer, ClerkInput, ClerkLabel, SignContainer, SignInButtonAction, SignInStep } from '../../auth.styled'

export default function SignInPage() {
  return (
    <SignContainer>
      <SignIn.Root>
        <SignInStep name="start">
            <ClerkField name="identifier">
                <ClerkLabel>Nome ou Email</ClerkLabel>
                <ClerkInput />
                <ClerkFieldErrorContainer>
                  <ClerkFieldError lang="en"/>
                </ClerkFieldErrorContainer>
            </ClerkField>
            <ClerkField name="password">
                <ClerkLabel>Senha</ClerkLabel>
                <ClerkInput />
                <ClerkFieldErrorContainer>
                  <ClerkFieldError lang="pt-BR"/>
                </ClerkFieldErrorContainer>
            </ClerkField>
            <SignInButtonAction submit>ENTRAR</SignInButtonAction>
        </SignInStep>
      </SignIn.Root>
    </SignContainer>
  )
}