# blog-schedule
App to schedule blog posts

## Backend

### GET /api/post
Gets all posts

### GET /api/post/:id
Gets specific post by id

### Post /api/post
Creates new post
Data needed:
| Name | Required | Type |
| ----  | -------- | -----|
| title | r | string |
| date | r | date(MM-DD-YYYY) |
| description |  | String |
| author |  | String |
| status | r | String |
| category |  | String |

### PUT /api/post/:id
Updates Post
Data needed:
| Name | Required | Type |
| ----  | -------- | -----|
| title | r | string |
| date |  | date(MM-DD-YYYY) |
| description |  | String |
| author |  | String |
| status | r | String |
| category |  | String |

### DELETE /api/post/:id
Deletes post
