export default function currentUrlPath() {
  const { pathname } = window.location;
  
  const arrPathname = pathname.split("");
  if (arrPathname[0] === "/") {
    arrPathname.shift();
  }

  const length = arrPathname.length;

  if (arrPathname[length - 1] === "/") {
    arrPathname.pop();
  }

  return arrPathname.join("").split("/").pop();
}
