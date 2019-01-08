import * as React from "react";

interface Props {
    updatePersonNr: (e: React.ChangeEvent<HTMLInputElement>) => void;
    PersonNr: string;
}

const InputBare = (personNr: Props) => {
    return (
        <div>
            <input onChange={personNr.updatePersonNr} />
            <div>input: {personNr.PersonNr}</div>
        </div>
    );
};

export default InputBare;
