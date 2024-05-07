import './button.css'

type PropsButton = {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ children, onClick }: PropsButton) {
    return(
        <button onClick={ onClick }>
            {children}
        </button>
    )
}