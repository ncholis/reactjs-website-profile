import '../styles/Tutors.css'

interface Props {
    tutorsList: {image: string, name:string}[]
}

function Tutors({tutorsList}: Props) {
  return (
    <div className="tutor-list">
        {tutorsList.map((e,i) => (
            <div key={i} className="kartu-tutor">
                <img src={e.image} />
                <p>e.name</p>
            </div>
        ))}
    </div>
  );
}

export default Tutors;
