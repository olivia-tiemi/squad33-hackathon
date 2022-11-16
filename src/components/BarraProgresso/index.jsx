const BarraProgresso = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: "3vh",
    width: "100%",
    backgroundColor: "rgb(211, 211, 211)",
    border: "1px solid rgb(128, 128, 128)",
    borderRadius: "20px",
    marginBottom: "5vh",
  };

  const fillerStyles = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    transition: "width 0.5s ease-in-out",
  };

  const labelStyles = {
    padding: "0 1vh",
    fontSize: "1.7vh",
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "700",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{completed}%</span>
      </div>
    </div>
  );
};

export default BarraProgresso;
