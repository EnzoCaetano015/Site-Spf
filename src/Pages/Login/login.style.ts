import { styled } from "@mui/material"

export const Wrapper = styled("div")({
  minHeight: "94vh",
  background: "linear-gradient(to bottom, #0f172a, #6b21a8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  color: "#fff",

  ".motion-container": {
    width: "100%",
    maxWidth: "400px",
  },

  ".form-card": {
    backgroundColor: "rgba(30,41,59,0.7)",
    backdropFilter: "blur(6px)",
    borderRadius: "12px",
    padding: "2rem",
  },

  ".error-box": {
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    border: "1px solid #ef4444",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    color: "#fff",
    marginBottom: "1rem",
    fontSize: "0.875rem",
  },

  ".mono": {
    backgroundColor: "#334155",
    padding: "2px 6px",
    borderRadius: "4px",
    fontFamily: "monospace",
    fontSize: "0.85rem",
  },
})
