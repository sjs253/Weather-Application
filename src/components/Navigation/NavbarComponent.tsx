import * as React from "react";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "office-ui-fabric-react/lib/Nav";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "/",
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        links: [
          {
            name: "Monday",
            url: "/monday",
            key: "key1",
            target: "_blank",
          },
          {
            name: "Tuesday",
            url: "/tuesday",
            key: "key2",
            target: "_blank",
          },
          {
            name: "Wednesday",
            url: "/wednesday",
            key: "key1",
            target: "_blank",
          },
          {
            name: "Thursday",
            url: "/thursday",
            key: "key2",
            target: "_blank",
          },
          {
            name: "Friday",
            url: "/friday",
            key: "key2",
            target: "_blank",
          },
        ],
        isExpanded: true,
      },
    ],
  },
];

const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}

export default function NavbarComponent() {
  return <NavBasicExample />;
}
