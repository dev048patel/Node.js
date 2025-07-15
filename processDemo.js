//console.log(process);

// argv property is an array that contains the command line arguments
//console.log(process.argv);
//console.log(process.argv[3]);

//process.env
console.log(process.env.LOGNAME);   

//pid
console.log(process.pid); // Process ID of the current process

//cwd
console.log(process.cwd()); // Current working directory of the process

//title
console.log(process.title); // Title of the process

//memoryUsage
console.log(process.memoryUsage()); // Memory usage of the process

//uptime
console.log(process.uptime()); // Uptime of the process in seconds

process.on('exit', (code) => {
    console.log(
        `About to exit with code: ${code}` // This will log before the process exits
    )
});

//exit
 process.exit(1); // Exit the process with a status code (0 for success, 1 for failure)

 console.log("Process will not reach here because of exit()"); // This line will not be executed

