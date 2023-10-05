'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function HomePage() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Welcome to Your Storage Facility App</h1>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/client/dashboard'>button</Link>
    </div>
  );
}

export default HomePage;
