import navBar from "../images";
import PageIcon from "./PageIcon";
import PageLink from "./PageLink";
const Navbar = () => {
    const navLink = [
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

    const navIcon = [
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
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={navBar.Logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {navLink.map((key) => (
                        <PageLink key={key.id} href={key.href} className="nav-link" text={key.text} />
                    ))}
                </ul>

                <ul className="nav-icons">
                    {navIcon.map((key) => (
                        <PageIcon key={key.id} href={key.href} className="nav-icon" icon={key.icon} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
