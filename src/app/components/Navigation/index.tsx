'use client'

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Header } from "./navigation.styled";


export function Navigation(){
    return(
        <Header>
            <SignedOut>
                <SignInButton>
                    <button>
                        Entrar
                    </button>
                </SignInButton>
                <SignUpButton>
                    <button>
                        Registrar-se
                    </button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </Header>
    )
}