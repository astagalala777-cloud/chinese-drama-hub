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
                华剧天地
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              汇聚最精彩的华语电视剧，为您带来极致的观影体验。
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">剧集类型</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">古装剧</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">现代剧</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">仙侠剧</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">武侠剧</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">帮助中心</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">常见问题</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">联系客服</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">用户协议</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">隐私政策</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">关注我们</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">微信公众号</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">微博</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">抖音</a></li>
              <li><a href="#" className="text-foreground/50 hover:text-gold transition-colors text-sm">小红书</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            © 2024 华剧天地. 保留所有权利.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/40 hover:text-gold transition-colors text-sm">用户协议</a>
            <a href="#" className="text-foreground/40 hover:text-gold transition-colors text-sm">隐私政策</a>
            <a href="#" className="text-foreground/40 hover:text-gold transition-colors text-sm">Cookie设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
