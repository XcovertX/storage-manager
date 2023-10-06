export default function CustomerDashboardLayout({
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