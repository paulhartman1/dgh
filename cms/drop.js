// If you are using JavaScript/ECMAScript modules:
import Dropzone from "dropzone";

let myDropzone = new Dropzone("#my-form");
myDropzone.on("addedfile", file => {
  console.log(`File added: ${file.name}`);
});