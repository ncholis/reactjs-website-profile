import '../styles/Partners.css'

interface Props {
    partnersList: {image:string}[]
}

function Partners({partnersList}: Props) {
  return (
    <div className="partner-list">
        {partnersList.map((p,i) => (
            <div key={i} className="kartu-partner">
                <img src={p.image}/>
            </div>
        ))}
    </div>
  )
}

export default Partners
