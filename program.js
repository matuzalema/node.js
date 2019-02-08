process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
        var nodeInf = process.versions.node;
        process.stdout.write('Node version: ' + nodeInf);

        var systemLanguage = process.env.LANG;
        // console.log(systemLanguage);

        var system = process.platform;
        // console.log(system);

        switch (system)
        {
            // case "win32":
            //     console.log(systemLanguage);
            //     process.stdout.write('Twoj jezyk to:' + systemLanguage);
            //     break;
            case "macOS":
                // console.log(systemLanguage);
                process.stdout.write('Twoj system to:' + systemLanguage);
                break;
            case "Linux":
                // console.log(systemLanguage);
                process.stdout.write('Twoj system to:' + systemLanguage);
                break;
        }

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write(' Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write(' Wrong instruction!');        }
    }
});