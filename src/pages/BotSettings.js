import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";

const BotSettingsPage = ({ onLogout }) => {
  const [bot, setBot] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", botUrl: "", weatherToken: "" });

  useEffect(() => {
    fetchBot();
  }, []);

  const fetchBot = async () => {
    try {
      const res = await api.get("/bot-settings");
      setBot(res.data);
      setForm({
        name: res.data.name || "",
        botUrl: res.data.botUrl || "",
        weatherToken: res.data.weatherToken || "",
      });
    } catch (err) {
      console.error("Error fetching bot data:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await api.post("/bot-settings", form);
      setEditing(false);
      fetchBot();
    } catch (err) {
      alert("Failed to update bot");
    }
  };

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={styles.container}>
        <h2 style={styles.heading}>🤖 Bot Settings</h2>

        {editing ? (
          <div style={styles.formCard}>
            <div style={styles.formGroup}>
              <label style={styles.inputLabel}>Bot Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.inputLabel}>Bot Token</label>
              <input
                type="text"
                name="botUrl"
                value={form.botUrl}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.inputLabel}>Weather Token</label>
              <input
                type="text"
                name="weatherToken"
                value={form.weatherToken}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.buttonRow}>
              <button onClick={handleSave} style={styles.updateBtn}>
                💾 Save
              </button>
              <button
                onClick={() => setEditing(false)}
                style={styles.cancelBtn}
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        ) : bot ? (
          <>
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td style={styles.label}>Bot Name</td>
                  <td>{bot.name || "—"}</td>
                </tr>
                <tr>
                  <td style={styles.label}>Bot Token</td>
                  <td>{bot.botUrl || "—"}</td>
                </tr>
                <tr>
                  <td style={styles.label}>Weather Token</td>
                  <td>{bot.weatherToken || "—"}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => setEditing(true)} style={styles.updateBtn}>
              ✏️ Edit
            </button>
          </>
        ) : (
          <p style={{ color: "#888" }}>No bot data available.</p>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: 30,
    fontFamily: `'Poppins', sans-serif`,
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    color: "#f58220",
    fontSize: 22,
    marginBottom: 20,
  },
  table: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "white",
    borderCollapse: "collapse",
    border: "1px solid #ddd",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    backgroundColor: "#f4f4f4",
    padding: 12,
    width: 150,
    borderBottom: "1px solid #eee",
  },
  input: {
    padding: 10,
    width: "100%",
    maxWidth: 600,
    borderRadius: 5,
    border: "1px solid #ccc",
    marginBottom: 10,
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
  },
  updateBtn: {
    backgroundColor: "#f58220",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: 5,
    fontWeight: "bold",
    cursor: "pointer",
    marginRight: 10,
  },
  cancelBtn: {
    backgroundColor: "#ddd",
    color: "#333",
    border: "none",
    padding: "10px 20px",
    borderRadius: 5,
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default BotSettingsPage;
