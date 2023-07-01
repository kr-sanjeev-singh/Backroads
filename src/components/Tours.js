import Title from "./Title";
import tour from "../images";
import Tour from "./Tour";
const Tours = () => {
    const tours = [
        {
            id: 1,
            img: tour.Tour1,
            date: "august 26th, 2020",
            title: "Tibet Adventure",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
            location: "china",
            days: "6 days",
            price: "from $2100",
        },
        {
            id: 2,
            img: tour.Tour2,
            date: "october 1th, 2020",
            title: "Tibet Adventure",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
            location: "china",
            days: "6 days",
            price: "from $2100",
        },
        {
            id: 3,
            img: tour.Tour3,
            date: "september 15th, 2020",
            title: "explore hong kong",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
            location: "hong kong",
            days: "8 days",
            price: "from $5000",
        },
        {
            id: 4,
            img: tour.Tour4,
            date: "december 5th, 2019",
            title: "kenya highlights",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
            location: "kenya",
            days: "20 days",
            price: "from $3300",
        },
    ];
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />

            <div className="section-center featured-center">
                {tours.map((key) => (
                    <Tour key={key.id} img={key.img} date={key.date} title={key.title} desc={key.desc} location={key.location} days={key.days} price={key.price} />
                ))}
            </div>
        </section>
    );
};
export default Tours;
