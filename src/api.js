export default function makeCallTo(path) {
  return window.fetch(`https://my-json-server.typicode.com/shripad-agashe/fake-api/${path}`)
      .then(res => res.json());
}