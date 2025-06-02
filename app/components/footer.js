export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 md:text-xl text-sm p-2">
        <aside>
            <p>
                Developed with <a href="https://nextjs.org/" target="_blank" className="link link-info">Next.js</a> and <a href="https://daisyui.com/" target="_blank" className="link link-info">DaisyUI</a> 
                © {new Date().getFullYear()} - Aung Pyae Phyo
            </p>
        </aside>
        </footer>
    )
}