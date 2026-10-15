import StudentCard from './components/StudentCard'
// import Header from '.comonents/Header.jsx'
import kali from './assets/kali-linux.png'
import debian from './assets/debian.png'
import archlinux from './assets/arch-linux.png'




const students = [
  {
  nom: "Belkadhi",
  prenom: "Houssem Eddine",
  age: 20,
  email: "houssemeddinebelkadhi256@gmail.com",
  phone: "94 727 471",
  filiere: "computer science",
  AnneeEtude: 2,
  grupe: "G1",
  classe: "A",
  ville: "mahdia",
  image: archlinux
} ,
{
  nom: "ben slima",
  prenom: "hamma",
  age: 23,
  email: "hamma_ben_slima@gmail.com",
  phone: "99 999 999",
  filiere: "computer engineering",
  AnneeEtude: "master 2",
  image: debian
} ,
{
  nom: "abd elkafi",
  prenom: "ahmed",
  age: 20,
  email: "ahmed_abd_elkafi@gmail.com",
  filiere: "buisness computing",
  AnneeEtude: 2,
  image: kali
}

] 

function App() {

  return (
    <div>
      {students.map((student) => ( 
        <StudentCard
         image={student.image}
         nom={student.nom}
         prenom={student.prenom}
         age={student.age}
         email={student.email}
         key={student.email}
         phone={student.phone}
         filiere={student.filiere}
         AnneeEtude={student.AnneeEtude}
         grupe={student.grupe}
         classe={student.classe}
         ville={student.ville}
         
        />
      ))}
    </div>
  )
}

export default App
