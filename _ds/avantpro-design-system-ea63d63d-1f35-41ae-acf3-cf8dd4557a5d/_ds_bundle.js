/* @ds-bundle: {"format":3,"namespace":"AvantproDesignSystem_ea63d6","components":[],"sourceHashes":{"ui_kits/avantpro-app/Primitives.jsx":"b2e5924a7075","ui_kits/avantpro-app/Shell.jsx":"3323d87df091","ui_kits/avantpro-ml/MLPanel.jsx":"5bcade62fe17","ui_kits/avantpro-ml/MLProductPage.jsx":"cf690e20f8eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AvantproDesignSystem_ea63d6 = window.AvantproDesignSystem_ea63d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/avantpro-app/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* globals React */
const {
  useState
} = React;

// ------ Icon wrapper (Lucide static via CDN) -----------------------------
const I = ({
  name,
  size = 20,
  color = "currentColor",
  style = {}
}) => /*#__PURE__*/React.createElement("img", {
  src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
  width: size,
  height: size,
  alt: "",
  "aria-hidden": "true",
  style: {
    display: "inline-block",
    verticalAlign: "middle",
    filter: color === "currentColor" ? "none" : undefined,
    ...style
  }
});

// ------ Button ------------------------------------------------------------
const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontFamily: "Roboto, system-ui, sans-serif",
  fontWeight: 500,
  fontSize: 14,
  letterSpacing: 0,
  borderRadius: 8,
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "background 180ms cubic-bezier(0.2,0,0,1), color 180ms cubic-bezier(0.2,0,0,1), border-color 180ms cubic-bezier(0.2,0,0,1)",
  whiteSpace: "nowrap"
};
const btnSize = {
  sm: {
    height: 32,
    padding: "0 12px",
    fontSize: 13
  },
  md: {
    height: 40,
    padding: "0 16px"
  },
  lg: {
    height: 48,
    padding: "0 20px",
    fontSize: 16,
    fontWeight: 700
  }
};
const btnVariant = (v, hover) => ({
  primary: {
    background: hover ? "#1278F9" : "#271BEF",
    color: "#fff"
  },
  secondary: {
    background: hover ? "#F3F4F6" : "#fff",
    color: "#1C1F26",
    borderColor: "#D3D4D6"
  },
  ghost: {
    background: hover ? "rgba(28,31,38,0.04)" : "transparent",
    color: "#271BEF"
  },
  destructive: {
    background: hover ? "#B91C1C" : "#DB0000",
    color: "#fff"
  }
})[v];
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  children,
  ...rest
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...btnBase,
      ...btnSize[size],
      ...btnVariant(variant, h && !disabled),
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }), icon && /*#__PURE__*/React.createElement(I, {
    name: icon,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(I, {
    name: iconRight,
    size: 16
  }));
}

// ------ Input / Field ----------------------------------------------------
function Input({
  label,
  helper,
  error,
  icon,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const border = error ? "#DB0000" : focus ? "#1278F9" : "#D3D4D6";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "#1C1F26"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 12px",
      background: "#fff",
      border: `1px solid ${border}`,
      borderRadius: 8,
      boxShadow: focus && !error ? "0 0 0 3px rgba(18,120,249,0.25)" : "none",
      transition: "border-color 180ms, box-shadow 180ms"
    }
  }, icon && /*#__PURE__*/React.createElement(I, {
    name: icon,
    size: 16,
    style: {
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: "transparent",
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: 16,
      color: "#1C1F26"
    }
  }))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: error ? "#DB0000" : "#626262"
    }
  }, error || helper));
}

// ------ Badge ------------------------------------------------------------
const badgeVariant = {
  brand: {
    bg: "#E7F5FC",
    fg: "#271BEF"
  },
  success: {
    bg: "#DCFCE7",
    fg: "#16A34A"
  },
  danger: {
    bg: "#FEE2E2",
    fg: "#DB0000"
  },
  neutral: {
    bg: "#F3F4F6",
    fg: "#1C1F26"
  },
  warn: {
    bg: "#FEF3C7",
    fg: "#92400E"
  }
};
function Badge({
  variant = "neutral",
  dot,
  children,
  style = {}
}) {
  const v = badgeVariant[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 10px",
      background: v.bg,
      color: v.fg,
      borderRadius: 9999,
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: 12,
      fontWeight: 500,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: v.fg
    }
  }), children);
}

