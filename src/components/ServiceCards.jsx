import Card from './Card'
import Api from '../Api'
function ServiceCards() {
  return (
    <>
      <section id="pizza">
        <div class="row text-center">
          {Api.map((Data) => (
            <Card
              key={Data.key}
              src={Data.src}
              CardTitle={Data.CardTitle}
              description={Data.description}
            />
          ))}

          <hr></hr>
        </div>
      </section>
    </>
  )
}

export default ServiceCards
