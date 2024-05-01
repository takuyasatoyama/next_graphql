import { gql, useQuery, NetworkStatus } from '@apollo/client';
import ErrorMessage from '@/components/ErrorMessage';
export const LIST_Questionaire_QUERY = gql`
  query listQuestionaire($str: String ) {
    listQuestionaire( str : $str ) {
      edges {
        _id
        label
        answer_type
        answer
      }
    }
  }
`;

export default function QuestionaireList() {

  const { loading, error, data, fetchMore, networkStatus }= useQuery(LIST_Questionaire_QUERY, {
    // variables: listQuestionaireQueryVars,
    notifyOnNetworkStatusChange: true,
  });

  const loadingMoreQuestionaires = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading Questionaires." />;
  if (loading && !loadingMoreQuestionaires) return <div>Loading</div>;

  console.log('🚀 ~ file: QuestionaireList.tsx ~ line 53 ~ QuestionaireList ~ data', data);

  const { listQuestionaire } = data;
  return (
    <section>
      {<ul>
        {listQuestionaire?.edges.map((Questionaire: any, index: number) => (
          <li key={Questionaire._id}>
            <div>
              <span>{index + 1}. </span>
              <div>{Questionaire.label}</div>
              <div>{}</div>
              <div></div>
            </div>
          </li>
        ))}
      </ul> }
    </section>
  );
}
