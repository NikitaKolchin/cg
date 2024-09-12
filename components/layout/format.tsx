'use client';

import { Section } from '@/components/shared/section';
import { IconList } from '../shared/icon-list';
import { Button } from '../ui/button';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from './format.module.css';
const Format = () => (
    <Section
        isSkewed={true}
        beforeElement={
            <div className="md:hidden h-36 flex flex-col justify-between mb-12">
                <div className="flex justify-center">
                    <Button size={'lg'}>Связаться со мной</Button>
                </div>
                <IconList color="black" size={48} />
            </div>
        }
        color="bg-light"
        title="Формат работы"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <Accordion allowMultiple>
            <AccordionItem
                className={styles.item}
                buttonProps={{
                    className: ({ isEnter }) =>
                        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
                }}
                contentProps={{ className: styles.itemContent }}
                panelProps={{ className: styles.itemPanel }}
                header={
                    <div className="text-normal text-3xl font-bold">
                        Психологическое консультирование​
                        <img
                            className={styles.chevron}
                            src={'/assets/shevron-down.svg'}
                            alt="Chevron Down"
                        />
                    </div>
                }
            >
                Помощь в решении трудных жизненных ситуаций
            </AccordionItem>
            <AccordionItem header="Профдиагностика и карьерное консультирование">
                Помощь в выборе профессии и самоопределении, выявление сильных
                сторон и зон роста, построение карьерного трека
            </AccordionItem>

            <AccordionItem header="Тренинги и мастер-классы">
                Групповая работа по различным тематикам
            </AccordionItem>

            <AccordionItem header="Игровые методики">
                Метафорические ассоциативные карты​ Игра «Лила»​ Игра «Ключ к
                подсознанию»​ Игра «Профориентатор» и другие
            </AccordionItem>
        </Accordion>
    </Section>
);

export { Format };
