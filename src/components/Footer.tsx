const Footer = () => {
  return (
    <footer className="py-12 bg-surface-darker border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-crimson to-crimson-dark flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">華</span>
              </div>
              <span className="text-xl font-display font-semibold text-gradient-gold">
                Drama China
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              Kumpulan drama China terbaik untuk pengalaman menonton yang luar biasa.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kategori Drama</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Kostum Kuno</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Modern</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Fantasi</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Wuxia</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Hubungi Kami</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">TikTok</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            © 2024 Drama China. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/40 hover:text-gold transition-colors text-sm">Syarat & Ketentuan</a>
            <a href="#" className="text-foreground/40 hover:text-gold transition-colors text-sm">Kebijakan Privasi</a>
            <a href="#" className="text-foreground/40 hover:text-gold transition-colors text-sm">Pengaturan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
