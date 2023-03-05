import './HomeScreen.css'

export default function HomeScreen(props) {
    return (
        <div className="centering">
            <div>
                <div className='container'>
                    <h1>Food & Drink Quiz</h1>
                    <p>You'll get 5 questions about food and drinks. Click the button to start the fun!</p>
                    <button onClick={props.handleClick}>Start quiz</button>
                </div>
                <svg className='decorations' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EDF1D6" fillOpacity="1" d="M0,96L40,90.7C80,85,160,75,240,96C320,117,400,171,480,160C560,149,640,75,720,85.3C800,96,880,192,960,229.3C1040,267,1120,245,1200,208C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                <svg className='decorations' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9DC08B" fillOpacity="1" d="M0,32L40,37.3C80,43,160,53,240,96C320,139,400,213,480,213.3C560,213,640,139,720,96C800,53,880,43,960,69.3C1040,96,1120,160,1200,165.3C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}