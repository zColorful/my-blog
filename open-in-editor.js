const launch = require("launch-editor");

launch(
  // filename:line:column
  // both line and column are optional
  "./docs/javascript/vue相关笔记/index.md:6:52",
  // try specific editor bin first (optional)
  "code",
  // callback if failed to launch (optional)
  (fileName, errorMsg) => {
    console.log("fileName", fileName);
    console.log("errorMsg", errorMsg);
    // log error if any
  }
);
