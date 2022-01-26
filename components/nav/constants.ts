type navLinksType = navObj[];

type navObj = {
    label: string,
    linkTo: string
};

const NAV_LINKS: navLinksType = [
    {
        label: 'Inicio',
        linkTo: '#HOME'
    },
    {
        label: 'Sobre mi',
        linkTo: '#PROJECTS'
    },
    {
        label: 'Portafolio',
        linkTo: '#ABOUT'
    },
    {
        label: 'Media',
        linkTo: '#ABOUT'
    },
    {
        label: 'Contacto',
        linkTo: '#CONTACT'
    },
];

export {
    NAV_LINKS,
}