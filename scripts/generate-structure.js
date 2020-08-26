const shell = require("child_process").execSync;

const newDirs = {
  c: "\\/\\/",
  cs: "\\/\\/",
  cpp: "\\/\\/",
  go: "\\/\\/",
  java: "\\/\\/",
  js: "\\/\\/",
  kt: "\\/\\/",
  php: "#",
  py: "#",
  rb: "#",
  rs: "\\/\\/",
  scala: "\\/\\/",
  swift: "\\/\\/",
  ts: "\\/\\/",
};

for (const key in newDirs) {
  const commentChars = newDirs[key];
  shell(`rm -rf ${key}`);
  shell(`mkdir -p ${key}`);
  shell(`cp -r __template__/* ./${key}`);
  shell(
    `for f in $(find ${key} -type f); do sed -i '' 's/^/${commentChars}  /' $f; mv $f $f.${key}; done`
  );
}
