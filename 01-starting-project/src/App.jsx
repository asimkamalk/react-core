import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import arrayOfObj from "./data.js";

// import reactCore from "./assets/react-core-concepts.png";
// import jsxImg from "./assets/jsx-ui.png";
// import stateImg from "./assets/state-mgmt.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        {/* <ul>
          <CoreConcept
            img={arrayOfObj[0].img}
            title={arrayOfObj[0].title}
            desc={arrayOfObj[0].desc}
          />
        </ul> */}

        {/* <ul>
          <CoreConcept {...arrayOfObj[1]} />
        </ul> */}

        <ul>
          {arrayOfObj.map((item) => (
            <CoreConcept key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
