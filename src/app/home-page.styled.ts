import styled from "styled-components";

export const HomePageCointainer = styled.main`
    width: 100vw;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    color: var(--text);
    letter-spacing: 0.25rem;
    font-weight: bolder;   
`

export const CalendarDaysContainer = styled.div`
    width: 24rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Day = styled.p`
    padding: 1rem;
    font-size: 0.5rem;
    border: 2px var(--text);
    color: var(--text);
`