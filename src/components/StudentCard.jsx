import './StudentCard.css'
import archlinux from '../assets/arch-linux.png'

class student {
  nom ="Belkadhi";
  prenom ="Houssem Eddine";
  age = 20;
  email ="houssemeddinebelkadhi256@gmail.com";
  phone ="94727471";
  filiere ="computer science";
  AnneeEtude = 2;
  grupe = "G1";
  classe = "A";
  ville = "mahdia";
}

function StudentCard() {
  const StudentData = new student()

  return (
    <div>
      <h1>Fiche Etudiant</h1>
      <img src={archlinux} alt="arch-linux" />
      <p>Nom: {StudentData.nom}</p>
      <p>Prénom: {StudentData.prenom}</p>
      <p>Âge: {StudentData.age}</p>
      <p>Email: {StudentData.email}</p>
      <p>Phone: {StudentData.phone}</p>
      <p>Filière: {StudentData.filiere}</p>
      <p>Année d'étude: {StudentData.AnneeEtude}</p>
      <p>Classe: {StudentData.classe}</p>
      <p>Groupe: {StudentData.grupe}</p>
      <p>Ville: {StudentData.ville}</p>
      <a href="mailto:houssemeddinebelkadhi256@gmail.com">      <button> contacter </button> </a>
    </div>
  )
}

export default StudentCard
