# CSV-to-PieChart Web App

A lightweight, client-side web application that converts CSV files into pie charts.  
Built with **HTML**, **CSS**, and **JavaScript** — no backend required.

---

## ⭐ Features

- Upload any CSV file directly in the browser  
- Automatically parses and visualizes data as a pie chart  
- No installation, dependencies, or server needed  
- Fast and privacy-friendly (all processing happens locally)  
- Simple, minimal UI

---

## 🧾 CSV Format Requirements

To be parsed correctly, CSV files must follow this structure:

| Column | Description |
|--------|-------------|
| Group  | The label name for each slice |
| Value  | Numerical value used to determine slice size |
| Color  | Color code for the slice (e.g. `#a8e6cf`) |

### 📂 Example

Sample CSV files can be found in the `/CSV` folder of this repository.

```csv
    Group,  Value,    Color
 under 18,  15058,  #a8e6cf
 18 to 34,  18104,  #dcedc1
 35 to 59,  27579,  #ffd3b6
 60 to 74,  15397,  #ffaaa5
  over 74,   8375,  #ff8b94
