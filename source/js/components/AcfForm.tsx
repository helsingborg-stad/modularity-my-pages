import * as React from "react";
import {
    getFormConfiguration,
    IFormConfiguration,
} from "../services/FormService";
import AcfFormField from "./AcfFormField";
import Spinner from "./shared/Spinner";

interface IProps {
    handleInputChange: ((e: React.ChangeEvent<HTMLInputElement>) => void);
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
    };

    render() {
        const { formConfiguration } = this.state;
        const { handleInputChange } = this.props;

        if (formConfiguration !== null) {
            return (
                <div>
                    {formConfiguration.configuration.map((field, i) => {
                        return (
                            <AcfFormField
                                index={i}
                                field={field}
                                handleInputChange={handleInputChange}
                                key={field.key + i}
                            />
                        );
                    })}
                </div>
            );
        } else {
            return <Spinner message="" />;
        }
    }
}

export default AcfForm;
