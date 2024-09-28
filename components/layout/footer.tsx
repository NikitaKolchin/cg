import { Section } from '../shared/section';
import { Logo } from '../ui/logo';
import { IconList } from '../shared/icon-list';
import { Menu } from '../shared/menu';

const Footer = () => {
    return (
        <Section color="bg-dark" Tag="footer">
            <div className="flex max-sm:flex-col-reverse max-sm:gap-8 justify-between sm:items-center sm:text-center">
                <Logo isTop={false} />
                <Menu isTop={false} />
                <div className="sm:hidden flex flex-col gap-4">
                    <IconList color="white" size={46} alignLeft={true} />
                    <span className="text-white text-3xl">
                        +7 (999) 072-07-17
                    </span>
                </div>
                <div className="max-sm:hidden flex flex-col gap-4">
                    <IconList color="white" size={28} />
                    <span className="text-white text-xl">
                        +7 (999) 072-07-17
                    </span>
                </div>
            </div>
        </Section>
    );
};

export { Footer };
