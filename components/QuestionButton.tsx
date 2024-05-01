const QuestionButton = (props) => {
    const onclick = (e) => {
        e === 'Add Question' ? Add() : Save();
    }
    const Add = () => {
        props.onClick();
    }
    const Save = () => {
        props.onClick();
    }
    return (
        <div className="form-group">
            <button className='col-md-12 btn btn-danger' type="button" onClick={e => onclick(props.name)}>{props.name}</button>
        </div>
    );
}
export default QuestionButton;