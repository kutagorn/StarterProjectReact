export default function CoreConcept({ image, title, description }) {
  /*Used onject destructuring sytax to make the function shorter*/
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
