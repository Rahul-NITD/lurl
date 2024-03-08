# OURL

**O**nline **URL**: Boil down complex HTTP requests to a simple GET! We are mainly focused on the webhook market!

## Use case
Want to send attach a webhook but also want to allow headers? This allows you to do that.

### Trivial use case
A simple GET request in curl
```bash
curl https://jsonplaceholder.typicode.com/posts/1
```
is the same as
```bash
curl https://aargee.pythonanywhere.com/curl?req=https://jsonplaceholder.typicode.com/posts/1
```
So far, nothing cool!

### Main use case
What about calling an API that requires additional stuff like Authorization headers?
```bash
curl -X POST https://reqbin.com/echo/get/json
     -H "Authorization: Bearer {token}"
```
is the same as
```bash
curl https://aargee.pythonanywhere.com/curl?method=POST&req=https://reqbin.com/echo/get/json&headers={"Authorization": "Bearer {token}"}
```
That is a GET request. But both yield the same response.

## Parameters
1. `method` \
   Values: `GET`, `POST`   
   Currently, only `GET` and `POST` are allowed. Leave an issue if you want more support.
2. `req` \
   The URL to make the request to.
3. `headers` \
   JSON object containing key-value pairs for headers. Currently, only one value per key is supported; you can request more in issues.

A frontend application is on the way that can create these links for you! Stay tuned!   
> [!CAUTION]
> Make sure the final URL does not exceed 2000 characters!
