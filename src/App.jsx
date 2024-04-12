import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import Card from "./components/Card/Card.jsx";
import { useState, Fragment } from "react";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [showExperts, setShowExperts] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  function handleExpert(selectedExpert) {
    setShowExperts(selectedExpert);
  }
  console.log("App Component Executing");

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title} </h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  let expertContent = null;
  if (showExperts) {
    expertContent = (
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
    );
  }

  return (
    <Fragment /* Use Fragment instead of div for cleaner inspect result in browser. You can not just delete the div, you have to have a parent object */>  
      <Header/>
      <main>
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton>Components</TabButton> <---Children usage*/}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              jsx{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              props{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              state{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Experts"}
              onSelect={() => handleExpert("Experts")}
            >
              Experts{" "}
            </TabButton>
          </menu>
          {tabContent}
          {/* {!selectedTopic ? <p>Please select a topic.</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/*If selected Topic ===null show <p> if not render nothing*/}
        </section>
        {expertContent}
        {/* {showExperts === 'Experts' ?(<section>
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
        </section>) : null} */}
      </main>
    </Fragment>
  );
}

export default App;
