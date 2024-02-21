function Cards(props) {
    return <div className={props.colortype}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
        </div>
    </div>
}

export default Cards 