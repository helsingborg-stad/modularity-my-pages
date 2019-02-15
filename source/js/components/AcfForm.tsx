import * as React from "react";
import {
    getFormConfiguration,
    IFormConfiguration,
    IInputData,
    submitFormData,
    IFormRequest,
} from "../services/FormService";
import AcfFormField from "./AcfFormField";
import Spinner from "./shared/Spinner";
import { IUserState } from "../store/user/types";

interface IProps {
    user: IUserState;
    redirectToPaymentPage: () => void;
}

interface IState {
    formConfiguration: IFormConfiguration;
}

class AcfForm extends React.Component<IProps, IState> {
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

        if (formConfiguration) {
            this.setInitialStateValues();
        }
    };

    setInitialStateValues() {
        const { formConfiguration } = this.state;

        formConfiguration.configuration.forEach(x => {
            const defaultValue = this.getDefaultValue(x.key);
            this.setStateValue(x.key, defaultValue);
        });
    }

    // Here we get the default value for fields that can be
    // populated from the user information in state.
    // TODO Make this dynamic and not with hardcoded keys.
    getDefaultValue = (key: string) => {
        const { userInformation } = this.props.user;

        if (!userInformation) {
            return "";
        }

        switch (key) {
            case "name":
                return userInformation.name;
            case "personalNumber":
                return userInformation.personalNumber;
            case "address":
                return userInformation.address;
            case "zipCode":
                return userInformation.zipCode;
            case "city":
                return userInformation.city;
            default:
                return "";
        }
    };

    // Add value of changed input dynamically to state with name as key.
    setStateValue = (name: string, value: string) => {
        const newState = {
            [name]: value,
        };
        // Typescript has a bug where there is no good way to cast dynamic state properties,
        // so the workaround is to use any as the type for now. See https://github.com/Microsoft/TypeScript/issues/13948
        this.setState(newState as any);
    };

    submitForm = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Get all inputs that are saved in state and add them to an array with key and values.
        const formValues = Object.keys(this.state)
            // Filter unrelated state properties.
            .filter(key => key !== "formConfiguration")
            .reduce(
                (items: IInputData[], curr) =>
                    items.concat({
                        key: curr,
                        value: this.state[curr],
                    } as IInputData),
                []
            );

        const result = await submitFormData({
            inputData: formValues,
            personalNumber: this.props.user.userInformation.personalNumber,
        } as IFormRequest);

        if (result && result.isSuccess) {
            this.props.redirectToPaymentPage();
        }
    };

    render() {
        const { formConfiguration } = this.state;

        if (formConfiguration !== null) {
            return (
                <div>
                    {formConfiguration.configuration.map((field, i) => {
                        return (
                            <AcfFormField
                                index={i}
                                field={field}
                                handleInputChange={this.setStateValue}
                                key={field.key + i}
                                defaultValue={this.getDefaultValue(field.key)}
                            />
                        );
                    })}
                    <div className="form-group">
                        <button
                            className="btn btn-primary resbtn"
                            onClick={this.submitForm}
                        >
                            Gå till betalning
                        </button>
                    </div>
                </div>
            );
        } else {
            return <Spinner message="" />;
        }
    }
}

export default AcfForm;
