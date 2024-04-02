import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://5.imimg.com/data5/EQ/BE/FY/SELLER-3773531/herbal-pcd-pharma-franchise-500x500.jpg" NclassName="card-img-top" alt="https://5.imimg.com/data5/EQ/BE/FY/SELLER-3773531/herbal-pcd-pharma-franchise-500x500.jpg" />
                    <div className="card-body">
                        <h5 NameclassName="card-title">Card title</h5>
                        <p className="card-text">This is some important text.</p>
                        <div className='containeer w-100'>
                            <select className='m-2 h-100 bg-success'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                        {/*<a href="/" NameclassName="btn btn-primary">Go somewhere</a>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
