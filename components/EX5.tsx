import React, { Component } from "react";

type UserData = {
  name: string;
  email: string;
  age: number | "";
};

type State = {
  formData: UserData;
  error: string;
  submittedData: UserData | null;
};

class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      formData: { name: "", email: "", age: "" },
      error: "",
      submittedData: null,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      formData: {
        ...prev.formData,
        [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
      },
    }));
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state.formData;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submittedData: null });
      return;
    }

    if (age !== "" && age < 0) {
      this.setState({ error: "Tuổi không được âm", submittedData: null });
      return;
    }

    this.setState({
      error: "",
      submittedData: { name, email, age },
    });
  };

  handleReset = () => {
    this.setState({
      formData: { name: "", email: "", age: "" },
      error: "",
      submittedData: null,
    });
  };

  render() {
    const { formData, error, submittedData } = this.state;

    return (
      <div style={{ padding: "20px", maxWidth: "400px" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Tuổi: </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Gửi</button>
          <button
            type="button"
            onClick={this.handleReset}
            style={{ marginLeft: "10px" }}
          >
            Xóa tất cả
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {submittedData && (
          <div style={{ marginTop: "20px" }}>
            <h3>Thông tin đã nhập:</h3>
            <p><strong>Tên:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Tuổi:</strong> {submittedData.age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;
