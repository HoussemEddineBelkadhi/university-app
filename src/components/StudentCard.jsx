import './StudentCard.css'
import archlinux from '../assets/arch-linux.png'

class student {
  nom ="Belkadhi";
  prenom ="Houssemeddine";
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

  return (
    <div>
      <h1>Fiche Etudiant</h1>
      <img src={archlinux} alt="arch-linux" />
      <p>Nom: {student.nom}</p>
      <p>Prénom: {student.prenom}</p>
      <p>Âge: {student.age}</p>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Filière: {student.filiere}</p>
      <p>Année d'étude: {student.AnneeEtude}</p>
      <p>Classe: {student.classe}</p>
      <p>Groupe: {student.grupe}</p>
      <p>Ville: {student.ville}</p>
      <a href="mailto:houssemeddinebelkadhi256@gmail.com">      <button> contacter </button> </a>
    </div>
  )
}

export default StudentCard