// ------ Card -------------------------------------------------------------
function Card({
  children,
  padding = 20,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #D3D4D6",
      borderRadius: 8,
      boxShadow: "0 1px 3px rgba(28,31,38,0.06), 0 1px 2px rgba(28,31,38,0.04)",
      padding,
      ...style
    }
  }, children);
}

// ------ KPI Card ---------------------------------------------------------
function KpiCard({
  label,
  value,
  delta,
  trend = "up",
  badge
}) {
  const good = trend === "up";
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "#626262"
    }
  }, label), badge && /*#__PURE__*/React.createElement(Badge, {
    variant: badge.variant
  }, badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 300,
      color: "#1C1F26",
      lineHeight: 1.1
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      color: good ? "#16A34A" : "#DB0000",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: good ? "trending-up" : "trending-down",
    size: 14
  }), delta));
}

// ------ Alert ------------------------------------------------------------
const alertVariant = {
  info: {
    bg: "#E7F5FC",
    fg: "#271BEF",
    icon: "info"
  },
  success: {
    bg: "#DCFCE7",
    fg: "#16A34A",
    icon: "check-circle"
  },
  error: {
    bg: "#FEE2E2",
    fg: "#DB0000",
    icon: "alert-triangle"
  }
};
function Alert({
  variant = "info",
  title,
  children
}) {
  const v = alertVariant[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 14px",
      background: v.bg,
      borderRadius: 8,
      color: v.fg,
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: v.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: v.fg,
      opacity: 0.9
    }
  }, children)));
}

// ------ Table ------------------------------------------------------------
function Table({
  columns,
  rows
}) {
  const grid = columns.map(c => c.width || "1fr").join(" ");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #D3D4D6",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      background: "#FBFBFC",
      borderBottom: "1px solid #D3D4D6",
      padding: "0 16px"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      fontSize: 14,
      fontWeight: 500,
      color: "#1C1F26",
      justifyContent: c.align === "right" ? "flex-end" : "flex-start"
    }
  }, c.label))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      padding: "0 16px",
      borderBottom: i < rows.length - 1 ? "1px solid #D3D4D6" : "none",
      transition: "background 120ms cubic-bezier(0.2,0,0,1)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "rgba(28,31,38,0.02)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      fontSize: 14,
      color: "#1C1F26",
      justifyContent: c.align === "right" ? "flex-end" : "flex-start"
    }
  }, c.render ? c.render(r[c.key], r) : r[c.key])))));
}

// ------ Dialog -----------------------------------------------------------
function Dialog({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      background: "rgba(28,31,38,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: "avt-fade 180ms cubic-bezier(0.2,0,0,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "calc(100vw - 32px)",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 10px 24px rgba(28,31,38,0.10)",
      padding: 24,
      animation: "avt-slide-up 180ms cubic-bezier(0.2,0,0,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      color: "#1C1F26"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#626262",
      marginTop: 4
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      border: 0,
      background: "transparent",
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", null, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end",
      marginTop: 20,
      paddingTop: 16,
      borderTop: "1px solid #F0F0F1"
    }
  }, footer)));
}

// ------ Toast -----------------------------------------------------------
function Toast({
  title,
  children,
  variant = "success",
  onClose
}) {
  const v = alertVariant[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      right: 24,
      zIndex: 60,
      display: "flex",
      gap: 10,
      padding: "12px 16px",
      background: "#fff",
      border: "1px solid #D3D4D6",
      borderLeft: `3px solid ${v.fg}`,
      borderRadius: 8,
      boxShadow: "0 10px 24px rgba(28,31,38,0.10)",
      minWidth: 280,
      animation: "avt-slide-up 180ms cubic-bezier(0.2,0,0,1)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: v.icon,
    size: 18,
    color: v.fg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      color: "#1C1F26"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#626262"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 24,
      height: 24,
      border: 0,
      background: "transparent",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: "x",
    size: 14
  })));
}

