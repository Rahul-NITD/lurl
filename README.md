# OURL
**O**nline **URL**, boil down complex http requests to a simple GET! We are mainly focused for the webhook market!

## Usecase:
Want to send attach a webhook but also want to allow headers? This allows you to do that.

### Trivial usecase
A simple get request in curl
```bash
curl https://jsonplaceholder.typicode.com/posts/1
```
is same as
```bash
curl https://aargee.pythonanywhere.com/curl?req=https://jsonplaceholder.typicode.com/posts/1
```
so far nothing cool!

### Main usecase
What about calling an API that requires additional stuff like Authorization headers
```bash
curl -X POST https://reqbin.com/echo/get/json
     -H "Authorization: Bearer {token}"
```
is same as
```bash
curl https://aargee.pythonanywhere.com/curl?method=POST&req=https://reqbin.com/echo/get/json&headers={"Authorization": "Bearer {token}"}
```
That is a GET request. But both yield same response.

## Parameters
1. `method` \
   values = `GET`, `POST`   
   Currently only `GET` and `POST` are allowed. Leave an issue if you want more support.
2. `req` \
   The url to make request to
3. `headers` \
   JSON object containing key value pairs for headers. Currently only one value per key is supported, you can request for more in issues.

A frontend application is on the way that can create these links for you! stay tuned!   
