import Article from "./Article";
import Title from "./Title";

const Services = () => {
    const services = [
        {
            id: 1,
            icon: "fas fa-wallet fa-fw",
            title: "saving money",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
        },
        {
            id: 2,
            icon: "fas fa-tree fa-fw",
            title: "endless hiking",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
        },
        {
            id: 3,
            icon: "fas fa-socks fa-fw",
            title: "amazing comfort",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
        },
    ];
    return (
        <section className="section services" id="services">
            <Title title="our" subTitle="services" />
            <div className="section-center services-center">
                {services.map((key) => (
                    <Article key={key.id} icon={key.icon} title={key.title} text={key.text} />
                ))}
            </div>
        </section>
    );
};
export default Services;
