import './Choice.css';


function Choice({ img, label, onClick }) {
    console.log('Rendering Choice:', label);

    if (!img || !label) return null; // simple guard

    return (
        <button className="choice" onClick={onClick} aria-label={label}>
            <img src={img} alt={label} />
        </button>
    );
}

export default Choice;
