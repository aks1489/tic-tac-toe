export default function TicTacToe(){
    return(
        <div className="box-container">
            <div className="row">
                <div className="box"><img className="circle" src="circle.png" alt="" /></div>
                <div className="box"><img className="cross" src="x.png" alt="" /></div>
                <div className="box">3</div>
            </div>
            <div className="row">
                <div className="box">4</div>
                <div className="box">5</div>
                <div className="box">6</div>
            </div>
            <div className="row">
                <div className="box">7</div>
                <div className="box">8</div>
                <div className="box">9</div>
            </div>
        </div>
    )
}