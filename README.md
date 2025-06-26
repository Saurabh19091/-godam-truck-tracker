# 🚛 Godam Vehicle Tracker

A professional vehicle tracking portal for godowns, enabling real-time monitoring of truck arrivals, delays, and offline statuses. Designed for logistics teams to manage vehicle flow and status efficiently.

> 🔗 **Live App**: [https://godam-truck-tracker.onrender.com](https://godam-truck-tracker.onrender.com)

---

## 🔍 Features

- 📅 Filter vehicle entries by selected date
- 🟢 Arrived / 🔴 Not Arrived / ⚫ Offline status with full-row color highlighting
- 🧾 Export data into downloadable PDF reports
- 🎨 Animated grid background and moving truck icons for visual appeal
- 🖥 Responsive, clean, and mobile-friendly UI

---

## 💻 Tech Stack

| Layer        | Technology                  |
|--------------|------------------------------|
| Frontend     | HTML5, CSS3, Vanilla JavaScript |
| PDF Export   | jsPDF + AutoTable            |
| Deployment   | Render                       |
| Versioning   | Git + GitHub                 |

---

## 🚀 Quick Start

```bash
git clone https://github.com/Saurabh19091/godam-truck-tracker.git
cd godam-truck-tracker
```
Folder Structure
📦 godam-truck-tracker/
├── 📁 public/
│   └── logistics-means-transport-map.jpg
├── 📁 views/
│   ├── view.html
│   └── update.html
├── 📄 index.html
├── 📄 README.md
└── ...

UI Screenshots
Dashboard
![Screenshot 2025-06-26 230344](https://github.com/user-attachments/assets/7b65fda7-48e1-4cbb-b4c7-a17d1cfea557)
![Screenshot 2025-06-26 230344](https://github.com/user-attachments/assets/7b65fda7-48e1-4cbb-b4c7-a17d1cfea557)

![Screenshot 2025-06-26 230344](https://github.com/user-attachments/assets/a19d558a-84bd-40f2-a546-e2df9dac8e68)

✅ Status Color Codes
Status	Description	Row Color
Arrived	Vehicle reached	🟢 Green
Not Arrived	Still in transit	🔴 Red
Offline	No update	⚫ Gray

🛠 Development Notes
The /fetch API must return data in the following structure:

json
Copy
Edit
[
  {
    "godam": "Godown Name",
    "entries": [
      { "vehicleNo": "BR01AB1234", "location": "Patna", "status": "Arrived" }
    ]
  }
]
Row coloring handled dynamically with class status-row-arrived, status-row-not-arrived, status-row-offline

PDF export via jsPDF.autoTable() with status text color matched

🤝 Contributing
Fork this repo

Create a new branch: git checkout -b feature/awesome-feature

Commit your changes

Push to the branch: git push origin feature/awesome-feature

Open a Pull Request

📬 Contact
Made with ❤️ by Saurabh Kumar
🔗 GitHub
📧 saurabh91official@gmail.com
📱 +91-8986908049



