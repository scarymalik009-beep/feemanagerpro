@echo off
REM School Fee Manager Pro - One-Click Installer Builder
REM Double-click this file to build installer

echo.
echo ========================================
echo School Fee Manager Pro
echo Installer Build Tool
echo ========================================
echo.
echo Starting build process...
echo This may take 5-10 minutes.
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Then run this script again.
    echo.
    pause
    exit /b 1
)

REM Show Node.js version
echo Checking Node.js...
node --version
echo.

REM Check if npm is available
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not available!
    echo Please reinstall Node.js.
    echo.
    pause
    exit /b 1
)

echo Checking npm...
npm --version
echo.

REM Run the setup script
echo.
echo ========================================
echo Running automated build script...
echo ========================================
echo.

node setup-and-build.js

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS!
    echo ========================================
    echo.
    echo Your installer is ready in the 'release' folder
    echo.
    echo Opening release folder...
    start release
    echo.
) else (
    echo.
    echo ========================================
    echo BUILD FAILED
    echo ========================================
    echo.
    echo Please check the error messages above.
    echo.
    echo Common solutions:
    echo 1. Run: npm cache clean --force
    echo 2. Delete node_modules folder and try again
    echo 3. Check your internet connection
    echo 4. Make sure you have 5+ GB free disk space
    echo.
)

echo.
echo Press any key to exit...
pause >nul
