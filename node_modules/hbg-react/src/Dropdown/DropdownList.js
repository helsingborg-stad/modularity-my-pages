module.exports = (props) => {
    return (
        <div className="c-dropdown__menu is-open">
            <ul className="o-dropdown-links unlist">
                {props.children.map((child, index) => (<li key={index}>{child}</li>))}
            </ul>
        </div>
    );
}
