// Q1
// On Unix systems, there is a command line tool called grep that can be used to quickly search files for a regular expression.
// Write a Node script that can be run from the command line and acts some- what like grep. It treats its first command line argument as a regular expression and treats any further arguments as files to search. It outputs the names of any file whose content matches the regular expression.
// When that works, extend it so that when one of the arguments is a directory, it searches through all files in that directory and its subdirectories.
// Use asynchronous or synchronous file system functions as you see fit. Setting things up so that multiple asynchronous actions are requested at the same time might speed things up a little, but not a huge amount, since most file systems can read only one thing at a time.
import {statSync, readdirSync, readFileSync} from "node:fs";

let searchTerm = new RegExp(process.argv[2]);

for (let arg of process.argv.slice(3)) {
  search(arg);
}

function search(file) {
  let stats = statSync(file);
  if (stats.isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + "/" + f);
    }
  } else if (searchTerm.test(readFileSync(file, "utf8"))) {
    console.log(file);
  }
}

// Q2
// Though the DELETE method in our file server is able to delete directories (using rmdir), the server currently does not provide any way to create a directory.
// Add support for the MKCOL method (“make collection”), which should create a directory by calling mkdir from the node:fs module. MKCOL is not a widely used HTTP method, but it does exist for this same purpose in the WebDAV standard, which specifies a set of conventions on top of HTTP that make it suitable for creating documents.
import {mkdir} from "node:fs/promises";

methods.MKCOL = async function(request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204};
  }
  if (stats.isDirectory()) return {status: 204};
  else return {status: 400, body: "Not a directory"};
};

// Q3
//Public Space on web
document.addEventListener("DOMContentLoaded", () => {
  const fileSelect = document.getElementById("file-select");
  const fileContent = document.getElementById("file-content");

  fetch("/").then(response => response.text()).then(data => {
    const files = data.split("\n").filter(name => name);
    files.forEach(file => {
      const option = document.createElement("option");
      option.value = option.textContent = file;
      fileSelect.appendChild(option);
    });
  });

  fileSelect.addEventListener("change", () => {
    const file = fileSelect.value;
    fetch(file).then(response => response.text()).then(data => {
      fileContent.value = data;
    });
  });

  document.getElementById("file-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const file = fileSelect.value;
    fetch(file, {
      method: "PUT",
      body: fileContent.value,
    }).then(response => {
      if (response.ok) {
        alert("File saved successfully!");
      } else {
        alert("Failed to save the file.");
      }
    });
  });
});
