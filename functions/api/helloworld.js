export default {
  async fetch(request, env) {
    let counter = parseInt(env.KVStore.get("counter"))
    env.KVStore.put("counter",counter+1);
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  return new Response("Hello world")
}