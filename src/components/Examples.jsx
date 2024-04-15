import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Card from "./Card/Card";
import Tabs from "./Tabs";
import Section from "./Section";

export default function Examples() {
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
    <Section title="Examples" id="examples" className ="examples">
      <Tabs buttons={<>
      <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          jsx{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          props{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          state{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Experts"}
          onClick={() => handleExpert("Experts")}
        >
          Experts{" "}
        </TabButton>
        </>
        }> {tabContent}</Tabs>
        <menu>
        {/* <TabButton>Components</TabButton> <---Children usage*/}
        
      </menu>
     
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
      {expertContent}
    </Section>
      
  );
}
