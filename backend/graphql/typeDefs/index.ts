export default `
type Questionaire {
  _id : ID,
  label : String,
  answer_type : Int,
  answer : String
}

type InputQuestionaireType {
  label : String,
  answer_type : Int,
  answer : String
  
}
type Mutation {
	
	deleteQuestionaire(_id : ID ) : Boolean 
}
type QuestionaireEdgesType {
	edges : [Questionaire]
}
type Query {
	readQuestionaire( _id : ID ) : Questionaire,
	listQuestionaire( str : String ) : QuestionaireEdgesType,
	searchQuestionaire( query : String!, fields : String!) : [Questionaire]
} type User {
  _id: ID!
  email: String
  password: String
}

input InputUserType {
  email: String!
  password: String!
}

type Mutation {
  createUser(body: InputUserType!): User
  updateUser(_id: ID!, body: InputUserType!): User
  deleteUser(_id: ID!): Boolean
}

type UserEdgesType {
  edges: [User]
}

type Query {
  readUser(_id: ID!): User
  listUser( str : String! ): UserEdgesType
  searchUser(query: String!, fields: String!): [User]
}`;