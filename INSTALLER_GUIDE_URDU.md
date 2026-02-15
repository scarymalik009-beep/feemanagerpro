# School Fee Manager Pro - Installer Banane Ka Complete Guide
## Complete Step-by-Step Instructions (Urdu + English)

---

## 📋 Pehle Yeh Zaroor Install Karein

### 1. Node.js Install Karein
**Kya hai yeh:** JavaScript runtime jo app ko build karne ke liye zaroori hai

**Kahan se download karein:**
- Website: https://nodejs.org/
- Download karo: **LTS version** (recommended)
- Version: 18 ya usse upar

**Kaise install karein:**
1. Download karo installer
2. Double-click karo
3. "Next" dabate jao
4. Sab default settings rakho
5. "Install" karo

**Verify karo:**
```bash
node --version
```
Output: `v18.x.x` ya usse upar hona chahiye

---

## 🚀 Installer Build Karne Ka Complete Process

### Method 1: Automated (Sabse Aasan - Recommended) ✅

Yeh method sabse reliable hai kyunke yeh sab kuch automatically handle karta hai.

#### Step 1: Dependencies Install Karo
```bash
npm install
```

**Kya hoga:**
- Sare packages download honge
- Time lagega: 2-5 minutes (internet speed pe depend karta hai)
- Progress bar dekhoge

**Agar error aaye:**
```bash
# Cache clean karo
npm cache clean --force

# Phir dobara try karo
npm install
```

#### Step 2: Build Verify Karo (Optional par Recommended)
```bash
npm run verify
```

**Kya check hoga:**
- Node.js version
- Required files
- package.json validity
- Assets availability

**Output dekhoge:**
```
✅ ALL CHECKS PASSED!
🚀 Ready to build installer!
```

#### Step 3: Automated Installer Build Karo
```bash
npm run build:installer
```

**Kya hoga:**
1. ✅ Purane builds clean honge
2. ✅ Dependencies install honge
3. ✅ Native modules rebuild honge
4. ✅ Frontend build hoga
5. ✅ Windows installer create hoga
6. ✅ File sizes aur location show honge

**Time lagega:** 5-8 minutes total

**Success pe dekhoge:**
```
✅ BUILD COMPLETED SUCCESSFULLY!
📁 Installer Location: ./release/
🎉 Your installer is ready to use!
```

---

### Method 2: Manual Step-by-Step (Advanced Users)

Agar automated method kaam na kare ya aapko control chahiye:

#### Step 1: Old Builds Clean Karo
```bash
# Windows
rmdir /s /q dist
rmdir /s /q release

# Mac/Linux
rm -rf dist release
```

#### Step 2: Dependencies Install Karo
```bash
npm install
```

#### Step 3: SQLite3 Rebuild Karo (Important!)
```bash
npm rebuild sqlite3 --build-from-source
```

**Kyun zaroori hai:** Database properly kaam kare installer mein

**Agar error aaye:**
```bash
# Prebuilt binary use karo
npm install sqlite3 --build-from-source=false
```

#### Step 4: Frontend Build Karo
```bash
npm run build
```

**Kya hoga:** React app compile hogi `dist` folder mein

**Time lagega:** 30-60 seconds

**Check karo:** `dist` folder bana hai ya nahi
```bash
dir dist    # Windows
ls dist     # Mac/Linux
```

#### Step 5: Windows Installer Create Karo
```bash
npm run electron:build:win
```

**Time lagega:** 2-3 minutes

**Output:** `release` folder mein installer milega

---

## 📦 Installer Files Ka Location

Build complete hone ke baad:

```
project-folder/
└── release/
    ├── School Fee Manager Pro-Setup-3.0.0.exe  ← YEH HAI AAPKA INSTALLER!
    ├── School Fee Manager Pro-Setup-3.0.0.exe.blockmap
    └── latest.yml
```

**Main installer file:**
- **Name:** `School Fee Manager Pro-Setup-3.0.0.exe`
- **Size:** ~100-120 MB
- **Type:** Windows NSIS Installer

---

## 🎯 Common Errors Aur Unka Solution

### Error 1: "npm: command not found"
**Matlab:** Node.js properly install nahi hua

**Solution:**
1. Node.js dobara install karo
2. Computer restart karo
3. Command prompt dobara kholo
4. `node --version` aur `npm --version` verify karo

---

### Error 2: "ENOENT: no such file or directory"
**Matlab:** Koi required file missing hai

**Solution:**
```bash
# Verify karo sab files hain
npm run verify

# Missing files check karo error message mein
```

---

### Error 3: "sqlite3 build failed"
**Matlab:** Database module build nahi ho raha

**Solution 1 (Recommended):**
```bash
# Prebuilt binary use karo
npm install sqlite3 --build-from-source=false
```

