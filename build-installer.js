/**
 * School Fee Manager Pro - Complete Build Script
 * This script ensures all dependencies are properly built and packaged
 * Fixes common installer issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 School Fee Manager Pro - Build Script Started');
console.log('='.repeat(60));

// Step 1: Clean old builds
console.log('\n📦 Step 1: Cleaning old builds...');
try {
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
    console.log('✅ Cleaned dist folder');
  }
  if (fs.existsSync('release')) {
    fs.rmSync('release', { recursive: true, force: true });
    console.log('✅ Cleaned release folder');
  }
} catch (err) {
  console.log('⚠️  Warning:', err.message);
}

// Step 2: Install dependencies
console.log('\n📦 Step 2: Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed');
} catch (err) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// Step 3: Rebuild native modules
console.log('\n🔧 Step 3: Rebuilding native modules...');
try {
  execSync('npm rebuild sqlite3 --build-from-source', { stdio: 'inherit' });
  console.log('✅ Native modules rebuilt');
} catch (err) {
  console.log('⚠️  Warning: Could not rebuild native modules, will use prebuilt');
}

// Step 4: Build frontend
console.log('\n🏗️  Step 4: Building frontend...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Frontend built successfully');
} catch (err) {
  console.error('❌ Failed to build frontend');
  process.exit(1);
}

// Step 5: Verify build output
console.log('\n🔍 Step 5: Verifying build...');
if (!fs.existsSync('dist') || !fs.readdirSync('dist').length) {
  console.error('❌ Build verification failed - dist folder empty');
  process.exit(1);
}
console.log('✅ Build verified');

// Step 6: Create installer
console.log('\n📦 Step 6: Creating Windows installer...');
try {
  execSync('npm run electron:build:win', { stdio: 'inherit' });
  console.log('✅ Installer created successfully');
} catch (err) {
  console.error('❌ Failed to create installer');
  process.exit(1);
}

// Step 7: Display results
console.log('\n' + '='.repeat(60));
console.log('✅ BUILD COMPLETED SUCCESSFULLY!');
console.log('='.repeat(60));
console.log('\n📁 Installer Location: ./release/');
console.log('\n🎉 Your installer is ready to use!');
console.log('\nInstaller files:');
try {
  const files = fs.readdirSync('release');
  files.forEach(file => {
    const stats = fs.statSync(path.join('release', file));
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`  - ${file} (${sizeMB} MB)`);
  });
} catch (err) {
  console.log('  (Unable to list files)');
}

console.log('\n' + '='.repeat(60));
