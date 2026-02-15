# School Fee Manager Pro - Installer Build Guide
**Complete Professional Desktop Application**

## ✅ Prerequisites Checklist

Before building the installer, ensure you have:

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **npm** (comes with Node.js)
   - Verify: `npm --version`

3. **Windows** (for building Windows installer)
   - Required for .exe installer creation
   - For Mac/Linux, see platform-specific sections below

4. **Internet Connection**
   - Required for downloading dependencies

---

## 🚀 Quick Start - Build Installer in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React & TypeScript
- Electron & Electron Builder
- SQLite3 database
- All UI components and utilities

**Expected time:** 2-5 minutes (depending on internet speed)

### Step 2: Build the Application
```bash
npm run build
```

This compiles your React app into optimized production files.

**Expected time:** 30-60 seconds

### Step 3: Create Installer
```bash
npm run electron:build:win
```

This packages everything into a Windows installer (.exe)

**Expected time:** 2-3 minutes

**Output:** `release/School Fee Manager Pro-Setup-3.0.0.exe`

---

## 🎯 Alternative Build Methods

### Method 1: Automated Build Script (Recommended)
```bash
npm run build:installer
```

This runs the automated build script that:
- ✅ Cleans old builds
- ✅ Installs dependencies
- ✅ Rebuilds native modules
- ✅ Builds frontend
- ✅ Creates installer
- ✅ Shows file sizes and locations

### Method 2: Manual Step-by-Step
```bash
# Clean previous builds
rm -rf dist release

# Install dependencies
npm install

# Rebuild SQLite3 for Electron
npm rebuild sqlite3 --build-from-source

# Build React app
npm run build

# Create Windows installer
npm run electron:build:win
```

---

## 📦 What Gets Built

The installer will include:

1. **Application Files**
   - Compiled React application (dist folder)
   - Electron runtime
   - Database engine (SQLite3)
   - All dependencies

2. **Installation Features**
   - Custom installation directory selection
   - Desktop shortcut creation
   - Start menu shortcuts
   - Uninstaller
   - License agreement

3. **Database Setup**
   - Automatic database initialization
   - Schema creation on first run
   - Data storage in AppData folder

---

## 🔧 Troubleshooting Common Issues

### Issue 1: "npm install" fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Issue 2: "sqlite3" build error
**Solution:**
```bash
# Install Windows build tools (run as Administrator)
npm install --global windows-build-tools

# Or use pre-built binaries
npm install sqlite3 --build-from-source=false
```

### Issue 3: "electron-builder" error
**Solution:**
```bash
# Update electron-builder
npm install electron-builder@latest --save-dev

# Try building again
npm run electron:build:win
```

### Issue 4: Installer runs but app crashes
**Common causes:**
- Missing node_modules in build
- Database path issues
- Icon files missing

**Solution:**
```bash
# Ensure package.json includes all files
# Check "files" array in build configuration
# Rebuild with:
npm run build:installer
```

### Issue 5: "Module not found" after installation
**Solution:** Edit `package.json` and ensure these files are included:
```json
"files": [
  "dist/**/*",
  "electron/**/*",
  "assets/**/*",
  "package.json",
  "node_modules/**/*"
]
```

---

## 🎨 Customizing the Installer

### Change App Name
Edit `package.json`:
```json
{
  "name": "your-app-name",
  "productName": "Your App Display Name"
}
```

### Change Icon
Replace files in `assets/` folder:
- `icon.ico` - Windows icon (256x256)
- `icon.icns` - Mac icon
- `icon.png` - Linux icon (512x512)

### Change Version
Edit `package.json`:
```json
{
  "version": "3.0.0"
}
```

### Add Custom Installation Steps
Edit `installer-script.nsh` for advanced NSIS customization

---

## 📱 Platform-Specific Builds

### Windows (Primary)
```bash
npm run electron:build:win
```
**Output:** 
- `School Fee Manager Pro-Setup-3.0.0.exe` (NSIS installer)

### macOS
```bash
npm run electron:build:mac
```
**Output:**
- `.dmg` file (disk image)
- `.zip` file

**Note:** Requires macOS to build Mac installer

### Linux
```bash
npm run electron:build:linux
```
**Output:**
- `.AppImage` (universal Linux)
- `.deb` (Debian/Ubuntu)

---

## 🔍 Installer Testing Checklist

After building, test:

1. ✅ Installation completes without errors
2. ✅ Desktop shortcut works
3. ✅ Start menu shortcut works
4. ✅ Application launches successfully
5. ✅ Database initializes correctly
6. ✅ All features work (students, fees, reports)
7. ✅ Data persists after restart
8. ✅ Uninstaller removes application properly
9. ✅ No leftover files (optional data cleanup)

---

## 📊 Build Output Details

After successful build:

```
release/
├── School Fee Manager Pro-Setup-3.0.0.exe    (Main installer - 80-120 MB)
├── School Fee Manager Pro-Setup-3.0.0.exe.blockmap
└── latest.yml                                 (Update manifest)
```

### Installer Features:
- **Size:** ~100 MB (includes Electron runtime)
- **Type:** NSIS installer (Windows standard)
- **Silent install:** Not enabled (user control)
- **Elevated privileges:** Only if needed
- **Installation location:** User-selectable
- **Uninstall:** Full uninstaller included

---

## 🚢 Distribution

### For End Users:
Send them: `School Fee Manager Pro-Setup-3.0.0.exe`

### Installation Instructions for Users:
1. Double-click the installer
2. Follow installation wizard
3. Choose installation directory (default: C:\Program Files\School Fee Manager Pro)
4. Click Install
5. Launch from desktop shortcut

### System Requirements:
- **OS:** Windows 10/11 (64-bit)
- **RAM:** 4 GB minimum
- **Disk Space:** 500 MB
- **Display:** 1280x720 minimum

---

## 🔒 Security & Signing

**Note:** This installer is not code-signed. 

To add code signing:
1. Purchase a code signing certificate
2. Add certificate to `electron-builder.yml`:
```yaml
win:
  certificateFile: path/to/certificate.p12
  certificatePassword: your-password
```

---

## 📝 Version History

### v3.0.0 (Current)
- Desktop edition with unlimited storage
- SQLite database integration
- Complete offline functionality
- Professional installer

---

## 🆘 Need Help?

If you encounter issues:

1. Check the `BUILD_INSTRUCTIONS.md` file
2. Review error messages carefully
3. Ensure all prerequisites are installed
4. Try the automated build script: `npm run build:installer`
5. Check Node.js and npm versions

---

## 🎉 Success!

Once you have the installer:
- Test it thoroughly
- Share with users
- Collect feedback
- Update version and rebuild as needed

**Your professional desktop application is ready for distribution!** 🚀
