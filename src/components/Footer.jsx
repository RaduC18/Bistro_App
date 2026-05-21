function Footer() {
  return (
    <footer className="w-full bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-white font-bold text-lg mb-4 tracking-tight">Contact Us</h3>
          <p className="mb-2">
            Phone: +40 712 345 678
          </p>
          <p>
            Email: contact@bistro.com
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4 tracking-tight">Opening Hours</h3>
          <p className="mb-2">Monday - Friday: 8:00 PM - 10:00 PM</p>
          <p>Saturday - Sunday: 8:00 PM - 11:00 PM</p>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4 tracking-tight">Our Address</h3>
          <p>Șoseaua Mihai Bravu 307</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-8 pt-8 border-t border-stone-800 text-sm text-center md:text-left">
        <p>&copy; 2026 Bistro Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;