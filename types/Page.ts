import { PortableTextBlock } from "sanity";

export type Page = {
    map(arg0: (page: any) => import("react").JSX.Element): import("react").ReactNode;
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[]
}