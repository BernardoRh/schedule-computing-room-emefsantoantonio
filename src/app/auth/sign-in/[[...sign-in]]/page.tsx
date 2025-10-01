'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { ClerkField, ClerkFieldError, ClerkInput, ClerkLabel, SignInContainer, SignInStep } from './sign-up.styled'

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
            <SignIn.Action submit>Entrar</SignIn.Action>
        </SignInStep>
      </SignIn.Root>
    </SignInContainer>
  )
}