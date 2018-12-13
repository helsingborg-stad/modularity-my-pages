import * as React from "react";

interface Props {
    updatePersonNr: (e: React.ChangeEvent<HTMLInputElement>) => void,
    PersonNr: string
}

class Input extends React.Component<Props> {
    render() {
        return (
            <div>
                <input onChange={this.props.updatePersonNr}/>
                <div>input: {this.props.PersonNr}</div>
            </div>
        );
    }
}

export default Input;