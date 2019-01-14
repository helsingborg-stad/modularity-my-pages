import * as React from "react";
import { sendForm, editForm } from "../store/form/actions";
import store from "../store";
import {
    getFormConfiguration,
    IFormConfiguration,
    IOption,
} from "../services/FormService";
import FormField from "./FormField";
import Spinner from "./shared/Spinner";

interface IProps {}

interface IState {
    formConfiguration: IFormConfiguration;
}

class Form extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            formConfiguration: null,
        };
    }

    componentWillMount() {
        this.setFormConfiguration();
    }

    setFormConfiguration = async () => {
        // moduleid is fetched from a preloaded (by wordpress backend) variable in the markup.
        const moduleId = document.getElementById("app").dataset.configurationId;
        const formConfiguration = await getFormConfiguration(moduleId);
        this.setState({ formConfiguration });
    };

    // one state handler for all the elements, the elements are responsible for sending the correct input to this method
    handleChange(
        i: number,
        value?: React.ChangeEvent<HTMLInputElement>,
        array?: IOption[]
    ) {
        // deep clone of object
        const formStructure = JSON.parse(
            JSON.stringify({ ...this.state.formConfiguration })
        );
        if (value) {
            formStructure.configuration[i].value = value.target.value;
        } else if (array) {
            formStructure.configuration[i].options = array;
        }
        store.dispatch<any>(editForm(formStructure));
    }

    saveChange() {
        const { formConfiguration } = this.state;
        store.dispatch<any>(
            sendForm("http://localhost:3001/getBygglov/test", formConfiguration)
        );
    }

    render() {
        const { formConfiguration } = this.state;

        if (formConfiguration !== null) {
            return (
                <form method="post" action="/">
                    {formConfiguration.configuration.map((field, i) => {
                        return (
                            <FormField
                                index={i}
                                field={field}
                                handleChange={this.handleChange}
                                key={field.key + i}
                            />
                        );
                    })}
                </form>
            );
        } else {
            return <Spinner message="" />;
        }
    }
}

export default Form;
