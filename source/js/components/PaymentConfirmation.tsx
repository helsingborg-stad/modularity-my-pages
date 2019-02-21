import * as React from "react";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";
import { confirmPayment } from "../services/PaymentService";

interface IProps {}

interface IState {
    orderInformation: IOrderInformation;
}

interface IOrderInformation {
    externalOrderId: string;
    amount: number;
}

class PaymentConfirmation extends React.Component<
    RouteComponentProps<any> & IProps,
    IState
> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            orderInformation: null,
        };
    }

    componentWillMount() {
        this.confirmPayment();
    }

    // Paynova redirects to the confirmation page after payment so here we should
    // validate the post data from them and set the orderstatus to either successful/failed payment.
    confirmPayment = async () => {
        // This should be fetched in the php backend from paynova post data and not path when the paynova step works.
        // http://api.developers.paynova.com/docs/post-redirect
        const orderId = this.props.match.params.id;

        const order = await confirmPayment(orderId);

        this.setState({
            orderInformation: Object.assign(
                {},
                {
                    externalOrderId: order.ExternalOrderId,
                    amount: order.TotalAmount,
                }
            ),
        });
    };

    render() {
        const { id } = this.props.match.params;
        const { orderInformation } = this.state;

        return (
            <div className="grid-md-8">
                <Link to="/">« Hem</Link>
                <div className="grid row">
                    <h2> Orderbekräftelse #{id}</h2>
                </div>
                <div className="grid row">
                    {orderInformation && (
                        <p>
                            Din betalning på {orderInformation.amount} kr har
                            genomförts.
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(PaymentConfirmation);
