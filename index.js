const info = [
    { langue: process.env.lang },
    { version: process.env.shlvl }
];
for (const ele of info) {
    console.log(ele);
}

process.stdin.on('readable', function() {
    const input = process.stdin.read();
    if (input !== null) {
        const instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});