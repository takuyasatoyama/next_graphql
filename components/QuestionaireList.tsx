import { gql, useQuery, NetworkStatus } from '@apollo/client';
import ErrorMessage from '@/components/ErrorMessage';
import Questionaire from './Questionaire';
import QuestionButton from './QuestionButton';
import { useState } from 'react';
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
    const [viewInput, setViewInpyt] = useState<Boolean>(false);
    const { loading, error, data, fetchMore, networkStatus } = useQuery(LIST_Questionaire_QUERY, {
        // variables: listQuestionaireQueryVars,
        notifyOnNetworkStatusChange: true,
    });

    const loadingMoreQuestionaires = networkStatus === NetworkStatus.fetchMore;

    if (error) return <ErrorMessage message="Error loading Questionaires." />;
    if (loading && !loadingMoreQuestionaires) return <div>Loading</div>;

    console.log('🚀 ~ file: QuestionaireList.tsx ~ line 53 ~ QuestionaireList ~ data', data);

    const onclickAdd = () => {
        setViewInpyt(!viewInput);
    }
    const { listQuestionaire } = data;
    return (
        <section>
            {<ul>
                {listQuestionaire?.edges.map((questionaire: any, index: number) => (
                    <Questionaire data={questionaire} item={true} key={index} />
                ))}
            </ul>}
            <div className='container'>
                {viewInput ? (
                    <QuestionButton className="form-group" variant="primary" onClick={onclickAdd} name="Add Question" />
                ) : (
                    <Questionaire item={false} onclickAdd={onclickAdd} />
                )}
            </div>
        </section>
    );
}