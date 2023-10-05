export default function ManagerDashboardLayout({
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