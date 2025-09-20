import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0);
    //Total 4 Count
    const [fours,setFours] = useState(0);
    // Total 6 count
    const [sixes, setSixes]= useState(0);


    const handleSignle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }
    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Four: {fours}</small></p>
           <p><small>SIx: {sixes}</small></p>
            {
                runs > 50 && <p>Your Score: 50</p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSignle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}