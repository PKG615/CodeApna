# Database Schema (MongoDB)

## users (implemented)
- _id
- name
- email (unique)
- password (hashed)
- message
- address
- city
- state
- country
- pincode
- phone
- createdAt, updatedAt

## blogs (planned)
- _id
- title
- slug (unique)
- summary
- content
- author -> users._id
- category
- tags[]
- likes
- coverImage
- createdAt, updatedAt

## comments (planned)
- _id
- blog -> blogs._id
- author -> users._id
- body
- createdAt, updatedAt

## courses (planned)
- _id
- title
- slug (unique)
- description
- level
- instructor -> users._id
- lessons[] { title, duration, content }
- tags[]
- price
- isPublished
- createdAt, updatedAt

## enrollments (planned)
- _id
- user -> users._id
- course -> courses._id
- status (active, completed)
- progress
- createdAt, updatedAt

## questions (planned)
- _id
- title
- body
- author -> users._id
- tags[]
- votes
- answers[] { author, body, votes, createdAt }
- createdAt, updatedAt
