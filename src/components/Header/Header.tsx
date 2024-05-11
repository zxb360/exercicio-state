import './header.css';

type PropsHeader = {
    children: React.ReactNode;
}

export default function Header({ children }: PropsHeader) {
    return (
        <header className="header">
            {children}
        </header>
    )
}