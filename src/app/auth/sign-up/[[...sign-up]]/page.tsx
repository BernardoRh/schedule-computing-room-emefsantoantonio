'use client'

import * as SignUp from "@clerk/elements/sign-up"
import { ClerkField, ClerkFieldError, ClerkFieldErrorContainer, ClerkInput, ClerkLabel, SignContainer, SignUpButtonAction, SignUpStep } from "../../auth.styled"

export default function SignUpPage(){
    return(
        <SignContainer>
            <SignUp.Root>
                <SignUpStep name="start">
                    <ClerkField name="username">
                        <ClerkLabel>Primerio Nome</ClerkLabel>
                        <ClerkInput/>
                        <ClerkFieldErrorContainer>
                            <ClerkFieldError/>
                        </ClerkFieldErrorContainer>
                    </ClerkField>
                    <ClerkField name="emailAddress">
                        <ClerkLabel>E-mail</ClerkLabel>
                        <ClerkInput/>
                        <ClerkFieldErrorContainer>
                            <ClerkFieldError/>
                        </ClerkFieldErrorContainer>
                    </ClerkField>
                    <ClerkField name="password">
                        <ClerkLabel>Senha</ClerkLabel>
                        <ClerkInput/>
                        <ClerkFieldErrorContainer>
                            <ClerkFieldError/>
                        </ClerkFieldErrorContainer>
                    </ClerkField>
                    <ClerkField name="confirmPassword">
                        <ClerkLabel>Confirmar Senha</ClerkLabel>
                        <ClerkInput/>
                        <ClerkFieldErrorContainer>
                            <ClerkFieldError/>
                        </ClerkFieldErrorContainer>
                    </ClerkField>
                    <SignUp.Captcha />
                    <SignUpButtonAction submit>ENTRAR</SignUpButtonAction>
                </SignUpStep>
            </SignUp.Root>
        </SignContainer>
    )
}