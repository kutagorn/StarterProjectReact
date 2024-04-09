import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import Card from "./components/Card/Card.jsx";
import { useState } from "react";

function App() {
  const [ selectedTopic, setSelectedTopic] = useState('Please click a button');
  
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
    
  }
  console.log("App Component Executing");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            {/*Shorter version. This pulls all the key-value pairs from the object 
            Prop names should be similar to the property names 
            of the object that contains the data you wanna set*/}
            <CoreConcept
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
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton>Components</TabButton> <---Children usage*/}
            <TabButton label="Components" onSelect={() => handleSelect('components')} />
            <TabButton label="JSX" onSelect={() => handleSelect('jsx')} />
            <TabButton label="Props" onSelect={() => handleSelect('props')} />
            <TabButton label="State" onSelect={() => handleSelect('state')} />

          </menu>
          {selectedTopic}

        </section>
        <section>
          <h1>Available Experts</h1>
          <Card name="Kutay Can Kaynak">
            <p>
              Kaynak is a graduate of Software Engineering at the University of
              Beykent.
            </p>
            <p>
              <a href="mailto:kutaycankaynak@gmail.com">Email Kutay</a>
            </p>
          </Card>

          <Card name="Ozgur Ozbek">
            <p>
              Ozbek is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:ozgurozbek@gmail.com">Email Ozgur</a>
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
