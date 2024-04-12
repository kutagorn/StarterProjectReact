export default function Section({ title, children, }) { //Forwarded props/ proxy props pattern
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}