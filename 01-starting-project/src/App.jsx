import arrayOfObj from "./data.js";

import componentsImg from "./assets/react-core-concepts.png";
// import reactCore from "./assets/react-core-concepts.png";
// import jsxImg from "./assets/jsx-ui.png";
// import stateImg from "./assets/state-mgmt.png";
const reactDescription = ["Fundamentals", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const desc = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={componentsImg} alt="Stylized atom" />
      <h1>React Fundamentals</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function CoreConcept({ img, title, desc }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}

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
          <CoreConcept
            img={arrayOfObj[1].img}
            title={arrayOfObj[1].title}
            desc={arrayOfObj[1].desc}
          />

          <CoreConcept
            img={arrayOfObj[2].img}
            title={arrayOfObj[2].title}
            desc={arrayOfObj[2].desc}
          />
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
