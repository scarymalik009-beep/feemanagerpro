# 🏫 School Fee Manager Pro - Desktop Edition

![Build Status](https://github.com/scarymalik009-beep/Fee-Manager/workflows/Build%20Installer/badge.svg)
[![License](https://img.shields.io/badge/license-Commercial-green.svg)](LICENSE.txt)

**Professional School Fee Management System with Unlimited Local Storage**

---

## ✨ Features

### 💰 Complete Fee Management
- Student fee collection with receipt printing
- Multiple fee types (Monthly, Admission, Annual, etc.)
- Automatic late fee calculation
- Fee defaulters tracking
- Outstanding balance monitoring

### 👨‍🎓 Student Management
- Complete student profiles with photos
- Class/section organization
- Student promotion system
- Parent contact details
- Student ID cards generation

### 👨‍🏫 Teacher Management
- Teacher profiles and records
- Salary management system
- Payment history tracking
- Monthly salary reports

### 📊 Reports & Analytics
- Daily collection reports
- Monthly revenue analysis
- Class-wise financial reports
- Defaulters report
- Export to PDF/Excel

### 💾 Data Management
- **Unlimited local storage** (SQLite database)
- Automatic database backup
- Manual backup/restore options
- Data export functionality
- Optional Google Drive integration

### 🖨️ Professional Printing
- Fee receipts with school logo
- Student reports
- Financial statements
- Custom templates

---

## 🚀 Quick Start

### For End Users

**Download the latest installer:**
1. Go to [Releases](https://github.com/scarymalik009-beep/Fee-Manager/releases)
2. Download `School Fee Manager Pro-Setup.exe`
3. Run the installer
4. Follow the setup wizard
5. Start managing fees!

**System Requirements:**
- Windows 10/11 (64-bit)
- 4 GB RAM minimum
- 500 MB disk space
- 1280x720 display minimum

---

## 👨‍💻 For Developers

### Building from Source

**Prerequisites:**
```bash
Node.js 18+ (https://nodejs.org/)
npm (comes with Node.js)
Git
```

**Clone and Build:**
```bash
# Clone repository
git clone https://github.com/scarymalik009-beep/Fee-Manager.git
cd Fee-Manager

# Install dependencies
npm install

# Run in development
npm run electron:dev

# Build installer
npm run electron:build:win
```

**Output:** `release/School Fee Manager Pro-Setup-3.0.0.exe`

---

## 🤖 Automatic Builds (GitHub Actions)

This repository uses GitHub Actions for automatic installer builds.

**How it works:**
1. Push code to `main` branch
2. GitHub automatically builds the installer
3. Wait 10-15 minutes
4. Download from Actions → Artifacts

**Manual trigger:**
- Go to Actions tab
- Select "Build Installer" workflow
- Click "Run workflow"

---

## 📁 Project Structure

```
Fee-Manager/
├── .github/workflows/     # GitHub Actions
│   └── build.yml         # Build automation
├── electron/             # Electron main process
│   ├── main.js          # Application entry
│   ├── database.js      # SQLite database
│   └── preload.js       # Preload script
├── src/                 # React source code
│   ├── components/      # UI components
│   ├── pages/          # Application pages
│   ├── utils/          # Utility functions
│   └── store/          # State management
├── assets/             # Application assets
│   └── icon.svg        # App icon
├── dist/               # Build output (auto-generated)
├── release/            # Installers (auto-generated)
├── package.json        # Dependencies & scripts
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

---

## 🛠️ Tech Stack

**Frontend:**
- React 19
- TypeScript
- Tailwind CSS 4
- Vite 7
- Lucide React (icons)
- Recharts (charts)

**Desktop:**
- Electron 28
- SQLite3 (database)
- Electron Builder (installer)

**Build & Deploy:**
- GitHub Actions
- Automated CI/CD

---

## 📝 Available Scripts

```bash
# Development
npm run dev                 # Start Vite dev server
npm run electron:dev        # Run Electron in dev mode

# Building
npm run build              # Build React app
npm run verify             # Verify build readiness
npm run electron:build:win # Create Windows installer

# Utilities
npm install                # Install dependencies
npm rebuild sqlite3        # Rebuild SQLite module
```

---

## 🐛 Troubleshooting

### Common Build Issues

**Issue: "sqlite3 build error"**
```bash
npm install sqlite3 --build-from-source=false
```

**Issue: "electron-builder failed"**
```bash
npm install electron-builder@latest --save-dev
npm run electron:build:win
```

**Issue: "Out of memory"**
```bash
# PowerShell
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run electron:build:win
```

**More solutions:** See [POST_INSTALL_TROUBLESHOOTING.md](POST_INSTALL_TROUBLESHOOTING.md)

---

## 📚 Documentation

- [START_HERE.md](START_HERE.md) - Complete beginner's guide
- [INSTALLER_BUILD_GUIDE.md](INSTALLER_BUILD_GUIDE.md) - Build instructions
- [INSTALLER_GUIDE_URDU.md](INSTALLER_GUIDE_URDU.md) - Urdu instructions
- [POST_INSTALL_TROUBLESHOOTING.md](POST_INSTALL_TROUBLESHOOTING.md) - Fix issues
- [ELECTRON_IMPLEMENTATION_GUIDE.md](ELECTRON_IMPLEMENTATION_GUIDE.md) - Technical details

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

**Development workflow:**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Copyright © 2026 MWA Software. All rights reserved.

This is commercial software. See [LICENSE.txt](LICENSE.txt) for details.

---

## 🆘 Support

**For issues:**
- Check [Troubleshooting Guide](POST_INSTALL_TROUBLESHOOTING.md)
- Search existing [Issues](https://github.com/scarymalik009-beep/Fee-Manager/issues)
- Create a new issue with details

**For questions:**
- Read the documentation
- Check closed issues
- Ask in Discussions

---

## 🎯 Roadmap

### Version 3.0 (Current)
- ✅ Desktop edition with unlimited storage
- ✅ SQLite database integration
- ✅ Professional installer
- ✅ Complete offline functionality
- ✅ GitHub Actions CI/CD

### Version 3.1 (Planned)
- 🔄 Automatic updates
- 🔄 Multi-language support
- 🔄 Enhanced reporting
- 🔄 SMS integration

### Version 4.0 (Future)
- 🔄 Cloud sync option
- 🔄 Mobile app companion
- 🔄 Biometric attendance
- 🔄 Online fee payment

---

## 📊 Project Stats

- **Version:** 3.0.0
- **Release Date:** February 2026
- **Platform:** Windows 10/11
- **Language:** TypeScript/JavaScript
- **Framework:** Electron + React

---

## 🙏 Acknowledgments

Built with:
- [Electron](https://www.electronjs.org/) - Desktop framework
- [React](https://react.dev/) - UI library
- [SQLite](https://www.sqlite.org/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool

Special thanks to all open-source contributors!

---

## 📞 Contact

**Developer:** MWA Software  
**Email:** support@mwasoftware.com  
**Website:** [Coming Soon]

---

**Made with ❤️ for Schools**

*Simplifying fee management, one school at a time.*

---

## ⭐ Star this repo if you find it helpful!

[![GitHub stars](https://img.shields.io/github/stars/scarymalik009-beep/Fee-Manager.svg?style=social&label=Star)](https://github.com/scarymalik009-beep/Fee-Manager)
