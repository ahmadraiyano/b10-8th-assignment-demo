const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="text-center">
                <h2>Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="flex flex-col md:justify-around justify-self-center gap-y-4">
            <nav className="flex flex-col">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Product Support</a>
                <a className="link link-hover">Order Tracking</a>
                <a className="link link-hover">Shipping & Delivery</a>
                <a className="link link-hover">Returns</a>
            </nav>
            <nav className="flex flex-col">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;