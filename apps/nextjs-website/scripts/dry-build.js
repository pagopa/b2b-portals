const { execSync } = require('child_process');

try {
  console.log('Starting dry build...');
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      USE_MOCK: 'true',
      NEXT_TELEMETRY_DISABLED: '1',
    },
  });
  console.log('Dry build completed successfully.');
} catch (error) {
  console.error('Dry build failed.');
  process.exit(1);
}
