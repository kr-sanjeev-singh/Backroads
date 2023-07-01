const Tour = ({ img, date, title, desc, location, days, price }) => {
    return (
        <article className="tour-card">
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="tour-footer">
                    <p>
                        <span>
                            <i className="fas fa-map"></i>
                        </span>{" "}
                        {location}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                </div>
            </div>
        </article>
    );
};
export default Tour;
