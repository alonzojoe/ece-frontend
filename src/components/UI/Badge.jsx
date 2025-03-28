const Badge = ({ state }) => {
  const stateMapping = {
    normal: { classN: "badge-normal", icon: "ti ti-check", title: "Normal" },
    warning: {
      classN: "badge-warning",
      icon: "ti ti-alert-triangle",
      title: "Warning",
    },
    critical: {
      classN: "badge-critical",
      icon: "ti ti-exclamation-circle",
      title: "Critical",
    },
  };

  const { classN, icon, title } = stateMapping[state] || {};

  return (
    <div
      className={`d-flex justify-content-center align-items-center gap-1 ${classN}`}
    >
      <div className="fs">
        <i className={icon} />
      </div>
      <div>
        <small>{title}</small>
      </div>
    </div>
  );
};

export default Badge;
