import React, { Component, HTMLAttributes, ReactNode } from "react";
import PropTypes from "prop-types";
import Sidenav from "../sidenav/Sidenav";

interface DashboardPropsInterface extends HTMLAttributes<HTMLDivElement> {
  activateSideNav: boolean;
  title: string;
  userDisplayName: string;
  avatarUrl: string;
  greeting: string;
  headerHeight: string;
  headerTheme: "default" | "primary" | "secondary";
  sideNavType: "overlay" | "off-canvas";
  showOverlay: boolean;
  navWidth: string;
  onShowSidenav: () => void;
  onHideSidenav: () => void;
  children?: ReactNode;
  navbarBrand?: ReactNode;
  navbarStart?: ReactNode;
  navbarEnd?: ReactNode;
  sidenavContent?: ReactNode;
}

class DashboardLayout extends Component<DashboardPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    title: "",
    userDisplayName: "",
    avatarUrl: "",
    greeting: "Hello,",
    headerHeight: "56px",
    headerTheme: "primary",
    navbarBrand: "",
    navbarStart: "",
    navbarEnd: "",
    // Side navigation props
    activateSideNav: false,
    sideNavType: "overlay",
    showOverlay: false,
    navWidth: "300px",
    sidenavContent: "",
    onShowSidenav: () => {
      return;
    },
    onHideSidenav: () => {
      return;
    },
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    activateSideNav: PropTypes.bool,
    title: PropTypes.string,
    userDisplayName: PropTypes.string,
    avatarUrl: PropTypes.string,
    greeting: PropTypes.string,
    headerHeight: PropTypes.string,
    headerTheme: PropTypes.oneOf(["default", "primary", "secondary"]),
    sideNavType: PropTypes.oneOf(["overlay", "off-canvas"]),
    showOverlay: PropTypes.bool,
    navWidth: PropTypes.string,
    onShowSidenav: PropTypes.func,
    onHideSidenav: PropTypes.func,
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: DashboardPropsInterface) {
    super(props);

    this.state = { bodyWidth: "300px" };
  }

  componentDidMount() {
    (document.querySelector("body") as HTMLBodyElement).classList.add(
      "has-shapla-dashboard"
    );
  }

  /**
   * Render component UI
   */
  render() {
    const avatar = (
      <div className="shapla-dashboard-sidenav-profile__avatar">
        <img src={this.props.avatarUrl} alt={this.props.userDisplayName} />
      </div>
    );
    const displayName = (
      <div className="shapla-dashboard-sidenav-profile__name">
        {this.props.greeting && <span>{this.props.greeting}</span>}
        {this.props.userDisplayName && <b>{this.props.userDisplayName}</b>}
      </div>
    );
    const sidenavHeader = (
      <div className={this.sidenavProfileClass()}>
        {this.props.avatarUrl && avatar}
        {this.props.userDisplayName && displayName}
      </div>
    );
    return (
      <div className={this.dashboardClasses()} style={this.dashboardStyles()}>
        <div className={this.headerClasses()}>
          <div
            className="shapla-dashboard-header__burger"
            onClick={() => this.toggleSideNavigation()}
          >
            <span className="shapla-icon is-hoverable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          {this.props.navbarBrand ? (
            this.props.navbarBrand
          ) : this.props.title ? (
            <div className="shapla-dashboard-header__title">
              {this.props.title}
            </div>
          ) : null}

          {this.props.navbarStart ? this.props.navbarStart : null}

          <div className="shapla-dashboard-header__spacer" />

          {this.props.navbarEnd ? this.props.navbarEnd : null}
        </div>

        <Sidenav
          active={this.props.activateSideNav}
          navWidth={this.props.navWidth}
          showOverlay={this.props.showOverlay}
          position="left"
          onClose={() => this.closeSideNavigation()}
        >
          {(this.props.avatarUrl || this.props.userDisplayName) &&
            sidenavHeader}
          {this.props.sidenavContent && (
            <div className="shapla-dashboard-sidenav-menu">
              {this.props.sidenavContent}
            </div>
          )}
        </Sidenav>

        <div className="shapla-dashboard-content">
          <div className="shapla-dashboard-content__inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  dashboardClasses() {
    const { sideNavType, activateSideNav, className } = this.props;

    const classes = ["shapla-dashboard", `sidenav-type--${sideNavType}`];
    if (activateSideNav) {
      classes.push("is-sidenav-active");
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }

  dashboardStyles() {
    const styles: Record<string, string> = {};
    styles["--shapla-dashboard-header-height"] = this.props.headerHeight;
    styles["--shapla-dashboard-sidenav-width"] = this.props.navWidth;
    return styles;
  }

  headerClasses() {
    return ["shapla-dashboard-header", `theme-${this.props.headerTheme}`].join(
      " "
    );
  }

  sidenavProfileClass() {
    return [
      "shapla-dashboard-sidenav-profile",
      `theme-${this.props.headerTheme}`,
    ].join(" ");
  }

  openSideNavigation() {
    const { onShowSidenav } = this.props;
    if (onShowSidenav) {
      onShowSidenav();
    }
  }

  closeSideNavigation() {
    const { onHideSidenav } = this.props;
    if (onHideSidenav) {
      onHideSidenav();
    }
  }

  toggleSideNavigation() {
    if (this.props.activateSideNav) {
      this.closeSideNavigation();
    } else {
      this.openSideNavigation();
    }
  }
}

export default DashboardLayout;
