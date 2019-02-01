import * as React from "react";
import { IUserState } from "../../store/user/types";

interface IProps {
    user: IUserState;
    logOut: () => void;
}

const Header = (props: IProps) => {
    return (
        <div className="grid-md-8">
            <div className="pull-right">
                <p>{props.user.userInformation.name}</p>
                <button
                    onClick={props.logOut}
                    className="btn btn-sm pull-right"
                >
                    Logga ut
                </button>
            </div>
            <div className="clearfix" />
        </div>
    );
};

export default Header;
