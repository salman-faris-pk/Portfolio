import {links} from "./datas"



export type SectionName = (typeof links)[number]["hash"];

export type Link={
    nameEng: string;
    hash: string;
}

export type projectInfo={
    title: string;
    description: string | null;
    tags: string[];
    imageUrl: string;
    Allimg: string[];
    Github: string | null;
    preview?: string | undefined;
}