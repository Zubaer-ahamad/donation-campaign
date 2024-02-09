const Banner = () => {
    return (
        <div className="hero min-h-[600px] mt-24" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700524800&semt=ais)' }}>
            <div className="hero-overlay bg-slate-100 bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="flex items-center gap-2 justify-center mt-10">
                        <input className="w-2/5 h-11 rounded-lg p-2" type="text" placeholder="Search here...." />
                        <button className="btn btn-error text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;