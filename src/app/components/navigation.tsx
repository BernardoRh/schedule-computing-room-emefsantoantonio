import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function Navigation(){
    return(
        <header className="">
            <SignedOut>
                <SignInButton>
                    <button>
                        Entrar
                    </button>
                </SignInButton>
                <SignUpButton>
                    <button className="">
                        Registrar-se
                    </button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}