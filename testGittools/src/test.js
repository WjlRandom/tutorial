function a() {
  const { spawn } = require("child_process");
  const ls = spawn("ls", ["-lh", "/usr"]);

  ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });

  ls.on("close", code => {
    console.log(`子进程退出码：${code}`);
  });
}

function b() {
  const child_process = require("child_process");
  var ls = child_process.exec(
    "git clone  https://github.com/karan/s.git",
    {
      cwd: process.cwd()
    },
    function(error, stdout, stderr) {
      if (error) {
        console.log(error);
      }
      console.log("--stdout", stdout);
      console.log("stderr", stderr);
    }
  );
  ls.on("close", code => {
    console.log(`子进程退出码：${code}`);
  });
}
b();
