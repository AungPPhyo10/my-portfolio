export default function Spinner() {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#000" stroke-width="4" fill="none"/>
        <path fill="#000" d="M50 10A40 40 0 0 1 90 50H70A20 20 0 1 0 50 30V10z">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
        </path>
        </svg>
    )
}