import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Card from "./Card/Card";

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
      {expertContent}
    </section>
  );
}
