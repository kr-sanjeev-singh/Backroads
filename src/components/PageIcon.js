const PageIcon = ({ href, className, icon }) => {
    return (
        <li>
            <a href={href} target="_blank" rel="noreferrer" className={className}>
                <i className={icon}></i>
            </a>
        </li>
    );
};
export default PageIcon;
