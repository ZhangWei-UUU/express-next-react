# HTTP Fields

HTTP通信协议中request和response请求中，头部的信息的组成部分。而响应字段和请求字段并不相同。


### 媒体类型列表

|  Application            | Audio              | Multipart           | Text          | image|
| :---------------------: |:----------------: | :-------------------:| :------------:|:------------:|
|  `application/javascript` |  `audio/mpeg`   | `multipart/form-data`| `text/html`   |`image/png`|
|  `application/json`      |  `audio/ogg`     |                       | `text/css`   |`image/jpeg` |
|  `application/x-www-form-urlencoded`|       |                       | `text/xml`   | `image/gif`|
|  `application/zip`|       |                       | `text/csv`   | |
|  `application/pdf`|       |                       | `text/plain`   | |
|  `application/xml`|       |                       |   | |
|  `application/sql`|       |                       |   | |
|  `application/graphql`|       |                       |   | |
|  `application/ld+json`|       |                       |   | |
|  `application/msword`|       |                       |   | |
|  `application/vnd.openxmlformats-officedocument.wordprocessingml.document`|       |   |   | |
|  `application/vnd.ms-excel`|       |    |   | |
|  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`|       |    |   | |
|  `application/vnd.ms-powerpoint`|       |    |   | |
|  `application/vnd.openxmlformats-officedocument.presentationml.presentation`|       |    |   | |
|  `application/vnd.oasis.opendocument.text`|       |    |   | |





### 请求字段

|  名称    | 解释              | 案例                | 状态   | 
| :------:|:----------------: | :-----------------:| :-----:|
|  Accept |  可接受的媒体类型   | Accept:text/html   | permenant   | 
|  Accept-Encoding |  可接受的编码清单   | Accept-Encoding:gzip,deflate,br   | permenant   | 
|  Accept-Language |  可接受的人类语言清单   | Accept-Language:en-US   | permenant   |
|  Accept-Language |  可接受的人类语言清单   | Accept-Language:en-US   | permenant   |
|  Accept-Language |  可接受的人类语言清单   | Accept-Language:en-US   | permenant   |
|  Accept-Language |  可接受的人类语言清单   | Accept-Language:en-US   | permenant   |
|  Accept-Language |  可接受的人类语言清单   | Accept-Language:en-US   | permenant   |

### 响应字段

|  名称    | 解释              | 案例                | 状态   | 
| :------:|:----------------: | :-----------------:| :-----:|
|  Cache-Control |  告诉客服两端所有缓存机制缓存   | Cache-Control: max-age=3600   | permenant   | 