import './Modal.css';

export default function Modal({ error, isdone = false }) {
  return (
    isdone ? (
      <div  className={error ? 'error modal center' : 'modal center'} >
        {error==true ? <h1>please fill the required Fields</h1> : <h1>Sie haben erfolgreich anmelden</h1>}
      </div>
    ) : (
      <></>
    )
  );
}