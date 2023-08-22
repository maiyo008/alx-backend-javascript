process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input) {
    console.log(`Your name is: ${input}`);
    process.exit();
  } else {
    console.log('Please enter your name.');
  }
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
