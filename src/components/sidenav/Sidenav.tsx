import React, {Component, CSSProperties, ReactNode} from "react";
import PropTypes from "prop-types";

interface SidenavPropsInterface {
    active: boolean;
    showOverlay: boolean;
    navWidth: string;
    position: "left" | "right" | "bottom" | "top";
    onClose: () => void;
    children: ReactNode;
}

interface SidenavStateInterface {
    bodyWidth: string;
}

class Sidenav extends Component<SidenavPropsInterface, SidenavStateInterface> {
    /**
     * Specifies the default values for props:
     */
    static defaultProps = {
        active: false,
        showOverlay: false,
        navWidth: "300px",
        position: "left",
        onClose: () => {
        },
    };

    /**
     * Specifies props data type
     */
    static propTypes = {
        active: PropTypes.bool,
        showOverlay: PropTypes.bool,
        navWidth: PropTypes.string,
        position: PropTypes.oneOf(["left", "right", "bottom", "top"]),
        onClose: PropTypes.func,
    };

    /**
     * Class constructor
     *
     * @param props
     */
    constructor(props: SidenavPropsInterface) {
        super(props);

        this.state = {bodyWidth: "300px"};
    }

    componentDidMount() {
        this.setState({bodyWidth: this.props.navWidth});
    }

    /**
     * Render component UI
     */
    render() {
        return (
            <div className={this.navClasses()} style={this.navStyles()}>
                <div
                    className="shapla-sidenav__background"
                    onClick={this.props.onClose}
                />
                <div className="shapla-sidenav__body" style={this.sidenavBodyStyle()}>
                    <div className="shapla-sidenav__content">{this.props.children}</div>
                </div>
            </div>
        );
    }

    navStyles() {
        return {
            "--shapla-side-navigation-width": this.props.navWidth,
        } as CSSProperties;
    }

    navClasses() {
        const classes = [
            "shapla-sidenav",
            `shapla-sidenav--${this.props.position}`,
        ];
        if (this.props.active) {
            classes.push("is-active");
        }
        return classes.join(" ");
    }

    sidenavBodyStyle() {
        if (["left", "right"].indexOf(this.props.position) !== -1) {
            return {width: this.props.navWidth};
        }
        return {height: this.props.navWidth};
    }
}

export default Sidenav;
