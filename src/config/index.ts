export const PRODUCT_CATEGORIES = [
    {
        label: 'Automação',
        value: 'automation' as const,
        featured: [
            {
                name: 'Destaques',
                href: `/products`,
                imageSrc: '/nav/automation.png'
            },
            {
                name: 'Recém-incluidos',
                href: '/products',
                imageSrc: '/nav/automation.png'
            },
            {
                name: 'Mais vendidos',
                href: '/products',
                imageSrc: '/nav/automation.png'
            }
        ]
    },
    {
        label: 'Gestão',
        value: 'management' as const,
        featured: [
            {
                name: 'Destaques',
                href: `/products`,
                imageSrc: '/nav/managment.png'
            },
            {
                name: 'Recém-incluidos',
                href: '/products',
                imageSrc: '/nav/managment.png'
            },
            {
                name: 'Mais vendidos',
                href: '/products',
                imageSrc: '/nav/managment.png'
            }
        ]
    }
];
