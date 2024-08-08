import { AppConfig } from '@/lib/utils';

const FooterCopyright = () => (
    <div className="footer-copyright">
        ©{new Date().getFullYear()} {AppConfig.title}
    </div>
);

export { FooterCopyright };
