import React from 'react';
import DividendEg from '../assets/network.png'
import CryptoEg from '../assets/crypto.png'
import RustFinanceCalc from '../assets/rust.png'
// import JSGameEg from '../assets/typingGame.png'
// import stockAppEg from '../assets/stock-app.png'
// import golfTrackerApp from '../assets/golf-tracker-app.png'
// import ToDoEg from '../assets/todo.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-[#caccc1] bg-[#151a1d]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#caccc1] border-[#bf874c]'>Projects</p>
                    <p className='py-6'>// Check out some of my recent projects</p>
                </div>

                {/* Containor */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${DevOperations})` }}
                        className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                                dev_operations
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://www.devoperations.ca/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/parsTroy/dev_operations'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${FinancialRiskInsightsPlatform})` }}
                        className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                                Financial Risk Insights Platform
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/parsTroy/financial-risk-insights-platform'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Clone</button>
                                </a>
                                <a href='https://github.com/parsTroy/financial-risk-insights-platform'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${WebServerCpp})` }}
                        className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                                C++ Web Server
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/parsTroy/web-server-cpp'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/parsTroy/web-server-cpp'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* <div
                        style={{ backgroundImage: `url(${golfTrackerApp})` }}
                        className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>

                        // Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                                Golf Score Tracker
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://parstroy.github.io/responsive-golf-tracker/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/parsTroy/responsive-golf-tracker'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    Grid Item
                    <div
                        style={{ backgroundImage: `url(${stockAppEg})` }}
                        className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>

                        // Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                                Stock Tracker
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://parstroy.github.io/stock-app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/parsTroy/stock-app.git'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${ToDoEg})` }}
                        className='shadow-lg shadow-[#040c16] group containor rounded-md flex justify-center items-center mx-auto content-div'>

                        // Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#caccc1] tracking-wider'>
                                React To-Do App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://parstroy.github.io/firebase-react-todo-app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/parsTroy/firebase-react-todo-app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#caccc1] text-[#1b3338] font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div >
    )
}

export default Projects;