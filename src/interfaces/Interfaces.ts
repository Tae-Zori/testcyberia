export interface ICategoria {
    id: number;
    name: string;
}

export interface IProject {
    id: number;
    title: string;
    slug: string;
    project_url: null | string;
    image: string;
    image_dark: string;
    description: string;
    geo: {
        lat: null | string;
        lng: null | string;
    };
    categories: ICategoria[];
}

export interface ICategories {
    items: ICategoria[];
}
export interface IProjects {
    items: IProject[];
}

export interface IPageNames {
    [key: string]: string;
}
