
import Link from "next/link";
import { useRouter } from "next/router";
import  styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav className={styles.nav}>
        <Link href="/">
            Home
        </Link>
        <Link href="/user/login">
            Login
        </Link>
        <Link href="/user/signup">
            Sign up
        </Link>
        </nav>
    )
}
