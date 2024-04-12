import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Input from "./components/Input.jsx";


function App() {
  

 
  

  return (
    < /* Use Fragment instead of div for cleaner inspect result in browser. You can not just delete the div, you have to have a parent object */>  
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
        <Input type="text" placeholder="Your name"/>
        <Input richText placeholder="Your message"/>

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
    </>
  );
}

export default App;
