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
      <img
        src="./public/imgArnaud.png"
        className="img-dream-team"
        alt="Arnaud"
      />
    ),
    description: "Il est le maitre des shadows de la Wild Code School.",
  },
  {
    name: "Thomas",
    age: 21,
    hobbie: "Utiliser Biome",
    image: (
      <img
        src="./public/imgThomas.png"
        className="img-dream-team"
        alt="Thomas"
      />
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
        className="img-dream-team"
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
      <img
        src="./public/imgAlicia.png"
        className="img-dream-team"
        alt="Alicia"
      />
    ),
    description: "Elle est la plus patiente de la Wild Code School.",
  },
];

function AboutUs() {
  return (
    <>
      <h1 className="title">La dream team</h1>
      <div className="dream-team">
        {dreamTeam.map((dreamteam) => (
          <section key={dreamteam.name} className="container">
            <h2 className="name">{dreamteam.name}</h2>
            {dreamteam.image}
            <p className="card-container">Âge : {dreamteam.age}</p>
            <p className="card-container">Hobbie : {dreamteam.hobbie}</p>
            <p className="card-container">{dreamteam.description}</p>
          </section>
        ))}
      </div>
      <h1 className="title">Nous contacter</h1>
      <section className="contact-us">
        <form action="" className="form-contact">
          <label htmlFor="last-name">Nom :</label>
          <input
            name="last-name"
            className="input"
            type="text"
            placeholder="Nom"
          />

          <label htmlFor="first-name">Prénom :</label>
          <input
            name="first-name"
            className="input"
            type="text"
            placeholder="Prénom"
          />

          <label htmlFor="email">Email :</label>
          <input className="input" type="email" placeholder="Email" />

          <label htmlFor="contact">Raison de la demande de contact :</label>
          <input
            name="contact"
            className="input contact"
            type="text"
            placeholder="Taper votre message ici"
          />

          <button type="button" className="button-next">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}

export default AboutUs;
