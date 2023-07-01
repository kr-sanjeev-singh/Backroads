import PageIcon from "./PageIcon";
import PageLink from "./PageLink";

const Footers = () => {
    const footerLink = [
        {
            id: 1,
            href: "#home",
            text: "home",
        },
        {
            id: 2,
            href: "#about",
            text: "about",
        },
        {
            id: 3,
            href: "#services",
            text: "services",
        },
        {
            id: 4,
            href: "#tours",
            text: "tours",
        },
    ];

    const footerIcon = [
        {
            id: 1,
            href: "https://www.twitter.com",
            icon: "fab fa-facebook",
        },
        {
            id: 2,
            href: "https://www.twitter.com",
            icon: "fab fa-twitter",
        },
        {
            id: 3,
            href: "https://www.twitter.com",
            icon: "fab fa-squarespace",
        },
    ];
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {footerLink.map((key) => (
                    <PageLink key={key.id} href={key.href} className="footer-link" text={key.text} />
                ))}
            </ul>
            <ul className="footer-icons">
                {footerIcon.map((key) => (
                    <PageIcon key={key.id} href={key.href} className="footer-icon" icon={key.icon} />
                ))}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};
export default Footers;
