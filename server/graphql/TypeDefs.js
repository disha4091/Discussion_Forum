const {gql} = require('apollo-server') ;

// if required is put inside an array --> it means that the array should have atleast one element in
module.exports = gql`
    type Post{
        id:ID!
        body: String!
        createdAt: String! 
        username:String!
        bio:String!
        category:String!
        comments: [Comment]!  
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!

    },
    type Comment{
        id: ID!
        createdAt: String!
        username: String!
        bio: String!
        body: String!
    }
    type Like{
        id: ID!
        createdAt: String!
        username: String!
    }
    type User{
        id: ID!
        email: String!
        bio:String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        bio:String!
        confirmPassword: String!
        email: String!
    }
    input UpdateInput{
        newbio:String!
    }
    type Query{
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!) : User!
        updateBio(username: String!, newBio: String!) : User!
        createPost(body: String!, category: String!) : Post!
        deletePost(postId: ID!): String!
        createComment(postId: String!, body: String!) : Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!) : Post!
    }
    type Subscription{
        newPost: Post!
    }
    ` ;
    