**Solution 2 (Advanced):**
```bash
# Windows Build Tools install karo (Admin mode mein)
npm install --global windows-build-tools

# Phir rebuild karo
npm rebuild sqlite3 --build-from-source
```

---

### Error 4: "electron-builder failed"
**Matlab:** Installer create hone mein problem

**Solution:**
```bash
# electron-builder update karo
npm install electron-builder@latest --save-dev

# Cache clean karo
npm cache clean --force

# Dobara try karo
npm run build:installer
```

---

### Error 5: "Cannot find module 'xxx'"
**Matlab:** Koi dependency missing hai

**Solution:**
```bash
# Sab dependencies dobara install karo
rm -rf node_modules  # Mac/Linux
rmdir /s /q node_modules  # Windows

npm install

# Phir build karo
npm run build:installer
```

---

### Error 6: "Out of memory" ya "JavaScript heap out of memory"
**Matlab:** Build ke liye memory kam pad rahi hai

**Solution:**
```bash
# Increase Node.js memory limit
$env:NODE_OPTIONS="--max-old-space-size=4096"  # Windows PowerShell
export NODE_OPTIONS="--max-old-space-size=4096"  # Mac/Linux

# Phir build karo
npm run build:installer
```

---

## ✅ Installer Test Kaise Kare

Build complete hone ke baad, **zaroor test karo:**

### 1. Installation Test
1. `release` folder kholo
2. `School Fee Manager Pro-Setup-3.0.0.exe` pe double-click karo
3. Installer wizard follow karo
4. Installation complete hone do

### 2. Application Launch Test
1. Desktop shortcut khojo
2. Double-click karo
3. App launch honi chahiye (2-5 seconds mein)

### 3. Database Test
1. App kholo
2. Setup wizard complete karo
3. Student add karo
4. Fee entry karo
5. App close karo
6. Dobara kholo
7. Check karo data saved hai

### 4. Features Test
- ✅ Students add/edit/delete
- ✅ Fees collect
- ✅ Reports generate
- ✅ Database backup
- ✅ Print functionality

### 5. Uninstaller Test
1. Settings > Apps > Installed apps kholo
2. "School Fee Manager Pro" dhundo
3. "Uninstall" karo
4. Check karo properly remove hua ya nahi

---

## 🎨 Customization (Optional)

### App Name Change Karo
**File:** `package.json`

```json
{
  "name": "school-fee-manager-desktop",
  "productName": "Your Custom Name"
}
```

### Version Change Karo
**File:** `package.json`

```json
{
  "version": "4.0.0"
}
```

### Icon Change Karo
**Location:** `assets/` folder

Replace these files:
- `icon.ico` (256x256 PNG se convert karo)
- `icon.svg` (Vector format)

**Tools for icon creation:**
- https://www.icoconverter.com/
- https://convertio.co/png-ico/

---

## 📊 Build Time Estimates

**Total time:** 5-10 minutes (first time)

Breakdown:
1. npm install: 2-5 minutes
2. Build verification: 10 seconds
3. Frontend build: 30-60 seconds
4. Installer creation: 2-3 minutes

**Subsequent builds:** 3-5 minutes (faster kyunke dependencies already installed hain)

---

## 🎁 Final Output

**Success ke baad aapke paas hoga:**

```
✅ School Fee Manager Pro-Setup-3.0.0.exe
   - Size: ~100 MB
   - Ready to distribute
   - Professional installer
   - Includes all dependencies
```

**Installer features:**
- ✅ User-friendly wizard
- ✅ Custom installation directory
- ✅ Desktop shortcut
- ✅ Start menu shortcut
- ✅ Automatic database setup
- ✅ Complete uninstaller

---

## 🚀 Distribution

**End users ko yeh bhejein:**
- `School Fee Manager Pro-Setup-3.0.0.exe`

**Installation instructions for users:**
```
1. Double-click installer
2. Click "Next"
3. Accept license
4. Choose installation folder
5. Click "Install"
6. Launch from desktop
```

**System requirements:**
- Windows 10 or 11
- 4 GB RAM
- 500 MB disk space
- 1280x720 screen minimum

---

## 📞 Help & Support

**Agar koi problem aaye:**

1. Error message carefully pado
2. Is guide mein solution dhundo
3. Verify karo Node.js properly installed hai
4. `npm run verify` chalao
5. Internet connection check karo

**Important commands reference:**
```bash
# Check versions
node --version
npm --version

# Verify build readiness
npm run verify

# Build installer (recommended)
npm run build:installer

# Quick build (if automated fails)
npm run build && npm run electron:build:win
```

---

## 🎉 Congratulations!

Agar sab steps follow kiye to aapka **professional Windows installer** ready hai!

**Next steps:**
1. Installer test karo thoroughly
2. Different computers pe try karo
3. Users ko distribute karo
4. Feedback collect karo
5. Future updates ke liye version number badhao

**Happy coding! 🚀**
