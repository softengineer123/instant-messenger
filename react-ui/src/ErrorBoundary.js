import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

/**
 * To show user the generic message if something goes wrong.
 */
class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(`error = ${error}, errorInfo = ${JSON.stringify(errorInfo)}`)
    }

    render() {
        if (this.state.hasError) {
            return (
                <Grid container justify="center" style={{paddingTop: "2rem", fontSize: "3rem"}}>
                    <p>Oops! Something went wrong....</p>
                </Grid>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;