import * as React from "react";

interface IProps {
    message: string;
}

const Spinner = (props: IProps) => {
    return (
        <div className="grid row">
            <div className="grid-md-6 center-content">
                <div className="text-center row">{props.message}</div>
                <div className="spinner spinner-dark center-content row" />
            </div>
        </div>
    );
};

export default Spinner;
