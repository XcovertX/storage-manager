export default function LogoutLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav></nav>
            {children}
        </section>
    )
}