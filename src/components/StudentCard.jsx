import './StudentCard.css'


function StudentCard(props) {
  const ville = props.ville || "ville non spécifiée";
  const groupe = props.grupe || "groupe non spécifié";
  const classe = props.classe || "classe non spécifiée";

  return (

    <div>
      <h1>Fiche Etudiant</h1>
      <img className="student-logo" src={props.image} alt={`${props.prenom} ${props.nom}`} />

      <p>Nom: {props.nom}</p>

      <p>Prénom: {props.prenom}</p>

      <p>Âge: {props.age}</p>

      <p>Email: {props.email}</p>

      <p>Phone: {props.phone}</p>

      <p>Filière: {props.filiere}</p>

      <p>Année d'étude: {props.AnneeEtude}</p>

      <p>Classe: {classe}</p>

      <p>Groupe: {groupe}</p>

      <p>Ville: {ville}</p>
      <a href="mailto:houssemeddinebelkadhi256@gmail.com">      <button> contacter </button> </a>
    </div>
  );
}

export default StudentCard
