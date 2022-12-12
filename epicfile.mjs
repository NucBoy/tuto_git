import { armandIsTheBest } from "./mycode.mjs";

const SPACE = " ";

async function connard() {
  const connard = "connard";
  const delayms = 500;
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve(connard);
    }, delayms)
  );
  return promise;
}
function batard() {
  console.log("batard");
}

console.log(armandIsTheBest().join(SPACE));
connard().then((value) => {
  console.log(`voilà on a bien attendu notre valeur ... : ${value}`);
  batard();
});
