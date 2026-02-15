#!/usr/bin/env node

/**
 * Pre-Build Verification Script
 * Ensures all requirements are met before building installer
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 School Fee Manager Pro - Pre-Build Verification');
console.log('='.repeat(60));

let errors = [];
let warnings = [];

// Check 1: Node.js version
console.log('\n1️⃣  Checking Node.js version...');
try {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
  
  if (majorVersion >= 18) {
    console.log(`✅ Node.js ${nodeVersion} (Good)`);
  } else {
    errors.push(`Node.js version ${nodeVersion} is too old. Requires v18+`);
    console.log(`❌ Node.js ${nodeVersion} (Too old - need v18+)`);
  }
} catch (err) {
  errors.push('Cannot detect Node.js version');
}

// Check 2: npm version
console.log('\n2️⃣  Checking npm version...');
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✅ npm ${npmVersion}`);
} catch (err) {
  errors.push('npm not found');
}

// Check 3: Required files exist
console.log('\n3️⃣  Checking required files...');
const requiredFiles = [
  'package.json',
  'electron/main.js',
  'electron/database.js',
  'electron/preload.js',
  'src/main.tsx',
  'src/App.tsx',
  'index.html',
  'vite.config.ts'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    errors.push(`Missing required file: ${file}`);
    console.log(`❌ ${file} (MISSING)`);
  }
});

// Check 4: Assets folder
console.log('\n4️⃣  Checking assets...');
if (!fs.existsSync('assets')) {
  warnings.push('Assets folder not found - will use defaults');
  console.log('⚠️  Assets folder not found (will use defaults)');
} else {
  console.log('✅ Assets folder exists');
  
  // Check for icon files
  const iconFiles = ['icon.svg'];
  iconFiles.forEach(icon => {
    const iconPath = path.join('assets', icon);
    if (fs.existsSync(iconPath)) {
      console.log(`✅ ${icon}`);
    } else {
      warnings.push(`Icon file missing: ${icon}`);
      console.log(`⚠️  ${icon} (missing - will use default)`);
    }
  });
}

// Check 5: package.json validity
console.log('\n5️⃣  Validating package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Check required fields
  const requiredFields = ['name', 'version', 'main', 'scripts'];
  requiredFields.forEach(field => {
    if (pkg[field]) {
      console.log(`✅ ${field}: ${typeof pkg[field] === 'object' ? 'defined' : pkg[field]}`);
    } else {
      errors.push(`package.json missing field: ${field}`);
      console.log(`❌ ${field} (MISSING)`);
    }
  });
  
  // Check build configuration
  if (pkg.build) {
    console.log('✅ Build configuration found');
  } else {
    warnings.push('No build configuration in package.json');
    console.log('⚠️  Build configuration not found');
  }
  
} catch (err) {
  errors.push('Cannot parse package.json: ' + err.message);
  console.log(`❌ package.json parsing failed`);
}

// Check 6: Disk space
console.log('\n6️⃣  Checking disk space...');
try {
  // This is a simplified check - actual implementation would use a library
  console.log('✅ Disk space check skipped (assumed OK)');
} catch (err) {
  warnings.push('Cannot check disk space');
}

// Check 7: node_modules
console.log('\n7️⃣  Checking dependencies...');
if (fs.existsSync('node_modules')) {
  const depCount = fs.readdirSync('node_modules').length;
  console.log(`✅ node_modules exists (${depCount} packages)`);
} else {
  warnings.push('node_modules not found - run npm install first');
  console.log('⚠️  node_modules not found (run npm install)');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(60));

if (errors.length === 0 && warnings.length === 0) {
  console.log('\n✅ ALL CHECKS PASSED!');
  console.log('\n🚀 Ready to build installer!');
  console.log('\nRun: npm run build:installer');
  process.exit(0);
} else {
  if (errors.length > 0) {
    console.log('\n❌ ERRORS FOUND:');
    errors.forEach((err, i) => {
      console.log(`   ${i + 1}. ${err}`);
    });
  }
  
  if (warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    warnings.forEach((warn, i) => {
      console.log(`   ${i + 1}. ${warn}`);
    });
  }
  
  if (errors.length > 0) {
    console.log('\n❌ Cannot proceed with build. Fix errors first.');
    process.exit(1);
  } else {
    console.log('\n⚠️  You can proceed, but warnings should be addressed.');
    console.log('\n🚀 Run: npm run build:installer');
    process.exit(0);
  }
}
