import { AppConfig } from '@/lib/utils';

const FooterCopyright = () => (
    <div className="footer-copyright">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
    </div>
);

export { FooterCopyright };
