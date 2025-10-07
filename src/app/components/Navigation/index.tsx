'use client'

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button, Header } from "./navigation.styled";


export function Navigation(){
    return(
        <Header>
            <SignedOut>
                <SignInButton>
                    <Button>
                        Entrar
                    </Button>
                </SignInButton>
                <SignUpButton>
                    <Button>
                        Registrar-se
                    </Button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </Header>
    )
}