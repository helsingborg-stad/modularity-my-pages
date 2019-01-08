import * as React from "react";
import { IFormStructure } from "../../store/form/types";
import { Input, Textarea } from "hbg-react";

interface IProps {
    formStructure: IFormStructure;
}

interface IState {
    isLoading: boolean;
}

class Form extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    handleChange() {
        console.log("handleChange");
    }

    render() {
        console.log(this.props);
        const { formStructure } = this.props;
        return (
            <div>
                {formStructure.structure.configuration.map((el, i) => {
                    console.log(el);
                    // if more than 5 different elements use switch case for performance
                    if (el.label === "Text_Input") {
                        return (
                            <Input
                                key={i}
                                id={i}
                                label={el.label}
                                instructions={el.instructions}
                                statement={el.statement}
                                required={el.required}
                            />
                        );
                    } else if (el.label === "Text_Area") {
                        return (
                            <Textarea
                                key={i}
                                id={i}
                                label={el.label}
                                instructions={el.instructions}
                                statement={el.statement}
                                required={el.required}
                            />
                        );
                    } else {
                        return <div>I didnt match anything</div>;
                    }
                })}
            </div>
        );
    }
}

export default Form;