// ------ Empty state -----------------------------------------------------
function EmptyState({
  icon = "inbox",
  title,
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 24px",
      textAlign: "center",
      background: "#fff",
      border: "1px dashed #D3D4D6",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      margin: "0 auto 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#E7F5FC",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: icon,
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      color: "#1C1F26",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#626262",
      marginBottom: 16,
      maxWidth: 360,
      margin: "0 auto 16px"
    }
  }, children), action);
}
Object.assign(window, {
  I,
  Button,
  Input,
  Badge,
  Card,
  KpiCard,
  Alert,
  Table,
  Dialog,
  Toast,
  EmptyState
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avantpro-app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avantpro-app/Shell.jsx
try { (() => {
/* globals React, I, Badge */
const {
  useState: useStateShell
} = React;
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    key: "home",
    icon: "layout-dashboard",
    label: "Home"
  }, {
    key: "campaigns",
    icon: "megaphone",
    label: "Campaigns"
  }, {
    key: "listings",
    icon: "package",
    label: "Listings"
  }, {
    key: "orders",
    icon: "shopping-bag",
    label: "Orders"
  }, {
    key: "analytics",
    icon: "bar-chart-3",
    label: "Analytics"
  }, {
    key: "integrations",
    icon: "plug",
    label: "Integrations"
  }];
  const secondary = [{
    key: "settings",
    icon: "settings",
    label: "Settings"
  }, {
    key: "help",
    icon: "help-circle",
    label: "Help"
  }];
  const row = it => {
    const isActive = active === it.key;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onNav?.(it.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 36,
        padding: "0 10px",
        width: "100%",
        border: 0,
        borderRadius: 6,
        background: isActive ? "#E7F5FC" : "transparent",
        color: isActive ? "#271BEF" : "#1C1F26",
        fontFamily: "Roboto, system-ui, sans-serif",
        fontSize: 14,
        fontWeight: isActive ? 500 : 400,
        textAlign: "left",
        cursor: "pointer",
        transition: "background 120ms cubic-bezier(0.2,0,0,1)"
      },
      onMouseEnter: e => !isActive && (e.currentTarget.style.background = "rgba(28,31,38,0.04)"),
      onMouseLeave: e => !isActive && (e.currentTarget.style.background = "transparent")
    }, /*#__PURE__*/React.createElement(I, {
      name: it.icon,
      size: 18
    }), it.label);
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flex: "0 0 232px",
      background: "#fff",
      borderRight: "1px solid #D3D4D6",
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 10px 20px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol-avantpro.svg",
    style: {
      height: 28
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: "-0.01em"
    }
  }, "Avant", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: "#271BEF"
    }
  }, "pro"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "#626262",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      padding: "8px 10px 4px"
    }
  }, "Workspace"), items.map(row), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #D3D4D6",
      marginTop: 8,
      paddingTop: 8
    }
  }, secondary.map(row)));
}
function Topbar({
  title,
  search,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      height: 60,
      padding: "0 24px",
      background: "#fff",
      borderBottom: "1px solid #D3D4D6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      color: "#1C1F26",
      flex: "0 0 auto"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, search), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, actions, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifications",
    style: {
      width: 36,
      height: 36,
      border: "1px solid #D3D4D6",
      background: "#fff",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 8,
      height: 8,
      background: "#DB0000",
      borderRadius: "50%",
      border: "2px solid #fff"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #00BFFF 0%, #271BEF 100%)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 700
    }
  }, "RC")));
}
function Shell({
  active,
  onNav,
  title,
  search,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "#FBFBFC"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title,
    search: search,
    actions: actions
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: 24,
      minWidth: 0
    }
  }, children)));
}

