function Card(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="card card-margin" style={{ width: '18rem' }}>
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.CardTitle}</h5>
            <p className="card-text">{props.description}</p>
            {/* <a href="order.html"> */}
            <button type="button" id="text-center" className="btn button-85">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
