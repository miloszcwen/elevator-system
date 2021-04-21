// https://stackoverflow.com/a/35449256
// override the default implementation of console.log()
// to see console.log() in html file

(function () {
  const old = console.log;
  const logger = document.getElementById("console-log");
  console.log = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        logger.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();
