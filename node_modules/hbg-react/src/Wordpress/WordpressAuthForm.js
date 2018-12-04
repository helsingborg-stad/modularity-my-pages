module.exports = class extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            fields: props.fields
        }
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps.fields != this.props.fields) {
            this.setState({fields: this.props.fields});
        }
    }

    submitForm(e)
    {
        e.preventDefault();
        const {onSubmitAction} = this.props;
        if (onSubmitAction) {
            onSubmitAction(this.state.fields);
        }
    }

    render()
    {
        const {title, content, notice, noticeType, submitButtonText, submitButtonStyle} = this.props;
        const {fields} = this.state;

        const Title = (props) => {
            if (!props.children) {
                return null;
            }

            return (<h3>{props.children}</h3>);
        }

        const Content = (props) => {
            if (!props.children) {
                return null;
            }

            return (<p>{props.children}</p>);
        }

        const Notice = (props) => {
            const {message, type} = props;

            if (!message) {
                return null;
            }

            let classes = 'notice';
            const avalibleTypes = ['error', 'success', 'warning'];

            if (avalibleTypes.includes(type)) {
                classes += ' notice-' + type;
            }

            return (
                <div className={classes}><p>{message}</p></div>
            );
        }

        const Field = (props) => {
            const {id, label, value, readOnly, onChangeAction} = props;
            let Field = () => (<input type="text" name={id} id={id} onChange={onChangeAction} defaultValue={value} />);

            //Read only field
            if (readOnly && value && value != '') {
                Field = () => (<code>{value}</code>);
            }

            return (
                <tr>
                    <th>
                        <label htmlFor={(!readOnly ? id : null)}>
                            {label}
                        </label>
                    </th>
                    <td>
                        <Field />
                    </td>
                </tr>
            );
        }

        const SubmitButton = (props) => {
            const {text, style} = props;
            const avalibleStyles = ['primary'];

            let classes = 'button'

            if (avalibleStyles.includes(style)) {
                classes = 'button-' + style;
            }

            return (<input name="submit" type="submit" className={classes} value={text} />);
        }

        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <Notice
                    message={notice || null}
                    type={noticeType || null}
                />
                <Title>{title}</Title>
                <Content>{content}</Content>
                <table className="form-table">
                    <tbody>
                        {Object.values(fields).map((field, index) => (
                            <Field
                                key={field.id || 'field-' + index}
                                id={field.id || 'field-' + index}
                                label={field.label || null}
                                value={field.value || null}
                                readOnly={field.readOnly || null}
                                onChangeAction={(e) => {
                                    let value = e.target.value;
                                    this.setState((prevState) => {
                                        let fields = prevState.fields;
                                        fields[index].value = value;
                                    });
                                }}
                            />
                        ))}
                    </tbody>
                </table>
                <SubmitButton
                    text={submitButtonText || 'Submit'}
                    style={submitButtonStyle || null}
                />
            </form>
        );
    }
}
