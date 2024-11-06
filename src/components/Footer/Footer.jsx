const Footer = () => {
    return (
        <footer className="bg-white py-16">
            <div className="w-10/12 mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Gadget Heaven</h2>
                    <p className="text-gray-500 my-6">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="md:flex md:justify-around">
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </nav>
                    <nav className="flex flex-col my-4 md:my-0">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of service</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;