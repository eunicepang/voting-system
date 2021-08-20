

function Candidate(props) {

  return (
    <div className='candidate'>
      <p>{props.name}</p>
      <p>{props.vote}</p>
      <button onClick={props.addVote}>Vote</button>
    </div>
  );
}

export default Candidate;
