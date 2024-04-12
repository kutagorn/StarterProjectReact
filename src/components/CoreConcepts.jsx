import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {/*S<CoreConcept {...CORE_CONCEPTS[0]} />
      horter version. This pulls all the key-value pairs from the object 
      Prop names should be similar to the property names 
      of the object that contains the data you wanna set*/}
        {/* <CoreConcept
        title={CORE_CONCEPTS[1].title}
        description={CORE_CONCEPTS[1].description}
        image={CORE_CONCEPTS[1].image}
      />
      <CoreConcept
        title={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}
        image={CORE_CONCEPTS[2].image}
      />
      <CoreConcept
        title={CORE_CONCEPTS[3].title}
        description={CORE_CONCEPTS[3].description}
        image={CORE_CONCEPTS[3].image}
      /> */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
