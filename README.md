# zhub-api
A simple web scraping API that gets the HLS links from PornHub videos.

## Installation

Step 1. Install [Node.js](nodejs.org) on your computer.

Step 2. Create a folder somewhere in your computer.

Step 3. Open a terminal of your choice and go the path of your folder.

```
cd zhub-api
```

Step 4. Initialize Node.js in your folder:

```
node init
```
Enter the information you want. Wherever you don't know what to input just press Enter.

Step 5. Install express, request and cheerio.

```
node install --save express request cheerio
```

Step 6. Download the file [index.js](https://github.com/ZisisPolychronidis/zhub-api/blob/dae6cab7b8260f9b4aed586442e5a7632d5710cd/index.js) and put it inside your folder.

Step 7. Run the API.

```
node index.js
```

Step 8. Test the API.

Go to http://localhost:5000/?id=video_id (change video_id with an actual id)

## Example
This is what the json response should look like:

```
{"id":"ph5ad37a09b2849","url":"https://www.pornhub.com/embed/ph5ad37a09b2849","hls":"https://ee-h.phncdn.com/hls/videos/201804/15/162203272/480P_2000K_162203272.mp4/master.m3u8?validfrom=1699870122&validto=1699877322&ipa=94.68.33.121&hdl=-1&hash=QAVWaiZrmHSbv57B0XBE4szj4PE%3D"}
```
