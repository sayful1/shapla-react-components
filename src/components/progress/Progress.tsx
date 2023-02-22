import React, {Component} from "react";
import PropTypes from "prop-types";

interface ProgressPropsInterface {
    label: string,
    value: number,
    max: number,
    striped: boolean,
    animated: boolean,
    size: "default" | "tiny" | "small" | "medium" | "large",
    theme: "default" | "primary" | "secondary",
    children: string | JSX.Element
}

class Progress extends Component<ProgressPropsInterface> {
    /**
     * Specifies the default values for props:
     */
    static defaultProps = {
        label: "",
        value: null,
        max: 1,
        striped: false,
        animated: false,
        size: "default",
        theme: "default",
    };

    /**
     * Specifies props data type
     */
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.number,
        max: PropTypes.number,
        striped: PropTypes.bool,
        animated: PropTypes.bool,
        size: PropTypes.oneOf(["default", "tiny", "small", "medium", "large"]),
        theme: PropTypes.oneOf(["default", "primary", "secondary"]),
    };

    render() {
        const {value, max, children} = this.props;
        return (
            <div className={this.containerClasses()}>
                <div
                    className={this.barClasses()}
                    style={this.barStyle()}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                >
                    {children}
                </div>
            </div>
        );
    }

    containerClasses() {
        const {value, theme, size} = this.props;
        const classes = ["shapla-progress"];
        if ("default" !== size) classes.push(`is-${size}`);

        if (!value && value !== 0) {
            classes.push("is-indeterminate");
            classes.push(`is-${theme}`);
        }

        return classes.join(" ");
    }

    barClasses() {
        const {striped, theme, animated} = this.props;
        const classes = ["shapla-progress-bar"];
        if ("default" !== theme) classes.push(`is-${theme}`);
        if (striped) classes.push(`is-striped`);
        if (animated) classes.push(`is-animated`);

        return classes.join(" ");
    }

    barStyle() {
        const {value, max} = this.props;
        if (value) {
            const width = Math.round((value / max) * 100);
            return {width: `${width}%`};
        }
        return {};
    }
}

export default Progress;
