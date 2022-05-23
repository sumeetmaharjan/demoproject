export interface Blog {
    id: string;
    title: string;
    headerImage: string;
    content: string;
    contentSummary?: string;
    createdDate: Date;
    updatedDate: Date;
    tags?: string[];
}
