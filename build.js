const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function main() {
  const dir = path.join(__dirname, "build");

  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const files = fs.readdirSync(path.join(__dirname, "src"));
  for(const file of files) {
    if(file.endsWith(".html") || file.endsWith(".js")) {
      const pathToFile = path.join(__dirname, "src", file);
      fs.copyFileSync(pathToFile, path.join(dir, file));

      if(file.endsWith(".html")) {

        let content = fs.readFileSync(pathToFile, "utf8");
        // read each html file copied and replace "../dist" to "./"
        content = content.replace(/..\/dist/g, ".");

        // read each html file copied and replace "../public" to "./public"
        content = content.replace(/..\/public/g, ".\/public");

        fs.writeFileSync(path.join(dir, file), content);
      }
    }
  }

  fs.cpSync(path.join(__dirname, "dist", "output.css"), path.join(dir, "output.css"));
}

main();