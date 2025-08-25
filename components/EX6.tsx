import React from "react";

class EX6 extends React.Component {
  state = {
    isDarkMode: false,
  };

  toggleTheme = () => {
    this.setState((prev) => ({ isDarkMode: !prev.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;

    const themeStyles: React.CSSProperties = {
      backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div style={themeStyles}>
        <h2>{isDarkMode ? "Chế độ Tối đang bật" : "Chế độ Sáng đang bật"}</h2>
        <button onClick={this.toggleTheme}>Chuyển theme</button>
      </div>
    );
  }
}

export default EX6;
