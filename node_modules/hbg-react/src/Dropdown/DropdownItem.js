module.exports = (props) => {
    let dynamicProps = {};

    if (typeof(props.classes) != 'undefined') {
        dynamicProps.className = props.classes;
    }

    if (typeof(props.href) != 'undefined') {
        dynamicProps.href = props.href;
    }

    if (typeof(props.onClickAction) != 'undefined') {
        dynamicProps.onClick = props.onClickAction;
    }

    return (
        <a {...dynamicProps}>{props.title}</a>
    );
}