// Page header used inside main
function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: "#626262",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      marginBottom: 4
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 300,
      color: "#1C1F26",
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "#626262",
      marginTop: 6,
      maxWidth: 640
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flex: "0 0 auto"
    }
  }, actions));
}
Object.assign(window, {
  Shell,
  Sidebar,
  Topbar,
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avantpro-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avantpro-ml/MLPanel.jsx
try { (() => {
/* globals React */
const {
  useState: useStateML
} = React;

// Icon from Lucide-static CDN (mirrors production i-lucide-* vocabulary)
const MLI = ({
  name,
  size = 18,
  style = {}
}) => /*#__PURE__*/React.createElement("img", {
  src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
  width: size,
  height: size,
  alt: "",
  "aria-hidden": "true",
  style: {
    display: "inline-block",
    verticalAlign: "middle",
    ...style
  }
});
function MLPanel() {
  const [tab, setTab] = useStateML("pricing");
  const [connected, setConnected] = useStateML(true);
  const [showTip, setShowTip] = useStateML(false);
  return /*#__PURE__*/React.createElement("aside", {
    "data-avantpro-root": "ml-product-panel",
    style: {
      background: "#fff",
      border: "1px solid #D3D4D6",
      borderRadius: 8,
      boxShadow: "0 1px 3px rgba(28,31,38,0.06), 0 1px 2px rgba(28,31,38,0.04)",
      fontFamily: "Roboto, system-ui, sans-serif",
      overflow: "hidden",
      position: "sticky",
      top: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "linear-gradient(90deg, #FFE400 0%, #F4AB00 100%)"
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      borderBottom: "1px solid #D3D4D6"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol-avantpro-ml.svg",
    style: {
      height: 28
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "#1C1F26",
      lineHeight: 1.2
    }
  }, "Ferramentas Avantpro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#626262"
    }
  }, "Mercado Livre \xB7 product page")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Expand in app",
    style: {
      width: 28,
      height: 28,
      border: "1px solid #D3D4D6",
      background: "#fff",
      borderRadius: 6,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(MLI, {
    name: "external-link",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      background: connected ? "#F7FDF9" : "#FEF2F2",
      borderBottom: "1px solid #D3D4D6",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: connected ? "#16A34A" : "#DB0000"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: connected ? "#16A34A" : "#DB0000",
      fontWeight: 500
    }
  }, connected ? "Connected" : "Disconnected"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#626262"
    }
  }, "\xB7 Rocket Com\xE9rcio"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConnected(!connected),
    style: {
      marginLeft: "auto",
      border: 0,
      background: "transparent",
      color: "#271BEF",
      fontSize: 12,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, connected ? "Disconnect" : "Reconnect")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      borderBottom: "1px solid #D3D4D6",
      padding: "0 8px"
    }
  }, [{
    k: "pricing",
    label: "Pricing"
  }, {
    k: "competitors",
    label: "Rivals"
  }, {
    k: "history",
    label: "History"
  }].map(t => {
    const on = tab === t.k;
    return /*#__PURE__*/React.createElement("button", {
      key: t.k,
      onClick: () => setTab(t.k),
      style: {
        flex: 1,
        height: 38,
        border: 0,
        background: "transparent",
        color: on ? "#271BEF" : "#626262",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        position: "relative"
      }
    }, t.label, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        background: "#271BEF",
        borderRadius: 2
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, tab === "pricing" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#626262",
      marginBottom: 4
    }
  }, "Avantpro price insight"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 300,
      color: "#1C1F26"
    }
  }, "R$ 289"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 22,
      padding: "0 10px",
      background: "#DCFCE7",
      color: "#16A34A",
      borderRadius: 9999,
      fontSize: 12,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(MLI, {
    name: "trending-up",
    size: 12
  }), " 8% below market")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "#FBFBFC",
      border: "1px solid #D3D4D6",
      borderRadius: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#626262",
      marginBottom: 8,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontWeight: 500
    }
  }, "Market distribution"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 56
    }
  }, [20, 36, 52, 72, 88, 68, 48, 36, 22, 12].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i === 2 ? "#271BEF" : "#D3D4D6",
      borderRadius: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 10,
      color: "#626262",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "R$ 210"), /*#__PURE__*/React.createElement("span", null, "R$ 290"), /*#__PURE__*/React.createElement("span", null, "R$ 380"))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 40,
      background: "#271BEF",
      color: "#fff",
      border: 0,
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MLI, {
    name: "sparkles",
    size: 16
  }), " Suggest optimal price"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 36,
      background: "transparent",
      color: "#271BEF",
      border: 0,
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      marginTop: 6
    }
  }, "Open full pricing report")), tab === "competitors" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, [{
    seller: "AudioMaxBR",
    price: "R$ 312",
    badge: "Top seller",
    badgeTone: "brand"
  }, {
    seller: "SomGamer",
    price: "R$ 268",
    badge: "Lowest",
    badgeTone: "success"
  }, {
    seller: "KingShopOff",
    price: "R$ 329",
    badge: "Slow ship",
    badgeTone: "danger"
  }, {
    seller: "Megalink",
    price: "R$ 299",
    badge: "",
    badgeTone: ""
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px",
      border: "1px solid #D3D4D6",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: "#FBFBFC",
      border: "1px solid #D3D4D6"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "#1C1F26"
    }
  }, r.seller), r.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 11,
      padding: "1px 8px",
      borderRadius: 9999,
      background: r.badgeTone === "brand" ? "#E7F5FC" : r.badgeTone === "success" ? "#DCFCE7" : "#FEE2E2",
      color: r.badgeTone === "brand" ? "#271BEF" : r.badgeTone === "success" ? "#16A34A" : "#DB0000"
    }
  }, r.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, r.price)))), tab === "history" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      background: "#E7F5FC",
      borderRadius: 10,
      margin: "0 auto 10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(MLI, {
    name: "line-chart",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "#1C1F26",
      marginBottom: 4
    }
  }, "No history yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#626262",
      marginBottom: 12
    }
  }, "Avantpro records price history from the moment you track a listing. Track this one to start."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowTip(true),
    style: {
      height: 36,
      padding: "0 14px",
      background: "#fff",
      color: "#1C1F26",
      border: "1px solid #D3D4D6",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(MLI, {
    name: "bookmark-plus",
    size: 14
  }), " Track listing"), showTip && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12,
      color: "#16A34A"
    }
  }, "Tracking enabled."))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "10px 16px",
      fontSize: 11,
      color: "#626262",
      borderTop: "1px solid #D3D4D6",
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "#FBFBFC"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol-avantpro.svg",
    style: {
      height: 14
    },
    alt: ""
  }), "Powered by Avantpro \xB7 v4.2.1"));
}
Object.assign(window, {
  MLPanel,
  MLI
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avantpro-ml/MLPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avantpro-ml/MLProductPage.jsx
try { (() => {
/* globals React */
// Static mock of a Mercado Livre product page. Intentionally low-fidelity —
// the point is to give the injected Avantpro panel a realistic host.

function MLHostPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Roboto, system-ui, sans-serif",
      background: "#EBEBEB",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: "#FFE400",
      padding: "10px 32px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      color: "#2D3277",
      letterSpacing: "-0.02em"
    }
  }, "mercado", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FFE400",
      background: "#2D3277",
      padding: "2px 6px",
      borderRadius: 4,
      marginLeft: 4
    }
  }, "livre")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 640,
      height: 36,
      background: "#fff",
      borderRadius: 2,
      display: "flex",
      alignItems: "center",
      padding: "0 12px",
      fontSize: 13,
      color: "#9a9a9a"
    }
  }, "Buscar produtos, marcas e muito mais\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#333"
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#333"
    }
  }, "Minha conta")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 32px",
      fontSize: 12,
      color: "#3483FA"
    }
  }, "Eletr\xF4nicos \u203A \xC1udio \u203A Fones de ouvido \u203A ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#666"
    }
  }, "Wireless")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 440px 340px",
      gap: 16,
      padding: "0 32px 32px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 4,
      padding: 24,
      minHeight: 480,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      height: 280,
      background: "linear-gradient(180deg, #F6F6F6 0%, #E0E0E0 100%)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#999",
      fontSize: 13
    }
  }, "product image")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 4,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#00a650",
      marginBottom: 4
    }
  }, "Novo  |  +500 vendidos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 400,
      color: "#333",
      marginBottom: 8,
      lineHeight: 1.2
    }
  }, "Fone de ouvido Bluetooth sem fio \u2014 over ear, com microfone"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#999",
      textDecoration: "line-through"
    }
  }, "R$ 459"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 300,
      color: "#333",
      marginTop: 2
    }
  }, "R$ 289", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "#00a650",
      marginLeft: 8
    }
  }, "37% OFF")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#00a650",
      marginTop: 4
    }
  }, "em 12x R$ 24,08 sem juros"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#333",
      marginTop: 16,
      padding: "12px 0",
      borderTop: "1px solid #F0F0F0",
      borderBottom: "1px solid #F0F0F0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      marginBottom: 4
    }
  }, "Frete gr\xE1tis para todo o Brasil"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#666"
    }
  }, "Chegar\xE1 de quinta a sexta-feira.")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 44,
      background: "#3483FA",
      color: "#fff",
      border: 0,
      borderRadius: 4,
      marginTop: 16,
      fontSize: 16,
      fontWeight: 400,
      cursor: "pointer"
    }
  }, "Comprar agora"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 44,
      background: "#E3EDFB",
      color: "#3483FA",
      border: 0,
      borderRadius: 4,
      marginTop: 8,
      fontSize: 16,
      fontWeight: 400,
      cursor: "pointer"
    }
  }, "Adicionar ao carrinho")), /*#__PURE__*/React.createElement(MLPanel, null)));
}
Object.assign(window, {
  MLHostPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avantpro-ml/MLProductPage.jsx", error: String((e && e.message) || e) }); }

})();
