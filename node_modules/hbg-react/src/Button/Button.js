export default (props) => {
    let dynamicProps = {};

    dynamicProps.className = 'btn';

    //Size
    if (typeof(props.size) != 'undefined') {
        dynamicProps.className += (props.size == 'large' ? ' btn-lg' : '');
        dynamicProps.className += (props.size == 'small' ? ' btn-sm' : '');
    }

    //Color
    if (typeof(props.color) != 'undefined') {
        let colors = [
            'primary',
            'contrasted',
            'light',
            'danger',
            'theme-first',
            'theme-second',
            'theme-third',
            'theme-fourth',
            'theme-fifth',
            'plain'
        ];

        if (colors.includes(props.color.toLowerCase())) {
            dynamicProps.className += ' btn-' + props.color.toLowerCase();
        }
    }

    //Block
    if (typeof(props.block) != 'undefined' && props.block) {
        dynamicProps.className += ' btn-block';
    }

    //Disabled
    if (typeof(props.disabled) != 'undefined' && props.disabled) {
        dynamicProps.className += ' disabled';
    }

    //Outline
    if (typeof(props.outline) != 'undefined' && props.outline) {
        dynamicProps.className += ' btn-outline';
    }

    if (typeof(props.href) != 'undefined') {
        dynamicProps.href = props.href;
        return (<a {...dynamicProps}>{props.children || props.title}</a>);
    } else if (typeof(props.onClick) != 'undefined') {
        dynamicProps.onClick = props.onClick;
        return (<button {...dynamicProps}>{props.children || props.title}</button>);
    } else if (typeof(props.submit) != 'undefined' && props.submit) {
        dynamicProps.type = "submit";
        dynamicProps.value = props.title;
        return (<input {...dynamicProps} />);
    }

    return null;
}
