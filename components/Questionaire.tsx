import React from 'react';
import QuestionButton from './QuestionButton';
import { gql, useQuery } from '@apollo/client';
export const CREATE_Questionaire_QUERY = gql`
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
const Questionaire = (props) => {
    const save = () => {
        useQuery(CREATE_Questionaire_QUERY, {
            // variables: listQuestionaireQueryVars,
            notifyOnNetworkStatusChange: true,
        });
        props.onclickAdd();
    };
    return (
        <div className="container">
            {props.item ? (
                <form >
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label">Question</label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="inputName" value={props.data.label} id="inputName" readOnly={true} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='col-sm-1-12 form-label' htmlFor="a">Answer</label>
                        <select className="custom-select form-control" name="a" id="a" readOnly={true}>
                            <option >Select one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div><br />
                    <div className="form-group">
                        <textarea className="form-control" rows="5" id="comment" readOnly={true}>{props.data.answer}</textarea>
                    </div><br />
                </form>
            ) : (
                <form >
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label">Question</label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="inputName" id="inputName" placeholder="" />
                        </div>
                    </div >
                    <div className="form-group">
                        <label className='col-sm-1-12 form-label' htmlFor="a">Answer</label>
                        <select className="custom-select form-control" name="a" id="a">
                            <option >Select one</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div><br />
                    <div className="form-group">
                        <textarea className="form-control" rows="5" id="comment" ></textarea>
                    </div><br />
                    <QuestionButton onClick={save} varient="btn-primary" name="Save & Share" />
                </form >
            )}
        </div>
    );
}

export default Questionaire;