import * as React from "react";
var InputBare = function (personNr) {
    return (React.createElement("div", null,
        React.createElement("input", { onChange: personNr.updatePersonNr }),
        React.createElement("div", null,
            "input: ",
            personNr.PersonNr)));
};
export default InputBare;
//# sourceMappingURL=InputBare.js.map