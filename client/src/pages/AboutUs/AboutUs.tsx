import "./AboutUs.css";

interface DreamTeamProps {
  name: string;
  age: number;
  hobbie: string;
  image: JSX.Element;
  description: string;
}

const dreamTeam: DreamTeamProps[] = [
  {
    name: "Arnaud",
    age: 31,
    hobbie: "Parler en public",
    image: (
      <img src="./public/imgArnaud.png" className="imgDreamTeam" alt="Arnaud" />
    ),
    description: "Il est le fondateur de la Wild Code School.",
  },
  {
    name: "Thomas",
    age: 21,
    hobbie: "Utiliser Biome",
    image: (
      <img src="./public/imgThomas.png" className="imgDreamTeam" alt="Thomas" />
    ),
    description: "Il est le meilleur ami de la Wild Code School.",
  },
  {
    name: "Timothey",
    age: 23,
    hobbie: "Rédiger des poèmes pour corriger des quêtes",
    image: (
      <img
        src="./public/imgTimothey.png"
        className="imgDreamTeam"
        alt="Timothey"
      />
    ),
    description: "Il est le poète de la Wild Code School.",
  },
  {
    name: "Alicia",
    age: 30,
    hobbie: "Attendre un an pour mettre à jour son MAC",
    image: (
      <img src="./public/imgAlicia.png" className="imgDreamTeam" alt="Alicia" />
    ),
    description: "Elle est la plus patiente de la Wild Code School.",
  },
];

function AboutUs() {
  return (
    <>
      <h1 className="title">La dream team</h1>
      <div className="dreamTeam">
        {dreamTeam.map((dreamteam) => (
          <section key={dreamteam.name} className="container">
            <h2 className="name">{dreamteam.name}</h2>
            {dreamteam.image}
            <p className="cardContainer">Âge : {dreamteam.age}</p>
            <p className="cardContainer">Hobbie : {dreamteam.hobbie}</p>
            <p className="cardContainer">{dreamteam.description}</p>
          </section>
        ))}
      </div>
      <h1 className="title">Nous contacter</h1>
      <section className="contactUs">
        <p>Nom :</p> <input className="input" type="text" placeholder="Nom" />
        <p>Prénom :</p>{" "}
        <input className="input" type="text" placeholder="Prénom" />
        <p>Mail :</p> <input className="input" type="email" placeholder="Nom" />
        <p>Raison de la demande de contact :</p>{" "}
        <input
          className="inputContact"
          type="text"
          placeholder="Taper votre message ici"
        />
        <br />
        <button type="button" className="button">
          Envoyer
        </button>
      </section>
    </>
  );
}

export default AboutUs;
