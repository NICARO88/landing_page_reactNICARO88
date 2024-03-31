function Cards(props) {
    return <div className="card-container col-sm-6 mb-3 mb-sm-0">
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    </div>
}

export default Cards 