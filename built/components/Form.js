var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { connect } from 'react-redux';
import * as actions from '../store/person/actions';
import Input from './Input';
import InputBare from './InputBare';
var mapDispatcherToProps = function (dispatch) {
    return {
        sendForm: function (form) { return dispatch(actions.sendForm(form)); },
    };
};
var mapStateToProps = function (_a) {
    var person = _a.person;
    var form = person.form, loading = person.loading, error = person.error;
    return { form: form, loading: loading, error: error };
};
;
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editedForm: Object.assign({}, _this.props.form)
        };
        _this.onSendClick = function () {
            var sendForm = _this.props.sendForm;
            console.log('onSendClick');
            sendForm(_this.state.editedForm);
        };
        _this.onInputChange = function (e) {
            _this.setState({ editedForm: { PersonNr: e.target.value } });
        };
        return _this;
    }
    Form.prototype.render = function () {
        var _a = this.props, form = _a.form, loading = _a.loading;
        console.log(this.props.error);
        return (React.createElement("div", { style: { margin: '20px' } },
            React.createElement("input", { onChange: this.onInputChange }),
            React.createElement("div", null,
                form.PersonNr,
                " HejHejHejHej"),
            React.createElement("button", { onClick: this.onSendClick }, "Add"),
            React.createElement(Input, { PersonNr: form.PersonNr, updatePersonNr: this.onInputChange }),
            React.createElement(InputBare, __assign({}, form, { updatePersonNr: this.onInputChange })),
            loading && React.createElement("p", null, "loading...")));
    };
    return Form;
}(React.Component));
export default connect(mapStateToProps, mapDispatcherToProps)(Form);
//# sourceMappingURL=Form.js.map