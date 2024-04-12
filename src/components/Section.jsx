export default function Section({ title, children, ...props }) {
  //Forwarded props/ proxy props pattern
  // ...props is used for :But this three dots thing here is built into JavaScript
  // and basically tells JavaScript
  // to collect all other props
  // that might be received on this section component
  // and merge them into a props object.
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
